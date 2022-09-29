import React from 'react'

export default function Button(props) {
	return (
		<button className='loginButton' onClick={props.click}>
			{props.name}
		</button>
	)
}
