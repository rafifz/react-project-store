import React, { Component } from "react";
import "./ComponentStyle/Navbar.scss";
import "./ComponentStyle/Responsive.scss";
import { Link } from "react-router-dom";
import Logo from "./image/header_logo_93bffbc7-4419-40bc-b4f8-61bbaecca1d7_x150.png";

class Navbar extends Component {
  state = {
    isSwitchOn: false
  };
  render() {
    return (
      <div className="navcont">
        <div class="headerRes">
          <h1
            onClick={() =>
              this.setState({ isSwitchOn: !this.state.isSwitchOn })
            }
          >
            =
          </h1>
          <Link to="/">
            <img src={Logo} alt="" width="58px" />
          </Link>
          <Link to="/cart" class="fas fa-shopping-cart fa-2x"></Link>
        </div>
        <div
          class="header"
          style={{ display: this.state.isSwitchOn ? "flex" : "none" }}
        >
          <ul>
            <li>
              COLLECTIONS &nbsp;&nbsp;&nbsp;<i class="fas fa-chevron-down"></i>
              <ul>
                <li>SSLP20 DROP 1</li>
                <li>SSLP20 DROP 2</li>
                <li>KAMIKAZE</li>
                <li>VERSES CAPSULE</li>
                <li>GENERAL STOCK</li>
              </ul>
            </li>

            <li>
              APPAREL &nbsp;&nbsp;&nbsp;<i class="fas fa-chevron-down"></i>
              &nbsp;&nbsp;&nbsp;
              <ul class="downscnd">
                <li>WOMENS</li>
                <li>SWEATSHIRTS</li>
                <li>T-SHIRT</li>
                <li>LONGSLEEVES</li>
              </ul>
            </li>

            <li>
              ACCESSORIES &nbsp;<i class="fas fa-chevron-down"></i>
              <ul class="downthrd">
                <li>HATS</li>
                <li>LITHOS</li>
                <li>COLLECTIBLE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
              </ul>
            </li>
            <li>SSLP20 PREVIEW</li>
          </ul>
          <Link to="/">
            <img src={Logo} alt="" width="58px" />
          </Link>
          <Link to="/cart" class="fas fa-shopping-cart fa-2x"></Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
