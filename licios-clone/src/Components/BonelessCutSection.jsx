import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCarousel from './ProductCarousel'

const BonelessCutSection = () => {
  const [bonelessData, setBonelessData] = useState([]);
  const [bl_page, setBl_page] = useState(1)
  useEffect(() => {
    axios
      .get(
        `https://stormy-wave-76232.herokuapp.com/BONELESSCUTDATA?page=${bl_page}&_limit=3`
      )
      .then((res) => setBonelessData(res.data))
      .catch((err) => console.log("Boneless Section Error",err));
  }, [bl_page]);
  
  return (
    <div className="bonelessCutSection">
      <h2 className='bonelessCutSectionHeading'>Boneless Cuts</h2>
      <ProductCarousel productdata={bonelessData}/>
    </div>
  );
}

export default BonelessCutSection