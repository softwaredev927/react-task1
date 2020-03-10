import React from 'react';
import NavLink from './NavLink';

const Menu = () => {

    return (
        <ul className="navbar-nav my-navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/news">News</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
	);
}

export default Menu;