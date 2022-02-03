import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<section className='not-found'>
			<div className='container'>
				<h2>Oops, page not found!</h2>
				<Link to="/" className='linked'>Back to Homepage</Link>
			</div>
		</section>
	);
};

export default NotFound;