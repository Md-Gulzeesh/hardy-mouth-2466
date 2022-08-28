import React, { useContext } from "react";
import { DataContext } from "../Context.jsx/DataContext";
import ProductCarousel from "./ProductCarousel";

const BestSellerSection = () => {
  const dataContext = useContext(DataContext);
  return (
    <div className="bestSellerSection">
      <h2 className="bestSellerHeading">Best Sellers</h2>
      <ProductCarousel
      lastPage={dataContext.BslastPage}
        page={dataContext.bs_page}
        handlePrev={dataContext.handleBsellerPrev}
        handleNext={dataContext.handleBsellerNext}
        productdata={dataContext.bestSellerData}
      />
    </div>
  );
};

export default BestSellerSection;
