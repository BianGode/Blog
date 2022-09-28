import React from 'react'
import logo from '../index.png'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import CreateBlogLink from './CreateBlogLink'

export default function Header() {
  return (
    <header>
        <img src={logo} className="logo" alt='Logo'/>

        <div className='navLinks'>
            <li>Explore</li>
            <li>My Blogs</li>
            <li>About</li>
            <CreateBlogLink/>
        </div>

        <div className='accountButton'>
            <FontAwesomeIcon inverse icon={faUser} className="userIcon"/>
            <p>Profile</p>
        </div>
    </header>
  )
}
