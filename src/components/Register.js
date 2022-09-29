import React from 'react'
import HeadTextLogReg from './HeadTextLogReg'
import Input from './Input'

export default function Register() {
  return (
    <>
        <HeadTextLogReg HeadText="Register"/>
        <div className='loginInputs'>
					<Input name="Email"/>
					<Input name="Username"/>
					<Input name="Password"/>
        </div>
				<button className='loginButton'>Register</button>
    </>
  )
}
