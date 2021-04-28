import React from 'react';
import { NavLink } from 'react-router-dom';
import './User.scss';

const User = (props) => {
    return (
        <div className="user">
            <div className="user__wrap" title={props.firstName}>
                <NavLink to={`profile/${props.id}`} className="user__photo">
                    <img src={props.avatar} alt="avatar"/>
                </NavLink>
                <div className="user__name" title={props.firstName}>
                    {props.firstName + " " + props.lastName}
                </div>
            </div>
        </div>
    );
}

export default User;