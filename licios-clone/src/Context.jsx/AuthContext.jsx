import React, { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loginData, setLoginData] = useState("");
  const [Otp, setOtp] = useState("");
  const [OtpBtn, setOtpBtn] = useState(false);

  function handleLogin() {
    setIsAuth(true);
  }
  function handleLogout() {
    setIsAuth(false);
    setOtpBtn(false);
  }
  const handleChange = (e) => {
    if (Number(e.target.value[0]) === 0 && Number(e.target.value[1]) === 0) {
      errorToast("Invalid Mobile Number");
    }
    setLoginData(e.target.value.trim());
  };
  const getOtp = ()=>{
    setTimeout(()=>{
      setTimeout(() => {
        localStorage.removeItem("OTP");
      }, 8000);
localStorage.removeItem("OTP");
let randomOtp = Math.floor(1000 + Math.random() * 9000);
localStorage.setItem("OTP", randomOtp);
infoToast(`Otp is ${localStorage.getItem("OTP")} valid for 5 seconds`);

    },2500)
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.trim().length === 0) {
      errorToast("Please Enter Mobile Number");
      return;
    } else if (loginData.length > 10 || loginData.length < 10) {
      errorToast("Invalid Mobile Number");
      return;
    } else {
      // console.log("RandomOtp in handleSubmit",localStorage.getItem("OTP"))
      setLoginData("");
      setOtpBtn(true);
       getOtp();
      // console.log(loginData);
    }
  };
  const handleOtp = (e) => {
    setOtp(e.target.value.trim());
  };
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // console.log("Random Otp in handleOtpSubmit",localStorage.getItem("OTP"))
    if (Otp.trim() === localStorage.getItem("OTP")) {
      successToast("Login Success");
      handleLogin()
      handleClose();
      localStorage.removeItem("OTP")
    } else {
      errorToast("Invalid OTP");
    }
  };
  const errorToast = (msg) =>
    toast.error(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const successToast = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const infoToast = (msg) => {
    toast.info(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        show,
        setShow,
        handleClose,
        handleShow,
        loginData,
        setLoginData,
        Otp,
        setOtp,
        OtpBtn,
        setOtpBtn,
        handleLogin,
        handleLogout,
        handleChange,
        handleSubmit,
        handleOtp,
        handleOtpSubmit,
        errorToast,
        successToast,
        infoToast,
        getOtp
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
