import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCarousel from './ProductCarousel';

const BestSellerSection = () => {
   const [bestSellerData, setBestSellerData] = useState([]);
   const [bs_page, setBs_page] = useState(1);
   useEffect(() => {
     axios
       .get(
         `https://stormy-wave-76232.herokuapp.com/BESTSELLERDATA?_limit=3&page=${bs_page}`
       )
       .then((res) => setBestSellerData(res.data))
       .catch((err) => console.log("Best Seller Section Error",err));

     return () => {};
   }, [bs_page]);
  return (
    <div className="bestSellerSection">
      <h2 className="bestSellerHeading">Best Sellers</h2>
      <ProductCarousel productdata={bestSellerData} />
    </div>
  );
}

export default BestSellerSection