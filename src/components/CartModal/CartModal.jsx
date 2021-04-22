import React from 'react';
import './CartModal.scss';
import closeIcon from '../../img/close.svg';
import CartItem from './CartItem/CartItem';

const CartModal = (props) => {
    let isOpen = props.isOpen ? " open" : "";
    let totalPrice = 0;

    const renderProducts = () => {
        let products = props.products;
        let picItems = []; 

        if(products) {
            products.map(product => {
                if(product.inCart) {
                    totalPrice += product.price;

                    return picItems = [
                        ...picItems,
                        <CartItem
                            prodId={product.id}
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            valute={props.valute}
                            getValute={(valute) => props.getValute(valute)}
                            removeFromChart={(id) => props.removeFromChart(id)}
                        />
                    ];
                }

                return null;
            });

            if(!picItems.length) {
                return <div className="cart-modal__items__title">No cart items yet, add some items!!</div>
            }

        } else  {
            return <div className="cart-modal__items__title">No items yet!</div>
        }

        return picItems;
    }

    const getTotalPrice = () => {
        let currentValute = props.getValute(props.valute);
        
        return currentValute + (Math.round(totalPrice * 100) / 100).toFixed(2) || "0.00";
    }

    return (
        <div
            className={`cart-modal${isOpen}`}
            onClick={(e) => props.closeModal(e)}
        >
            <div className="cart-modal__body">
                <div className="cart-modal__content">
                    <div className="cart-modal__top">
                        <h2>Cart</h2>
                        <div className="cart-modal__close">
                            <img src={closeIcon} alt="close"/>
                        </div>
                    </div>
                    <div className="cart-modal__items">
                        {renderProducts()}
                    </div>
                    <div className="cart-modal__amount">
                        <div className="cart-modal__amount__item">
                            <span>Sub total:</span>
                            <span>{getTotalPrice()}</span>
                        </div>
                        <div className="cart-modal__amount__item">
                            <span>Total:</span>
                            <span>{getTotalPrice()}</span>
                        </div>
                    </div>
                    <div className="cart-modal__btns">
                        <button className="button">view chart</button>
                        <button className="button">checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartModal;