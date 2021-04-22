import React from 'react';
import './CartItem.scss';
import closeIcon from '../../../img/close.svg';
import productImg from '../../../img/product_sm.jpg';

const CartItem = (props) => {

    const getPrice = () => {
        let currentValute = props.getValute(props.prodId);

        return currentValute + (Math.round(props.price * 100) / 100).toFixed(2) || "0.00";
    }

    return (
        <div className="cart-modal__item">
            <div className="cart-modal__item__img">
                <img src={productImg} alt="product"/>
            </div>
            <div className="cart-modal__item__info">
                <div className="cart-modal__item__title">
                    {props.title}
                </div>
                <div className="cart-modal__item__price">
                    1 x <b>{getPrice()}</b>
                </div>
            </div>
            <div className="cart-modal__item__remove" onClick={() => props.removeFromChart(props.prodId)}>
                <img src={closeIcon} alt="close"/>
            </div>
        </div>
    );
}

export default CartItem;