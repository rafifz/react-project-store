import React from "react";
import { Link } from "react-router-dom";

export const CartTotals = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div>
        <Link to='/'><button className='Button' onClick={()=>clearCart()}>Clear cart</button></Link>
      <div><br/> Subtotal : {cartSubTotal} $</div>
      <div>Tax : {cartTax} $</div>
      <div>Total : {cartTotal} $</div>
      </div>
    </React.Fragment>
  );
};
