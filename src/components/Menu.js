import React from 'react';
import NavLink from './NavLink';

const Menu = () => {

    return (
        <ul className="navbar-nav my-navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/">Single</NavLink>
            </li>
        </ul>
	);
}

export default Menu;