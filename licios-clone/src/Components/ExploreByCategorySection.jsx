import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem';

const ExploreByCategorySection = () => {
  const [exploreByCatData, setExploreByCatData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://stormy-wave-76232.herokuapp.com/CATEGORYDATA`)
      .then((res) => setExploreByCatData(res.data))
      .catch((err) => console.log("Explore Section", err));
  }, [])
  
  return (
    <div style={{ width: "80%", margin: "3rem auto" }}>
      <h2 className="ExploreBycatHeading">Explore by category</h2>
      <div className="ExplorebyCatItemsDiv">
        {exploreByCatData.map((elem) => (
          <CategoryItem key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
}

export default ExploreByCategorySection