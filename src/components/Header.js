import React from 'react'
import logo from '../index.png'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHamburger } from '@fortawesome/free-solid-svg-icons'
import CreateBlogLink from './CreateBlogLink'
import Logout from './Logout'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

export default function Header(props) {
	
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
					<img src={logo} onClick={() => redirectCreate('/')} className="logo" alt='Logo'/>

					<div className='navLinks'>
						<li onClick={() => redirectCreate('/explore')}>Explore</li>
						<li onClick={() => redirectCreate('/myblogs')}>My Blogs</li>
						<li onClick={() => redirectCreate('/about')}>About</li>
						<CreateBlogLink />
					</div>

					<div className='accountButton'>
						<FontAwesomeIcon inverse icon={faUser} className="userIcon" />
						<p>Profile</p>
						<Logout clearUser={props.setAuth}/>
					</div>

					<FontAwesomeIcon icon={faHamburger} className='hamburger' onClick={showNav} />
				</header>

				<div className='navLinksMobile'>
					<li onClick={() => redirectCreate('/explore')}>Explore</li>
					<li onClick={() => redirectCreate('/myblogs')}>My Blogs</li>
					<li onClick={() => redirectCreate('/about')}>About</li>
					<CreateBlogLink />
					<Logout clearUser={props.setAuth}/>
				</div>
			</>
		)
	}

	function HeaderNotLoggedIn() {
		return (
			<>
				<header>
					<img src={logo} className="logo" onClick={() => redirectCreate('/')} alt='Logo' />

					<div className='navLinks' onClick={() => alert('Login first to see someone elses thoughts')}>
						<li>Explore</li>
						<li>My Blogs</li>
						<li onClick={() => redirectCreate('/about')}>About</li>
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
					<li onClick={() => redirectCreate('/about')}>About</li>
					<div className='navButtonsMobile'>
						<button className='btn' onClick={() => redirectCreate('/login')}>Login</button>
						<button className='btn' onClick={() => redirectCreate('/register')}>Register</button>
					</div>
				</div>
			</>
		)

	}

	function HeaderCheckLogIn() {
		if (props.user) {
			// console.log(props.user);
			return <HeaderLoggedIn />
		} else {
			// console.log(auth);
			return <HeaderNotLoggedIn />
		}
	}
	return (
		<HeaderCheckLogIn />
	)
	
}