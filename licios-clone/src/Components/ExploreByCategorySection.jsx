import React from 'react'
import { CATEGORYDATA } from './CategoryData';
import CategoryItem from './CategoryItem';

const ExploreByCategorySection = () => {
  return (
    <div style={{ width: "80%", margin: "3rem auto" }}>
      <h2 className="ExploreBycatHeading">Explore by category</h2>
      <div className="ExplorebyCatItemsDiv">
        {CATEGORYDATA.map((elem) => (
          <CategoryItem key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
}

export default ExploreByCategorySection