import React from 'react';
import './Favorite.scss';
import deleteIcon from '../../img/delete.svg';
import productImg from '../../img/product.jpg';

const FavoriteRow = (props) => {
    const getPrice = () => {
        let currentValute = props.getValute(props.valute);
        
        return currentValute + (Math.round(props.price * 100) / 100).toFixed(2) || "0.00";
    }

    return (
        <tr>
            <td>
                <div className="favorite-products__table__img">
                    <img src={productImg} alt="product"/>
                </div>
            </td>
            <td>{props.title}</td>
            <td>{getPrice()}</td>
            <td>{props.stockStatus || "In Stock"}</td>
            <td>
                <button className="favorite-products__table__button button" onClick={() => props.addToCart(props.prodId)}>add to cart</button>
            </td>
            <td>
                <div className="favorite-products__table__delete" onClick={() => props.toggleFavorite(props.prodId)}>
                    <img src={deleteIcon} alt="delete"/>
                </div>
            </td>
        </tr>  
    );
}

export default FavoriteRow;