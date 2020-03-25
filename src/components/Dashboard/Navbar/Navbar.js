import React from 'react';

import logo from '../../../assets/LOGOCROWDBNB2.png';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={ logo } alt="Crowdbnb"/>
            </div>

            <div className="options">
                <i class="far fa-user-circle"></i>
                <i class="far fa-bell"></i>
            </div>
        </div>
    );
};

export default Navbar;