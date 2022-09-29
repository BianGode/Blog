import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

export default function Logout() {
	function SignOutMethod() {
		signOut(auth).then(() => {

		})
	}

	return (
		<div onClick={SignOutMethod} className='signOutButton'>Logout</div>
	)
}
