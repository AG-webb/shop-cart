import React from 'react';
import { NavLink } from 'react-router-dom';
import './Badge.scss';

const Badge = ({to ,modifierEnd, icon, count, setIsOpen, isOpen}) => {
    let modifier = modifierEnd ? `header__badge_${modifierEnd}`: "";

    if(to) {
        return (
            <NavLink to={to} className={`header__badge ${modifier}`}>
                <img src={icon} alt="badge icon"/>
                <div className="header__badge__count">
                    {count}
                </div>
            </NavLink>
        );
    } else {
        return (    
            <div className={`header__badge ${modifier}`} onClick={() => setIsOpen(!isOpen)}>
                <img src={icon} alt="badge icon"/>
                <div className="header__badge__count">
                    {count}
                </div>
            </div>
        )
    }
}

export default Badge;