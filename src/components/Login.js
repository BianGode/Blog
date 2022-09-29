import React from 'react'
import HeadTextLogReg from './HeadTextLogReg'
import Input from './Input'

export default function Login() {
  return (
    <>
        <HeadTextLogReg HeadText="Login"/>
        <div className='loginInputs'>
					<Input name="Username"/>
					<Input name="Password"/>
        </div>
				<button className='loginButton'>Log in!</button>
    </>
  )
}
