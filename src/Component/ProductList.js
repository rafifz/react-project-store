import React, { Component } from "react";
import Product from "./Product";
import "./ComponentStyle/Productlist.scss";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="cover">
            <h1>VERSES CAPSULE</h1>
          </div>
        </div>
        <div className="containerlist">
          <ProductConsumer>
            {value =>{
              return value.product.map(product =>{
                return<Product key={product.id} product={product}/>
              })
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default ProductList;
