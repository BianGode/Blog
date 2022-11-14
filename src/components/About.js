import React from 'react'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/About.css'
import reactLogo from '../React-icon.svg.png'

export const About = () => {
	return (
		<div className='AboutPage'>
			<div className='AboutText'>
				<h3>This is my made up site to practice my <span className='React'>React</span><span className='js'>.js</span> skills</h3>
				<img src={reactLogo} alt='React Logo'/>
			</div>
		</div>
	)
}
