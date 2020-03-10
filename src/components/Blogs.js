import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Posts } from "./Posts";

const Blogs = () => {

return (
	<React.Fragment>
		<Header/>
		<Posts pageId={ 1 } />
		<Footer/>
	</React.Fragment>
)
};

export default Blogs;
