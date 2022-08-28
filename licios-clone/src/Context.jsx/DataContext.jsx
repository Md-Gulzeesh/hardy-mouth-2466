import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const DataContext = createContext();
export default function DataContextProvider({ children }) {
  // *******************Best Seller Section********************
  const [bestSellerData, setBestSellerData] = useState([]);
  const [BslastPage, setBsLastPage] = useState(4);
  const [bs_page, setBs_page] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://stormy-wave-76232.herokuapp.com/BESTSELLERDATA?_page=${bs_page}&_limit=3`
      )
      .then((res) => {
        setBestSellerData(res.data);
        console.log("Best Seller", res.data);
      })
      .catch((err) => console.log("Best Seller Section Error", err));
  }, [bs_page]);
  const handleBsellerPrev = () => {
    setBs_page((prev) => prev - 1);
    console.log("bsPagePrev", bs_page);
  };
  const handleBsellerNext = () => {
    setBs_page((prev) => prev + 1);
    console.log("bsPageNxt", bs_page);
  };
  // **********************Boneless Section********************
  const [bonelessData, setBonelessData] = useState([]);
  const [bl_page, setBl_page] = useState(1);
  const [BlesslastPage, setBlessLastPage] = useState(3);
  const handleBlessPrev = () => {
    setBl_page((prev) => prev - 1);
  };
  const handleBlessNext = () => {
    setBl_page((prev) => prev + 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://stormy-wave-76232.herokuapp.com/BONELESSCUTDATA?_page=${bl_page}&_limit=3`
      )
      .then((res) => setBonelessData(res.data))
      .catch((err) => console.log("Boneless Section Error", err));
  }, [bl_page]);

  //  ***************BreskFast Section**************************
  const [breakFastData, setBreakFastData] = useState([]);
  const [breakFastPage, setBreakFastPage] = useState(1);
  const [BreakFastlastPage, setBreakFastLastPage] = useState(2);
  const handleBfastPrev = () => {
    setBreakFastPage((prev) => prev - 1);
  };
  const handleBfastNext = () => {
    setBreakFastPage((prev) => prev + 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://stormy-wave-76232.herokuapp.com/BREAKFASTDATA?_page=${breakFastPage}&_limit=3`
      )
      .then((res) => setBreakFastData(res.data))
      .catch((err) => console.log("BreakFast Section Error", err));
  }, [breakFastPage]);
  return (
    <DataContext.Provider
      value={{
        bestSellerData,
        setBestSellerData,
        BslastPage,
        setBsLastPage,
        bs_page,
        setBs_page,
        handleBsellerPrev,
        handleBsellerNext,
        bonelessData,
        setBonelessData,
        bl_page,
        setBl_page,
        BlesslastPage,
        setBlessLastPage,
        handleBlessPrev,
        handleBlessNext,
        breakFastData,
        setBreakFastData,
        breakFastPage,
        setBreakFastPage,
        BreakFastlastPage,
        setBreakFastLastPage,
        handleBfastPrev,
        handleBfastNext,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
