import React, { useState } from 'react';
import './Header.scss';
import cartIcon from '../../img/cart.svg';
import favoriteIcon from '../../img/favorite.svg';
import logo from '../../img/logo.svg';
import CartModal from '../CartModal/CartModal';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { NavLink } from 'react-router-dom';
import Badge from '../Badge/Badge';

const { Option } = Select;

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    let cartProducts = 0;
    let favoriteProducts = 0;

    props.products.map(product => {
        if(product.inCart) {
            cartProducts += 1;
        }

        if(product.favorite) {
            favoriteProducts += 1;
        }

        return null;
    });

    const closeModal = (e) => {
        switch(e.target.className) {
            case "cart-modal open": 
            case "cart-modal__close":
                setIsOpen(false);
                break;
            default:
                return null;
        }
    }

    const handleChange = (value) => {
        props.setValute(value);
        let rate = 1;

        if(value === "amd") {
            rate = 525;
        } else if (value === "rur") {
            rate = 76;
        }

        props.setProducts(
            props.products.map(product => {
                return {
                    ...product,
                    price: product.defaultPrice * rate, 
                }
            })
        );
    }

    return (
        <>
            <div className="header">
                <div className="header__wrap">
                    <div className="header__logo">
                        <NavLink to="">
                            <img src={logo} alt="cart"/>
                        </NavLink>
                    </div>
                    <div className="header__action">
                        <NavLink to="/users" className="users-btn"></NavLink>
                        <div className="valute">
                            <span>Valute: </span>
                            <Select
                                className="valute__select"
                                defaultValue="usd"
                                name="valute"
                                onChange={handleChange}
                            >
                                <Option value="usd">usd $</Option>
                                <Option value="rur">rur ₽</Option>
                                <Option value="amd">amd ֏</Option>
                            </Select>
                        </div>
                        <Badge
                            modifierEnd="cart"
                            icon={cartIcon}
                            count={cartProducts}
                            setIsOpen={setIsOpen}
                            isOpen={isOpen}
                        />
                        <Badge
                            modifierEnd="favorite"
                            to="/favorite"
                            icon={favoriteIcon}
                            count={favoriteProducts}
                        />
                    </div>
                </div>
            </div>

            <CartModal
                isOpen={isOpen}
                products={props.products}
                valute={props.valute}
                closeModal={(e) => closeModal(e)}
                removeFromChart={(id) => props.removeFromChart(id)}
                getValute={(valute) => props.getValute(valute)}
            />
        </>
    );
}

export default Header;