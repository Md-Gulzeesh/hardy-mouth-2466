import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import ReviewCard from './ReviewCard';
import axios from 'axios';

const ReviewSection = () => {
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    axios.get("https://stormy-wave-76232.herokuapp.com/reviewData").then(res=> setReviewData(res.data)).catch(err=> console.log("Review Section",err))
  }, [])
  
  return (
    <div className="reviewSection">
      <div className="reviewSectionheading">
        <img
          src="https://d2407na1z3fc0t.cloudfront.net/Banner/Rebranding_homepage_madewithLicious.png"
          alt="cookImage"
        />
        <h3 className="reviewHeading">#MadeWithLicious</h3>
        <p>
          Cooking with Licious meats is more fun now! Post a picture of your
          Licious dish on our Instagram page, tag us and use #MadeWithLicious
          for a chance to be featured on our Instagram page! Happy Cooking!
        </p>
        <div>
          <Link to="" className="reviewSectionLink">
            Check it out!
          </Link>
          <span>
            <MdKeyboardArrowRight
              style={{ fontSize: "1rem", color: "#d11243" }}
            />
          </span>
        </div>
      </div>
      <Carousel variant="dark" className="mt-5" indicators={false}>
        <Carousel.Item>
          <div className="d-flex gap-2 justify-content-center">
            <ReviewCard {...reviewData[0]} />
            <ReviewCard {...reviewData[1]} />
            <ReviewCard {...reviewData[2]} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex gap-2 justify-content-center">
            <ReviewCard {...reviewData[3]} />
            <ReviewCard {...reviewData[4]} />
            <ReviewCard {...reviewData[5]} />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ReviewSection