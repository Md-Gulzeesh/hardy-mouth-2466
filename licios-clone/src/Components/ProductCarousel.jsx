// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";import CardComponent from './CardComponent';
;
const ProductCarousel = ({productdata,handlePrev,handleNext,page,lastPage
}) => {
 
  
  return (
    <div className="d-flex ProductCarouselMainDiv">
      <button disabled={page === 1} className="arrows" onClick={handlePrev}>
        <IoIosArrowBack />
      </button>
      <div className="ProductCarouselDiv">
        {productdata.map((item) => (
          <CardComponent
            key={item.id}
            pieces={item.pcs ? true : false}
            img_url={item.img_url}
            title={item.title}
            pcs={item.pcs}
            net_wt={item.net_wt}
            gross_wt={item.gross_wt}
            description={item.description}
            price={item.price}
            deliveryTime={item.deliveryTime}
          />
        ))}
      </div>
      <button disabled={page === lastPage} className="arrows" onClick={handleNext}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default ProductCarousel