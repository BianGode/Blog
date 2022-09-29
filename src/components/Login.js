import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import Button from './Button'
import HeadTextLogReg from './HeadTextLogReg'
import Input from './Input'

export default function Login() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('second')


	let navigate = useNavigate()
	
	function navigator() {
		navigate('/')	
	}
	
	function loginUser() {
		const emailLog = email
		const passLog = password
		signInWithEmailAndPassword(auth, emailLog, passLog)
			.then(() => {
				console.log('logged in suc')
				return navigator()
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode + '  ' + errorMessage);
			});
	}
	return (
		<>
			<HeadTextLogReg HeadText="Login" />
			<div className='loginInputs'>
				<Input name="Email" setStateVal={setEmail} />
				<Input name="Password" setStateVal={setPassword} />
			</div>
			{/* <button className='loginButton'>Log in!</button> */}
			<Button name='Login' click={loginUser}/>
		</>
	)
}
