import React from 'react';
import {useTitle} from "../../hooks/useTitle";

export const Cart = ({title})=> {
    useTitle(title)
    return (
        <section className="cart"><h1>Cart Items: 2</h1>
            <div className="cartCard"><img src="/assets/images/1001.png" alt="" /><p className="productName">Sony Wh-Ch510
                Bluetooth Wireless</p><p className="productPrice">$149</p>
                <button>Remove</button></div>
            <div className="cartCard"><img src="/assets/images/1002.png" alt="" /><p className="productName">boAt Rockerz
                450</p><p className="productPrice">$49</p>
                <button>Remove</button></div>
        </section>
    )
}