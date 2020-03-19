import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList";
import Details from "./Component/Details";
import Cart from "./Component/CartPage/Cart";
import Modal from "./Component/Modal";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div style={{ paddingTop: "64px" }}>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/details" component={Details} />
          </Switch>
          <Modal />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
