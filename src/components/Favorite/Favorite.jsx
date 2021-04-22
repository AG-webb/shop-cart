import React from 'react';
import { NavLink } from 'react-router-dom';
import './Favorite.scss';
import FavoriteRow from './FavoriteRow';

const Favorite = (props) => {
    const renderFavoriteRows = () => {
        let products = props.products;
        let picItems = []; 

        if(products) {
            products.map(product => {
                if(product.favorite) {
                    return picItems = [
                        ...picItems,
                        <FavoriteRow
                            prodId={product.id}
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            valute={props.valute}
                            getValute={(valute) => props.getValute(valute)}
                            toggleFavorite={(id) => props.toggleFavorite(id)}
                            addToCart={(id) => props.addToCart(id)}
                        />
                    ];
                }

                return null;
            });

            if(!picItems.length) {
                return  <tr>
                            <td className="favorite-products__table__empty" colSpan="6">
                                <h2>No Favorite items yet!</h2>
                                <NavLink className="button" to="">Go to Home Page</NavLink>
                            </td>
                        </tr>
            }
        }

        return picItems;
    }

    return (
        <div className="favorite-products">
            <h1>Favorite products</h1>
            <table className="favorite-products__table">
                <thead>
                    <tr>
                        <td><h3>Image</h3></td>
                        <td><h3>Product</h3></td>
                        <td><h3>Price</h3></td>
                        <td><h3>Stock Status</h3></td>
                        <td><h3>Add To Cart</h3></td>
                        <td><h3>Delete</h3></td>
                    </tr>
                </thead>
                <tbody>
                    {renderFavoriteRows()}
                </tbody>
            </table>
        </div>
    );
}

export default Favorite;