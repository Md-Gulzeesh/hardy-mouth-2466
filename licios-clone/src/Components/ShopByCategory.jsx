import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem';
import axios from "axios";
const ShopByCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    axios.get("https://stormy-wave-76232.herokuapp.com/CATEGORYDATA").then(res => {
      console.log(res.data);
      setCategoryData(res.data)
    }).catch(err=> console.log(err));
  
    return () => {
      
    }
  }, [])
  
  return (
    <div style={{ width: "80%", margin: "3rem auto" }}>
      <h2 className="shopBycat">Shop by categories</h2>
      <div className="shopBycatSubTitle">Freshest meats just for you</div>
      <div className="shopbyCatItemsDiv">{categoryData.map(elem => (
        <CategoryItem key={elem.id} {...elem}/>
      ))}</div>
    </div>
  );
}

export default ShopByCategory