import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../styles/Explore.css'
import '../styles/mobile/exploreM.css'
import LoadThoughts from './LoadThoughts'


export default function Explore() {

	// LoadThoughts()
	return (
		<div className='explore'>
			<div className='searchFilterDiv'>
				<div className='searchDiv'>
					<input type='text'/>
					<button >Search</button>
					<FontAwesomeIcon icon={faFilter} className='filter'/>
				</div>
			</div>
			<div className='loadThoughts'>
				<LoadThoughts />
			</div>
		</div>
	)
}
