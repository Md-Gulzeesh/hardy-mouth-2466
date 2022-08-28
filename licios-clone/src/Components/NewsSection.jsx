import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from "react-bootstrap/Carousel";
import NewsCard from './NewsCard';

const NewsSection = () => {
  const [newsData, setNewsData] = useState([])
  useEffect(() => {
    axios.get("https://stormy-wave-76232.herokuapp.com/NEWSDATA").then(res=> setNewsData(res.data)).catch(err=> console.log("News Section Error",err));
  }, [])
  
  return (
    <div className="newsSection">
      <h3 className='newsSectionHeading'>In the News</h3>
      <Carousel variant="dark" className="mt-1" indicators={false}>
        <Carousel.Item>
          <div className="d-flex gap-2 justify-content-center newsCardContainer">
            <NewsCard {...newsData[0]} />
            <NewsCard {...newsData[1]} />
            <NewsCard {...newsData[2]} />
            <NewsCard {...newsData[3]} />
            <NewsCard {...newsData[4]} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex gap-2 justify-content-center newsCardContainer">
            <NewsCard {...newsData[5]} />
            <NewsCard {...newsData[6]} />
            <NewsCard {...newsData[7]} />
            <NewsCard {...newsData[8]} />
            <NewsCard {...newsData[9]} />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default NewsSection