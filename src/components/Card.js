import React from 'react'
import '../styles/card.css'

export default function Card(props) {
	return (
		<div className='card'>
			<div className='cardHead'>
				<div className='textBackground'>
					<h3 style={{color: props.fontColor}} >{props.title}</h3>
				</div>
			</div>
			<div className='cardBody'>
				<textarea value={props.thought}></textarea>
			</div>
		</div>
	)
}
