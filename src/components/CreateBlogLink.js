import React from 'react'
import plus from '../plus.png'
import { useNavigate } from 'react-router-dom'

export default function CreateBlogLink() {
  const navigate = useNavigate()

  function redirectCreate() {
    navigate('/create-blog')
  }

  return (
    <div className='CreateBlogLink' onClick={redirectCreate}>
      <img src={plus} className='createBlogIcon'/>
      <li>Create</li>
    </div>
  )
}
