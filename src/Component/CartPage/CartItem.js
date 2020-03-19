import React from "react";
import './Cart.scss'



export const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div
      style={{
        marginTop:'15px',
        display: "grid",
        gridTemplateColumns: "2fr 3fr 2fr 2fr 2fr 1fr"
      }}
    >
      <div><img src={img} alt="" width="100rem" /></div>
      <div style={{ display: "flex", alignItems: "center" }}> <p>{title}</p> </div>
      <div style={{ display: "flex", alignItems: "center" }}>{price} $</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span onClick={()=>decrement(id)}><button className='Button'>-</button></span> 
        <span className="Button" style={{border:'none'}}>{count}</span>
        <span onClick={()=>increment(id)}><button className='Button'>+</button></span>
        </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <i className='fas fa-trash' onClick={()=>removeItem(id)}/>
        </div>
      <div style={{ display: "flex", alignItems: "center" }}>{total} $</div>
    </div>
  );
};
