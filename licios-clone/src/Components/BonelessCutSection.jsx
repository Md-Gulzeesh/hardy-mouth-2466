import React, { useContext} from 'react'
import { DataContext } from '../Context.jsx/DataContext';
import ProductCarousel from './ProductCarousel'

const BonelessCutSection = () => {
   const dataContext = useContext(DataContext);
  return (
    <div className="bonelessCutSection">
      <h2 className="bonelessCutSectionHeading">Boneless Cuts</h2>
      <ProductCarousel
      lastPage ={dataContext.BlesslastPage}
      page={dataContext.bl_page}
        handlePrev={dataContext.handleBlessPrev}
        handleNext={dataContext.handleBlessNext}
        productdata={dataContext.bonelessData}
      />
    </div>
  );
}

export default BonelessCutSection