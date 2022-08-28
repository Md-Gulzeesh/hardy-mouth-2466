import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { AuthContext } from "../Context.jsx/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataContext } from "../Context.jsx/DataContext";

const NavbarSection = () => {
  const auth = useContext(AuthContext);
  const dataContext = useContext(DataContext);
  const [fix, setFix] = useState(false);
  const setFixed = () => {
    window.scrollY > 5 ? setFix(true) : setFix(false);
  };
  window.addEventListener("scroll", setFixed);


  return (
    <div>
      {/* Toast */}
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Navbar Top Section */}
      <div
        className="navbarTop"
        // style={{
        //   display: "flex",
        //   gap: "15px",
        //   backgroundColor: "#eaeaea",
        //   justifyContent: "space-between",
        //   padding: "0 150px",
        // }}
      >
        <div
          style={{
            display: "flex",
            gap: "15px",
            backgroundColor: "#eaeaea",
          }}
        >
          <div>
            <Link className="link" to="">
              Why licious?
            </Link>
          </div>
          <div>
            <span style={{ color: "#4a4a4a", fontSize: "13px" }}>
              Download App
            </span>
          </div>
          <div>
            <img
              src="https://www.licious.in/img/rebranding/ios_app_icon.svg"
              alt="apple"
            />
          </div>
          <div>
            <img
              src="https://www.licious.in/img/rebranding/android_app_icon.svg"
              alt="Play store"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "5px",
            backgroundColor: "#eaeaea",
          }}
        >
          <div>
            <Link className="link" to="">
              FSSC 22000 Certification
            </Link>
          </div>
          <div>
            <Link className="link" to="">
              About Us
            </Link>
          </div>
          <div>
            <Link className="link" to="">
              Careers @Licious
            </Link>
          </div>
          <div>
            <select className="select">
              <option value="-----">Contact Us</option>
              <option value="">1800-4190-786</option>
              <option value="">Talktous@licious.com</option>
            </select>
          </div>
        </div>
      </div>
      {/* Navbar Footer Section */}
      <Navbar
        fixed={fix ? "top" : ""}
        bg="white"
        expand="lg"
        style={{ padding: "25px 0", height: "80px" }}
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              style={{ marginLeft: "9.3rem", marginRight: "2.4rem" }}
              src="https://www.licious.in/img/rebranding/licious-logo.svg"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-3 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            {/* Location Section */}
            <div className="d-flex" style={{ marginRight: "4rem" }}>
              <div>
                <img
                  width="29px"
                  src="https://www.licious.in/img/rebranding/location_icon.svg"
                  alt="locationIcon"
                />
              </div>
              <div className="d-flex flex-column justify-content-start">
                <span
                  style={{
                    fontSize: "12px",
                    color: "#b4b4b4",
                    margin: "0 0 0 4px",
                  }}
                >
                  Delhi
                </span>
                <select className="locationSelect">
                  <option value="">Delhi,India</option>
                </select>
              </div>
            </div>
            {/* Search Section */}
            <InputGroup style={{ width: "30%", marginRight: "3rem" }}>
              <Form.Control
                style={{ background: "#f8f8f8", borderRight: "none" }}
                placeholder="Search for any delicious product"
                aria-label="Search for any delicious product"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text
                style={{ background: "#f8f8f8" }}
                id="basic-addon2"
              >
                <img
                  src="https://www.licious.in/img/rebranding/search_icon.svg"
                  alt="searchIcon"
                />
              </InputGroup.Text>
            </InputGroup>
            {/* Category Section */}
            <div className="d-flex gap-2" style={{ marginRight: "6rem" }}>
              <img
                width="28px"
                src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg"
                alt="category"
              />
              <span className="navText">Categories</span>
            </div>
            {/* Login and Cart Section */}
            <div className="d-flex gap-5">
              <div style={{ marginRight: "3.4rem" }}>
                <img
                  className="me-1"
                  src="https://www.licious.in/img/rebranding/profile_icon.svg"
                  alt="login"
                />
                <span
                  onClick={auth.isAuth ? auth.handleLogout : auth.handleShow}
                  className="navText"
                >
                  {auth.isAuth ? "Logout" : "Login"}
                </span>
                <Offcanvas
                  show={auth.show}
                  onHide={auth.handleClose}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                      <img
                        width="133px"
                        className="mt-3"
                        src="https://www.licious.in/img/rebranding/logo-white.png"
                        alt=""
                      />
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <h3 className="signInSignUpHeading">Sign In/Sign Up</h3>
                    <div className="loginForm">
                      <Form
                        onSubmit={
                          auth.OtpBtn ? auth.handleOtpSubmit : auth.handleSubmit
                        }
                      >
                        {auth.OtpBtn ? (
                          <Form.Control
                            type="number"
                            value={auth.Otp}
                            onChange={auth.handleOtp}
                            required
                            placeholder="Enter OTP"
                          />
                        ) : (
                          <Form.Control
                            type="number"
                            value={auth.loginData}
                            onChange={auth.handleChange}
                            required
                            placeholder="Enter Mobile Number"
                          />
                        )}
                        <input
                          onClick={
                            auth.OtpBtn
                              ? auth.handleOtpSubmit
                              : auth.handleSubmit
                          }
                          className="proceedBtn mt-2"
                          type="submit"
                          value={auth.OtpBtn ? "Enter Otp" : "Proceed Via Otp"}
                        />
                      </Form>
                    </div>
                    <div className="term">
                      <span>By signing in you agree to our</span>
                      <Link className="termLink" to="">
                        {" "}
                        terms and conditions
                      </Link>
                    </div>
                    {auth.OtpBtn? <span onClick={auth.getOtp} className="resendOtp">Resend Otp</span>:<></>}
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <div>
                <img
                  className="me-1"
                  src="https://www.licious.in/img/rebranding/cart_icon.svg"
                  alt="cart"
                />
                {dataContext.count > 0 ? (
                  <Badge bg="danger">{dataContext.count}</Badge>
                ) : (
                  <span className="cartText">Cart</span>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarSection;
