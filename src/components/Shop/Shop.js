import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const data = fakeData.slice(0,10);
    const [products, setProducts] = useState(data);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        console.log("Product Added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className = "shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        handleAddProduct = {handleAddProduct} 
                        product = {product}>
                        </Product>) //passing data in product component
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;