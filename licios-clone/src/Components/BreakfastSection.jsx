import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCarousel from './ProductCarousel';

const BreakfastSection = () => {
   const [breakFastData, setBreakFastData] = useState([]);
   const [breakFastPage, setBreakFastPage] = useState(1);
   useEffect(() => {
     axios
       .get(
         `https://stormy-wave-76232.herokuapp.com/BREAKFASTDATA?page=${breakFastPage}&_limit=3`
       )
       .then((res) => setBreakFastData(res.data))
       .catch((err) => console.log("BreakFast Section Error",err));
   }, [breakFastPage]);
  return (
    <div className="breakFastSection">
      <h2 className="breakFastSectionHeading">Breakfast & Snacking Specials</h2>
      <ProductCarousel productdata={breakFastData}/>
    </div>
  );
}

export default BreakfastSection