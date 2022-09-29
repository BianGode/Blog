import React from 'react'
import logo from '../index.png'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHamburger } from '@fortawesome/free-solid-svg-icons'
import CreateBlogLink from './CreateBlogLink'

export default function Header() {

	function showNav() {
		let hamburger = document.querySelector('.navLinksMobile').classList
		if (!hamburger.contains('clicked')){
			hamburger.add('clicked')
		} else {
			hamburger.remove('clicked')
		}
	}


	return (
		<>
			<header>
				<img src={logo} className="logo" alt='Logo' />

				<div className='navLinks'>
					<li>Explore</li>
					<li>My Blogs</li>
					<li>About</li>
					<CreateBlogLink />
				</div>

				<div className='accountButton'>
					<FontAwesomeIcon inverse icon={faUser} className="userIcon" />
					<p>Profile</p>
				</div>

				<FontAwesomeIcon icon={faHamburger} className='hamburger' onClick={showNav} />
			</header>

			<div className='navLinksMobile'>
				<li>Explore</li>
				<li>My Blogs</li>
				<li>About</li>
				<CreateBlogLink />
				<div className='navButtonsMobile'>
					<button className='btn'>Login</button>
					<button className='btn'>Register</button>
				</div>
			</div>
		</>
	)
}
