import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import plus from '../plus.png'
import '../styles/createBlog.css'
import '../styles/mobile/createblogM.css'
import SelectColors from './SelectColors'


export default function CreateBlog() {
	return (
		<div className='create-container'>
			<div className='title'>
				<p>Title</p>
				<input type='text' />
			</div>
			<div className='setBlogStyleDiv'>
				<div className='setHeaderImageDiv'>
					<p>Set Header Image</p>
					<img src={plus}/>
					<div className='preview-image'></div>
				</div>
				<div className='setHeaderColorDiv'>
					<p>Set Header Color</p>
					<SelectColors />
				</div>
			</div>
		</div>
	)
}
