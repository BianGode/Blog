import React from 'react'

export default function ExampleCard(props) {
	return (
		<div className='card' style={{ border: '3px solid' + props.color }}>
			{props.image ?
				<div className='cardHead' style={{ backgroundImage: 'url(' + props.image + ')' }}>
					<div className='textBackground'>
						<h3 style={{ color: props.fontColor }}>{props.title}</h3>
					</div>
				</div> :
				<div className='cardHead' style={{ backgroundColor: props.color }}>
					<div className='textBackground'>
						<h3 style={{ color: props.fontColor }}>{props.title}</h3>
					</div>
				</div>
			}
			<div className='cardBody'>
				<textarea defaultValue={props.thought}></textarea>
			</div>
		</div>
	)
}
