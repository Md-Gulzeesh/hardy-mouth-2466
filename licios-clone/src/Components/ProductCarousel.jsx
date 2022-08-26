import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";import CardComponent from './CardComponent';
;
const ProductCarousel = ({img_url,title,price,description,deliveryTime}) => {
  return (
    <div className="d-flex ProductCarouselMainDiv">
      <div className="arrows">
        <IoIosArrowBack />
      </div>
      <div className="ProductCarouselDiv">
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
      </div>
      <div className="arrows">
        <IoIosArrowForward />
      </div>
    </div>
  );
}

export default ProductCarousel