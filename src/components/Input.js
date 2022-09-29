import React from "react";

const Input = (props) => {

  function handleChange(event) {
    props.setStateVal(event.target.value);
  }

  return (
    <>
      <div className='InputDiv'>
        <label>{props.name}</label>
        
        {
          // set input type based on props.name
          props.name == 'Password' || props.name == 'Confirm Password' ? <input type='password' onChange={handleChange} placeholder={'Enter ' + props.name + ' here...'} />
            : props.name == 'Email' ? <input type='email' onChange={handleChange} placeholder={'Enter ' + props.name + ' here...'} />
              : <input type='text' placeholder={'Enter ' + props.name + ' here...'} />
        }

      </div>
    </>
  )
}

export default Input;