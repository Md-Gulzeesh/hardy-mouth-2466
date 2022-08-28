import React, { useContext } from "react";
import { DataContext } from "../Context.jsx/DataContext";
import ProductCarousel from "./ProductCarousel";

const BreakfastSection = () => {
  const dataContext = useContext(DataContext);

  return (
    <div className="breakFastSection">
      <h2 className="breakFastSectionHeading">Breakfast & Snacking Specials</h2>
      <ProductCarousel
        lastPage={dataContext.BreakFastlastPage}
        page={dataContext.breakFastPage}
        handlePrev={dataContext.handleBfastPrev}
        handleNext={dataContext.handleBfastNext}
        productdata={dataContext.breakFastData}
      />
    </div>
  );
};

export default BreakfastSection;
