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
        // console.log("Best Seller", res.data);
      })
      .catch((err) => console.log("Best Seller Section Error", err));
  }, [bs_page]);
  const handleBsellerPrev = () => {
    setBs_page((prev) => prev - 1);
    // console.log("bsPagePrev", bs_page);
  };
  const handleBsellerNext = () => {
    setBs_page((prev) => prev + 1);
    // console.log("bsPageNxt", bs_page);
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
      .then((res) => {
        setBonelessData(res.data);
      })
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

  // **********************Card Component*************************
  const [count, setCount] = useState(0);
  const [addCart, setAddCart] = useState(false);
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  const handleIncrement = () => {
    if (count !== 5) {
      setCount((prev) => prev + 1);
    }
  };
  useEffect(() => {
    if (count < 1) {
      setAddCart(false);
      setCount(0);
    }
  }, [count]);
  // **************************Getting Location**********************
  const [cityname, setCityname] = useState("");
  const [countryName, setCountryName] = useState("");
  function gettingLocation() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(position) {
      let crd = position.coords;

      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      getDataLocation(crd.latitude, crd.longitude);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  function getDataLocation(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d11e2713cdace67cd72e441e55b790d4`;
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        // append(res);
        console.log(res);
        setCityname(res.name);
        setCountryName(res.sys.country);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
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
        count,
        setCount,
        addCart,
        setAddCart,
        handleDecrement,
        handleIncrement,
        gettingLocation,
        cityname,
        countryName,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
