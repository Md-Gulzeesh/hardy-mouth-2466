import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import NewsCard from './NewsCard';

const NewsSection = () => {
  return (
    <div className="newsSection">
      <h3 className='newsSectionHeading'>In the News</h3>
      <Carousel variant="dark" className="mt-1" indicators={false}>
        <Carousel.Item>
          <div className="d-flex gap-2 justify-content-center newsCardContainer">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex gap-2 justify-content-center newsCardContainer">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default NewsSection