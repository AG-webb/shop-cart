import React from 'react';
import './ProductActions.scss';

const ProductActions = (props) => {
    let inCart = props.inCart ? "in-cart" : "";
    let isFavorite = props.favorite ? "favorite" : "";

    return (
        <div className="product-actions">   
            <div className={`product-actions__item product-actions__item_cart ${inCart}`} onClick={() => props.addToCart(props.prodId)}>
                <div className="product-actions__item__tooltip">
                    Add to cart
                </div>
            </div>
            <div className={`product-actions__item product-actions__item_favorite ${isFavorite}`} onClick={() => props.toggleFavorite(props.prodId)}>
                <div className="product-actions__item__tooltip">
                    Add to favorite
                </div>
            </div>
            <div className="product-actions__item product-actions__item_lock">
                <div className="product-actions__item__tooltip">
                    Add to lock
                </div>
            </div>
        </div>
    );
}

export default ProductActions;