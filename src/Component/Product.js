import React, { Component } from "react";
import "./ComponentStyle/Product.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "../context";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart, imgalt } = this.props.product;
    return (
      <div className="productCard">
        <ProductConsumer>
          {value => (
            <div style={{ background: " url("+img+") "}}>
              <div style={{background: "url("+imgalt+")"}}>
                <h2 onClick={() => value.handleDetail(id)}>
                  <Link to="/details">{title}</Link>
                </h2>
                <br />
                <button
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? <h3 disabled>In Cart</h3> : <h1>+</h1>}
                </button>
              </div>
            </div>
          )}
        </ProductConsumer>

        <div
          style={{
            position: "absolute",
            border: "1px solid red",
            padding: "5px 10px",
            margin: "5px 0 0px 5px",
            opacity: ".5"
          }}
        >
          <p>${price}</p>
        </div>
      </div>
    );
  }
}
Product.propType = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

export default Product;
