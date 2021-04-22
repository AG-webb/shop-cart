import React from 'react';
import Product from './Product';
import './Products.scss';

const Products = (props) => {
    let renderProducts = () => {
        let products = props.products;
        let picItems = []; 

        if(products || products.length) {
            products.map(product => {
                return picItems = [
                    ...picItems, 
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        valute={props.valute}
                        favorite={product.favorite}
                        inCart={product.inCart}
                        addToCart={(id) => props.addToCart(id)}
                        toggleFavorite={(id) => props.toggleFavorite(id)}
                        getValute={(valute) => props.getValute(valute)}
                    />];
            });
        } else  {
            return <div className="products__title">No Products yet :(</div>
        }

        return picItems;
    }

    return (
        <div className="products">
            <div className="products__wrap">
                {renderProducts()}
            </div>
        </div>
    );
}

export default Products;