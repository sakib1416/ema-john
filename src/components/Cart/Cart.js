import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, prd) => total + prd.price, 0);
    let shipping = 0;
    if(total > 35) {
        shipping = 0;
    }
    else if(total > 15) {
        shipping = 4.99;
    }
    else if(total > 0) {
        shipping = 12.99;
    }
    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Ordered: {cart.length}</h5>
            <p>Product price: {formatNumber(total)}</p>
            <p><small>Shipping cost: ${shipping}</small></p>
            <h5>Total price: ${formatNumber(total + shipping)}</h5>
        </div>
    );
};

export default Cart;