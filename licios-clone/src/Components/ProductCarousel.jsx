// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";import CardComponent from './CardComponent';
;
const ProductCarousel = ({productdata=[]
}) => {
 
  
  return (
    <div className="d-flex ProductCarouselMainDiv">
      <div className="arrows">
        <IoIosArrowBack />
      </div>
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
      <div className="arrows">
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default ProductCarousel