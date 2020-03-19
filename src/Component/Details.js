import React, { Component } from "react";
import "./ComponentStyle/Details.scss";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            slideOne,
            clickOne,
            slideTwo,
            clickTwo,
            slideThree,
            clickThree
          } = value;
          const {
            id,
            title,
            info,
            inCart,
            price,
            img,
            imgalt
          } = value.detailProduct;
          return (
            <div className="detail-container">
              <div className='detail-preview'>
                <div className="slideNav">
                  <i
                    class="far fa-circle"
                    onClick={() => clickOne()}
                    style={{ color: slideOne ? "red" : "white" }}
                  ></i>
                  <i
                    class="far fa-circle"
                    onClick={() => clickTwo()}
                    style={{ color: slideTwo ? "red" : "white" }}
                  ></i>
                  <i
                    class="far fa-circle"
                    onClick={() => clickThree()}
                    style={{ color: slideThree ? "red" : "white" }}
                  ></i>
                </div>
                <div
                  className="detail-thumb"
                  style={{
                    backgroundImage: "url(" + img + ")",
                    display: slideOne ? "block" : "none"
                  }}
                ></div>
                <div
                  className="detail-thumb"
                  style={{
                    backgroundImage: "url(" + imgalt + ")",
                    display: slideTwo ? "block" : "none"
                  }}
                ></div>
                <div
                  className="detail-thumb"
                  style={{
                    backgroundImage: "url(" + img + ")",
                    display: slideThree ? "block" : "none"
                  }}
                ></div>
              </div>

              <div className="detail-list">
                <h1 style={{ fontSize: "30px" }}>
                  {title} <br />
                  <br />
                </h1>
                <h4 style={{ fontSize: "25px" }}>
                  $ {price} <br />
                  <br />
                  <br />
                  <br />
                </h4>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button> <br />
                <Link to="/">
                  <button className="button">BACK TO PRODUCT</button>
                </Link>
                <button
                  className="button"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? "IN CART" : "ADD TO CART"}
                </button>
                <h5>
                  {" "}
                  <br />
                  <br />
                  {info}
                </h5>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
