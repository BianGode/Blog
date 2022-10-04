import { signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

export default function Logout(props) {
	const navigate = useNavigate()

	function redirectHome() {
		navigate('/')
	}

	function SignOutMethod() {
		signOut(auth).then(() => {
			console.log('succ')
			props.clearUser(null)
			redirectHome()
			
		})
	}

	return (
		<div onClick={SignOutMethod} className='signOutButton'>Logout</div>
	)
}
