import React from 'react'
import { Link } from 'react-router-dom';

const BlogSection = () => {
  return (
    <div className="blogSection">
      <div className="blogSectionHeading">
        <span>Check out our blog</span>
        <Link to="" className="blogLink">
          See all
        </Link>
      </div>
      <div className="blogsDiv">
        <div className="blog">
          <img
            src="https://www.licious.in/blog/wp-content/uploads/2022/08/Shutterstock_1512002900.jpg"
            alt="blogImage"
          />
          <p className="blogTitle">
            What's Spicy, Flavourful and Oh-So-Good? Chinese Dragon Chicken!
          </p>
        </div>
        <div className="blog">
          <img
            src="https://www.licious.in/blog/wp-content/uploads/2022/08/Shutterstock_1679883574.jpg"
            alt="blogImage"
          />
          <p className="blogTitle">
            Explore the Realms of Asia With Thai Red Chicken Curry
          </p>
        </div>
        <div className="blog">
          <img
            src="https://www.licious.in/blog/wp-content/uploads/2022/08/Shutterstock_561626995.jpg"
            alt="blogImage"
          />
          <p className="blogTitle">
            Make This Delectable Andhra Style Chicken Curry at Home!
          </p>
        </div>
      </div>
      <img
      width="100%"
        src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34be7b89a3"
        alt="liciousBanner"
      />
    </div>
  );
}

export default BlogSection