import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "./Button";
import { MdAdd, MdRemove } from "react-icons/md";

const CardComponent = ({ pieces }) => {
    const [count, setCount] = useState(1);
    const [addCart, setAddCart] = useState(false)
    const handleDecrement = ()=>{    
            setCount((prev) => prev - 1);
    }
    const handleIncrement = ()=>{
        if(count!==5){
            setCount(prev => prev +1);
        }
    }
    useEffect(() => {
      if(count<1){
        setAddCart(false);
        setCount(1);
      }
    }, [count])
    
  return (
    <Card style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
      <Card.Img
        variant="top"
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/868d7848-a22a-11c7-2a90-0833338eeb13/original/Classic-Eggs---Pack-of-6--Hero-Shot.jpg?format=webp"
      />
      <Card.Body>
        {/*  MRP:  ADD TO CART 0
        Today in 90 min */}
        <Card.Title
          className="mt-2"
          style={{
            fontSize: "15px",
            fontWeight: "600",
            color: "#4a4a4a",
          }}
        >
          Classic Eggs - Pack Of 6
        </Card.Title>
        <Card.Text
          style={{
            fontSize: "14px",
            color: "#727272",
            lineHeight: "1.2",
          }}
          className="mt-5"
        >
          Pack of 6 naturally laid, white eggs from healthy hens
        </Card.Text>
        <Card.Subtitle
          className="mb-2 mt-3"
          style={{ fontSize: "14px", color: "#4a4a4a" }}
        >
          {pieces ? (
            <b>Pieces: 6</b>
          ) : (
            <>
              <b className="quantity">Net wt: 450gms</b>
              <b className="quantity">Gross: 900gms</b>
            </>
          )}
        </Card.Subtitle>
        <div className="d-flex justify-content-between">
          <span
            style={{ color: "#d11243", fontSize: "18px", fontWeight: "600" }}
          >
            MRP:₹65{" "}
          </span>
          {addCart ? (
            <div className="counterDiv">
              <span className="counterIcon" onClick={handleDecrement}>
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
                {count}
              </span>
              <span className="counterIcon" onClick={handleIncrement}>
                <MdAdd />
              </span>
            </div>
          ) : (
            <Button handleClick={() => setAddCart(true)}>Add to cart</Button>
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
            <span className="card-footer-text">
              Today in <b>90 min</b>
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
