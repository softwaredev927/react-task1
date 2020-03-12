import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios';
import Loader from "../assets/loader.gif";
import renderHTML from 'react-render-html';
import Moment from 'react-moment';
import { Link } from '@reach/router';
import clientConfig from '../client-config';
import { Pagination } from "./layouts/Pagination";

const Home = (props) => {

	let [loading, setLoading] = useState(false);
	let [posts, setPosts] = useState([]);
	let [error, setError] = useState('');
	let [currentPage, setCurrentPage] = useState(props.id | 1);
	let [totalPages, setTotalPages] = useState(1);

	let createMarkup = ( data ) => ({
		__html: data
	});

	useEffect(() => {
		const wordPressSiteURL = clientConfig.siteUrl;

		setLoading(true);
		axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts?filter[orderby]=date&order=desc&page=${currentPage}&per_page=5` )
			.then( res => {
				if ( 200 === res.status ) {
					if ( res.data.length ) {
						setLoading(false);
						setPosts(res.data);
						setTotalPages( res.headers['x-wp-totalpages'] - 1 );
					} else {
						setLoading(false);;
						setError('No Posts Found');
					}
				}

			} );
	}, [currentPage]);

	return(
		<React.Fragment>
			<Header/>
			{ error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
			{ !loading && posts.length ? (
				<React.Fragment>
					<div className="mt-5 posts-container">
						{ posts.map( post => (
							<div key={post.id} className="card border-dark mb-3" style={{maxWidth: '50rem'}}>
								<div className="card-header">
									<Link to={`/post/${post.id}`} className="text-secondary font-weight-bold" style={{ textDecoration: 'none' }}>
										{renderHTML( post.title.rendered )}
									</Link>
								</div>
								<div className="card-body">
									<div className="card-text post-content">{ renderHTML( post.excerpt.rendered ) }</div>
								</div>
								<div className="card-footer">
									<Moment fromNow >{post.date}</Moment>
									<Link to={`/post/${post.id}`} className="btn btn-secondary float-right" style={{ textDecoration: 'none' }}>
										Read More...
									</Link>
								</div>
							</div>
						) ) }
					</div>
					<Pagination
						currentPage={ currentPage }
						setCurrentPage={ setCurrentPage }
						totalPages={ totalPages }
					/>
				</React.Fragment>
			) : '' }
			{ loading && <div className="loader" ><img src={Loader} alt="Loader"/></div> }

			<Footer/>
		</React.Fragment>
	);
}

export default Home;
