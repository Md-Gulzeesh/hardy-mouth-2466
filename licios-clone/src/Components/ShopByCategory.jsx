import React from 'react'
import { CATEGORYDATA } from './CategoryData';
import CategoryItem from './CategoryItem';

const ShopByCategory = () => {
  return (
    <div style={{ width: "80%", margin: "3rem auto" }}>
      <h2 className="shopBycat">Shop by categories</h2>
      <div className="shopBycatSubTitle">Freshest meats just for you</div>
      <div className="shopbyCatItemsDiv">{CATEGORYDATA.map(elem => (
        <CategoryItem {...elem}/>
      ))}</div>
    </div>
  );
}

export default ShopByCategory