import React, { Component } from "react";
import "./ComponentStyle/Modal.scss";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modalContainer">
                <div className="modalProduct">
                  <div>
                    <img src={img} alt="" srcset="" />
                  </div>
                  <div>
                    <h2 style={{ color: "red" }}>ITEM ADDED TO THE CHART</h2>
                    <p>{title}</p>
                    <p>${price}</p>
                    <div className='button'>
                      <Link>
                        <button onClick={()=> closeModal()}>CLOSE</button>
                      </Link>
                      <Link to="/cart">
                        <button onClick={()=>closeModal()}>GO TO CART</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
