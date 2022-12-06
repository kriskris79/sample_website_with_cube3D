import React from 'react';
import '../Styles/Navbar.scss'

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/profile">Profile</a>
            <a href="/contact">Contact</a>
                <button>Clic me </button>
        </div>
        </div>
    );
};

export default Navbar;