import React from 'react'
import plus from '../plus.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlugCirclePlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function CreateBlogLink() {
  return (
    <div className='CreateBlogLink'>
      <img src={plus} className='createBlogIcon'/>
      <li>Create</li>
    </div>
  )
}
