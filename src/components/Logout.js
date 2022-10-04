import { signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

export default function Logout() {
	const navigate = useNavigate()

	function redirectHome() {
		navigate('/')
	}

	function SignOutMethod() {
		signOut(auth).then(() => {
			redirectHome()
		})
	}

	return (
		<div onClick={SignOutMethod} className='signOutButton'>Logout</div>
	)
}
