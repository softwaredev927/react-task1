import React, { useContext } from 'react';
import Header from "../Header";
import AppContext from "../context/AppContext";

const Content = ( props ) => {

	const [ store, setStore ] = useContext( AppContext );

	return (
		<div id="content" className={ store.sidebarActive ? '' : 'active' }>
			{/* Top Navbar */}
			<Header/>
			{/* Main Content */}
			<div className="main-content">
				{ props.children }
			</div>
		</div>
	)
};

export default Content;
