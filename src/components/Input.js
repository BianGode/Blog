import React from "react";

const Input = (props) => {
	return (
		<>
			<div className='InputDiv'>
				<label>{props.name}</label>
				{ props.name == 'Password' ? <input type='password' placeholder={'Enter ' + props.name + ' here...'}/> : <input type='text' placeholder={'Enter ' + props.name + ' here...'}/> }
				
			</div>
		</>
	)
}

export default Input;