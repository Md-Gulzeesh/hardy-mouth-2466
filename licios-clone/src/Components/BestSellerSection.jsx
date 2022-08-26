import React from 'react';
import CardComponent from './CardComponent';
import ProductCarousel from './ProductCarousel';

const BestSellerSection = () => {
  return (
    <div className="bestSellerSection">
      <h2 className="bestSellerHeading">Best Sellers</h2>
      <ProductCarousel/>
    </div>
  );
}

export default BestSellerSection