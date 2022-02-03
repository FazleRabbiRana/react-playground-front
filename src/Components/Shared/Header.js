import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
	<header className="main-header">
		<nav className='header-navbar'>
			<div className="brand-wrapper">
				<h1 className="brand">
					<Link to="/">
						<span>React</span>&nbsp;<span>Playground<i>&#46;</i></span>
					</Link>
				</h1>
			</div>
	
			<div className="main-menu-wrapper">
				<label htmlFor="menu_toggler" className="hamburger-icon">&#9776;</label>
				<input type="checkbox" id="menu_toggler" />
	
				<ul className="main-menu-list">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/swiper-slides">Swiper Slides</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="*">404</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

export default Header;
