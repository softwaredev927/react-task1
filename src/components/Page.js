import React from 'react';
import Header from "./Header";
import Posts from "./Posts";

const Page = ( props ) => {

	const { id } = props;

	return (
		<React.Fragment>
			<Header/>
			<Posts pageId={ id }/>
		</React.Fragment>
	)
};

export default Page;
