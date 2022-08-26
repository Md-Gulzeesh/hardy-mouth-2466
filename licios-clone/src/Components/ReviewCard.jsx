import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ img_url, avatar, name, description, recipe_type }) => {
  return (
    <div style={{ width: "18rem" }}>
      <div className="ReviewCardtopImage">
        <img
          className="recipeImage"
          src={img_url}
          alt="recipe"
        />
      </div>
      <div className="d-flex justify-content-between p-2 mt-2 mb-1">
        <div className="d-flex gap-1">
          <img
            className="avatarImage"
            src={avatar}
            alt={name}
          />
          <span>{name}</span>
        </div>
        <div className="d-flex gap-1">
          <div>
            <img
              width="15px"
              src="https://s3-ap-southeast-1.amazonaws.com/liciousdev/Banner/instagram-logo.png"
              alt="instagram"
            />
          </div>
          <span style={{ color: "#d11243" }}>Instagram</span>
        </div>
      </div>
      <div>
        <p className="reviewDescription">
          {description}
        </p>
      </div>
      <div style={{ textAlign: "left" }}>
        <Link to="" className="link">
          <img
            width="20px"
            src="https://www.licious.in/img/rebranding/chicken-leg2.png"
            alt="legPiece"
          />
          {recipe_type}
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
