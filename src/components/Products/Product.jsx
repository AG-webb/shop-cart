import React from 'react';
import ProductActions from '../ProductActions/ProductActions';
import './Products.scss';
import productImg from '../../img/product.jpg';

const Product = (props) => {

    const getPrice = () => {
        let currentValute = props.getValute(props.valute);
        
        return currentValute + (Math.round(props.price * 100) / 100).toFixed(2) || "0.00";
    }

    return (
        <div className="product">
            <div className="product__wrap">
                <div className="product__img">
                    <a href="#test">
                        <img src={productImg} alt=""/>
                    </a>
                </div>
                <div className="product__info">
                    <a href="#test" className="product__title">
                        {props.title}
                    </a>
                    <div className="product__price">
                        {getPrice()}
                    </div>
                    <div className="product__left">
                        {props.left || "125 left"}
                    </div>
                </div>

                <ProductActions
                    prodId={props.id}
                    favorite={props.favorite}
                    inCart={props.inCart}
                    addToCart={(id) => props.addToCart(id)}
                    toggleFavorite={(id) => props.toggleFavorite(id)}
                />
            </div>
        </div>
    );
}

export default Product;