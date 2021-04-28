import React from 'react';
import './Loader.scss';
import loader from '../../img/loader.gif';

const Loader = (props) => {
    return (
        <div className="loader">
            <img src={loader} alt="...loading"/>
        </div>
    );
}

export default Loader;