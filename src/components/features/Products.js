import React from 'react';
import {useTitle} from "../../hooks/useTitle";

export const Products = ({title}) => {
    useTitle(title)

    return (
        <section className="products">
            <div className="product">
                <img src="/assets/images/1001.png" alt="Product 1" />
                <p className="name">Sony Wh-Ch510 Bluetooth Wireless</p>
                <div className="action">
                    <p>$149</p>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className="product">
                <img src="/assets/images/1002.png" alt="Product 2" />
                <p className="name">boAt Rockerz 450</p>
                <div className="action">
                    <p>$49</p>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className="product">
                <img src="/assets/images/1003.png" alt="Product 3" />
                <p className="name">JBL Tune 760NC</p>
                <div className="action">
                    <p>$179</p>
                    <button>Add To Cart</button>
                </div>
            </div>
        </section>
    );
};
