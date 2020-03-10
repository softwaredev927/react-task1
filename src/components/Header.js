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
		<nav className="header my-navbar navbar-expand-lg main-navbar">
			<img className="logo" src={ LogoImg } />
			<div>
				<Menu></Menu>
			</div>
			{/*	If on dashboard page */}
			{ window.location.pathname.includes( 'dashboard' ) ? (
				<ToggleSidebarBtn/>
			) : ''}
		</nav>
	);
};

export default Navbar;
