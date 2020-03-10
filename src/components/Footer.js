import React, { useContext } from 'react';
import Menu from './Menu';
import ToggleSidebarBtn from "./dashboard/sidebar/ToggleSidebarBtn";
import AppContext from "./context/AppContext";
import LogoImg from "../assets/logo.png";

const Navbar = () => {

	const [ store, setStore ] = useContext( AppContext );

	const handleLogout = () => {
		localStorage.removeItem( 'token' );
		localStorage.removeItem( 'useName' );

		setStore( {
			...store,
			token: '',
			useName: ''
		} );
		window.location.href = '/';
	};

	return (
		<nav className="footer my-navbar navbar-expand-lg main-navbar">
			<div>
				<Menu></Menu>
				<span>© 2011 rtPanel. All Rights Reserved. Designed by rtCamp</span>
			</div>
			<img className="logo" src={ LogoImg } />
			{/*	If on dashboard page */}
			{ window.location.pathname.includes( 'dashboard' ) ? (
				<ToggleSidebarBtn/>
			) : ''}
		</nav>
	);
};

export default Navbar;
