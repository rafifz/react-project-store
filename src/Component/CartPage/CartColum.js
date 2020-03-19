import React from 'react'


export default function CartColums() {
    return (
        <div className='cartColum' style={{ display:'grid', gridTemplateColumns:'2fr 3fr 2fr 2fr 2fr 1fr'}}>
            <div><p>Product</p></div>
            <div><p>Name</p></div>
            <div><p>Price</p></div>
            <div><p>Quantity</p></div>
            <div><p>remove</p></div>
            <div><p>Total</p></div>
        </div>
    )
}
