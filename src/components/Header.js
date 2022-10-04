import React from 'react'
import logo from '../index.png'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHamburger } from '@fortawesome/free-solid-svg-icons'
import CreateBlogLink from './CreateBlogLink'
import { auth } from '../firebase';
import Logout from './Logout'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

export default function Header() {
	
	const navigate = useNavigate()

  function redirectCreate(target) {
		console.log(target);
    navigate(target)
  }

	function showNav() {
		let hamburger = document.querySelector('.navLinksMobile').classList
		if (!hamburger.contains('clicked')) {
			hamburger.add('clicked')
		} else {
			hamburger.remove('clicked')
		}
	}

	function HeaderLoggedIn() {
		return (
			<>
				<header>
					<img src={logo} className="logo" alt='Logo'/>

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
					<Logout />
				</div>
			</>
		)
	}

	function HeaderNotLoggedIn() {
		return (
			<>
				<header>
					<img src={logo} className="logo" alt='Logo' />

					<div className='navLinks'>
						<li>Explore</li>
						<li>My Blogs</li>
						<li>About</li>
					</div>

					<div className='navButtonsMobile'>
					<button className='btn' onClick={() => redirectCreate('/login')}>Login</button>
						<button className='btn' onClick={() => redirectCreate('/register')}>Register</button>
					</div>

					<FontAwesomeIcon icon={faHamburger} className='hamburger' onClick={showNav} />
				</header>

				<div className='navLinksMobile'>
					<li>Explore</li>
					<li>My Blogs</li>
					<li>About</li>
					<div className='navButtonsMobile'>
						<button className='btn' onClick={() => redirectCreate('/login')}>Login</button>
						<button className='btn' onClick={() => redirectCreate('/register')}>Register</button>
					</div>
				</div>
			</>
		)

	}

	function HeaderCheckLogIn() {
		if (auth.currentUser) {
			console.log(auth.currentUser);
			return <HeaderLoggedIn />
		} else {
			console.log(auth.currentUser);
			return <HeaderNotLoggedIn />
		}
	}

	return (
		<HeaderCheckLogIn />
	)
}