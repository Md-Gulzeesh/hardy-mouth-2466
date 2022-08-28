import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "./Button";
import { MdAdd, MdRemove } from "react-icons/md";
import { DataContext } from "../Context.jsx/DataContext";
import { AuthContext } from "../Context.jsx/AuthContext";

const CardComponent = ({
  id,
  pieces,
  img_url,
  title,
  pcs,
  net_wt,
  gross_wt,
  description,
  price,
  deliveryTime,
  data
}) => {
  
  const dataContext = useContext(DataContext);
  const auth = useContext(AuthContext)
  return (
    <Card style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
      <Card.Img variant="top" src={img_url} />
      <Card.Body>
        <Card.Title
          className="mt-2"
          style={{
            fontSize: "15px",
            fontWeight: "600",
            color: "#4a4a4a",
          }}
        >
          {title}
        </Card.Title>
        <Card.Text
          style={{
            fontSize: "14px",
            color: "#727272",
            lineHeight: "1.2",
          }}
          className="mt-5"
        >
          {description}
        </Card.Text>
        <Card.Subtitle
          className="mb-2 mt-3"
          style={{ fontSize: "14px", color: "#4a4a4a" }}
        >
          {pieces ? (
            <b>Pieces: {pcs}</b>
          ) : (
            <>
              <b className="quantity">Net wt: {net_wt}</b>
              <b className="quantity">Gross: {gross_wt}</b>
            </>
          )}
        </Card.Subtitle>
        <div className="d-flex justify-content-between">
          <span
            style={{ color: "#d11243", fontSize: "18px", fontWeight: "600" }}
          >
            MRP:₹{price}
          </span>
          {dataContext.addCart ? (
            <div className="counterDiv">
              <span
                className="counterIcon"
                onClick={dataContext.handleDecrement}
              >
                <MdRemove />
              </span>
              <span
                style={{
                  color: "#4a4a4a",
                  fontSize: "18px",
                  textAlign: "center",
                  fontWeight: 600,
                  lineHeight: "2",
                }}
              >
                {dataContext.count}
              </span>
              <span
                className="counterIcon"
                onClick={dataContext.handleIncrement}
              >
                <MdAdd />
              </span>
            </div>
          ) : (
            <Button
              handleClick={() => {
                dataContext.setAddCart(true);
                auth.successToast("Item Added to cart")
                dataContext.setCount(1);
              }}
            >
              Add to cart
            </Button>
          )}
        </div>
        <div className="custom-card-footer">
          <div>
            <img
              src="https://www.licious.in/img/rebranding/express_delivery.svg"
              alt=""
            />
          </div>
          <div>
            <span className="card-footer-text">{deliveryTime}</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
