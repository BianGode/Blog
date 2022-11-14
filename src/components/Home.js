import React from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import '../styles/Home.css'
import '../styles/mobile/homeM.css'
import headerImg from '../blog.jpeg'
import banner from '../content-style.png'

export default function Home() {
	
	return (
		<div className='Home'>
			<div className='HomeHeader'>
				<h2><span>Express</span> yourself through words</h2>
				<div className='HomeHeaderHead'>
					<div className='HeaderImageText'>
						<img className='exampleImage' src={headerImg}></img>
					</div>
					<div className='vline'></div>
					<div className='headerText'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue fermentum consectetur. Pellentesque eget posuere eros. Nunc ac mattis leo, auctor mollis ante. Proin blandit purus at turpis rutrum, </p>
					</div>
				</div>
			</div>
			<hr/>
			<img className='Banner' src={banner} alt='Banner'/>
			</div>
	)
}
