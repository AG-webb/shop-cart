import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';
import Products from '../Products/Products';
import Favorite from '../Favorite/Favorite';
import { message } from 'antd';
import { UsersApi } from '../../api/api';
import Users from '../Users/Users';
import './Main.scss';

const Main = (props) => {
    const [valute, setValute] = useState("usd");
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Cart item 1",
            price: 1.00,
            defaultPrice: 1.00,
            inCart: false,
            favorite: false,
        },
        {
            id: 2,
            title: "Cart item 2",
            price: 100.00,
            defaultPrice: 100.00,
            inCart: false,
            favorite: false,
        },
        {
            id: 3,
            title: "Cart item 3",
            price: 1000.50,
            defaultPrice: 1000.50,
            inCart: false,
            favorite: false,
        },
        {
            id: 4,
            title: "Cart item 4",
            price: 120.00,
            defaultPrice: 120.00,
            inCart: false,
            favorite: false,
        },
        {
            id: 5,
            title: "Cart item 5",
            price: 20.50,
            defaultPrice: 20.50,
            inCart: false,
            favorite: false,
        },
        {
            id: 6,
            title: "Cart item 6",
            price: 5.55,
            defaultPrice: 5.55,
            inCart: false,
            favorite: false,
        },
        {
            id: 7,
            title: "Cart item 7",
            price: 500.05,
            defaultPrice: 500.05,
            inCart: false,
            favorite: false,
        },
    ]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UsersApi.getUsers()
        .then(users => {
            setUsers(users);
        })
    }, []);

    // add Message
    const showAddMessage = (text) => {
        message.success(text);
    }

    // remove Message
    const showRemoveMessage = (text) => {
        message.error(text);
    }

    // Add To Cart
    const addToCart = (id) => {
        let productAlsoAdded;
        setProducts(
            products.map(product => {
                if(product.id === id) {
                    productAlsoAdded = product.inCart;

                    return {...product, inCart: true}
                }

                return product;
            })
        );

        if(!productAlsoAdded) {
            showAddMessage("Product is successfuly added to cart!");
        }
    }

    // Reomve From Cart
    const removeFromChart = (id) => {
        setProducts(
            products.map(product => {
                if(product.id === id) {
                    return {...product, inCart: false}
                }

                return product;
            })
        );

        showRemoveMessage("Product is removed from cart!");
    }

    // Add/Remove from favorite list
    const toggleFavorite = (id) => {
        let productIsFavorite;
        setProducts(
            products.map(product => {
                if(product.id === id) {
                    productIsFavorite = product.favorite;
                    return {...product, favorite: !product.favorite}
                }

                return product;
            })
        );

        if(!productIsFavorite) {
            showAddMessage("Product is successfuly added to favorite list!");
        } else {
            showRemoveMessage("Product is removed from favorite list!");
        }
    }

    // Valute
    const getValute = (valute) => {
        let currentValute;
        if (valute === "usd") {
            currentValute = "$";
        } else if(valute === "rur") {
            currentValute = "₽";
        } else if(valute === "amd") {
            currentValute = "֏";
        } else {
            currentValute = "$";
        }
        
        return currentValute;
    }

    return (
        <>
            <Header
                products={products}
                setProducts={setProducts}
                removeFromChart={(id) => removeFromChart(id)}
                valute={valute}
                setValute={(val) => setValute(val)}
                getValute={(valute) => getValute(valute)}
            />
            <Route
                path="/favorite"
                render={() => <Favorite
                    products={products}
                    valute={valute}
                    getValute={(valute) => getValute(valute)}
                    toggleFavorite={(id) => toggleFavorite(id)}
                    addToCart={(id) => addToCart(id)}
                />}
            />
            <Route
                path="/users" 
                render={() => <Users
                    users={users}
                />}
            />
            <Route
                path="/"
                exact={true} 
                render={() => <Products
                    addToCart={(id) => addToCart(id)}
                    toggleFavorite={(id) => toggleFavorite(id)}
                    products={products}
                    valute={valute}
                    getValute={(valute) => getValute(valute)}
                />}
            />
        </>
    );
}

export default Main;