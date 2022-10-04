import React, { useState } from 'react'
import { auth } from '../firebase'
import Button from './Button'
import HeadTextLogReg from './HeadTextLogReg'
import Input from './Input'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { redirect, useNavigate } from 'react-router-dom'

export default function Register() {

	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const validatePassword = () => {
		let isValid = true
		if (password !== '' && confirmPassword !== ''){
			if (password !== confirmPassword) {
				isValid = false
				console.log('Passwords does not match')
			}
		}
		return isValid
	}

	let navigate = useNavigate()
	
	function navigator() {
		navigate('/')	
	}

	function RegisterUser() {
		const emailI = email
		const passwordI = password
		console.log(emailI + " " + passwordI);
		if(validatePassword) {
			createUserWithEmailAndPassword(auth, emailI, passwordI).then(() => {
				return navigator()

			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode + '  ' + errorMessage);
			});
		}
	}

  return (
    <>
        <HeadTextLogReg HeadText="Register"/>
        <div className='loginInputs'>
					<Input name="Email" setStateVal={setEmail}/>
					<Input name="Username" setStateVal={setUsername}/>
					<Input name="Password" setStateVal={setPassword} className='passwordInput'/>
					<Input name="Confirm Password" setStateVal={setConfirmPassword}/>
        </div>
				<Button name='Register' click={RegisterUser}/>
    </>
  )
}
