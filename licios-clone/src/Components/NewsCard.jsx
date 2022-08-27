import React from "react";

const NewsCard = ({img_url,title}) => {
  return (
    <div>
      <img
        className="newsCardImage"
        src={img_url}
        alt="liciousNews"
      />
      <span className="newsCardText">
       {title}
      </span>
    </div>
  );
};

export default NewsCard;
