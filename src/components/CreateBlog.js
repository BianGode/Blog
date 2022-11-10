import React, { useState } from 'react'
import '../styles/createBlog.css'
import '../styles/mobile/createblogM.css'
import SelectColors from './SelectColors'
import Card from './Card'
import SelectImage from './SelectImage'
import ExampleCard from './ExampleCard'
import Publish from './Publish'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../firebase';


export default function CreateBlog() {
	console.log('rerender');
	const [title, setTitle] = useState('')
	const [image, setImage] = useState('')
	const [color, setColor] = useState('')
	const [thought, setThought] = useState('')
	const [fontColor, setFontColor] = useState('')

	function handleChange(event) {
		switch (event.target.id) {
			case 'title':
				setTitle(event.target.value)
				break;
			case 'thought':
				setThought(event.target.value)
				break;
			case 'fontColor':
				setFontColor(event.target.value)
				break;
			default:
				break;
		}
	}

	const storage = getStorage()

	async function saveToStorage(res) {
		const imgRef = ref(storage, res.name);

		if(res) {
			uploadBytes(imgRef, res).then((snapshot) => {
				console.log('uploaded image');
			})
		}



		//save to firestore 
		await setDoc(doc(db, 'blogs', title), {
			title: title,
			color: color,
			fontColor: fontColor,
			image: imgRef._location.path,
			thought: thought,
			user: auth.currentUser.email
		}).then(() => {
			console.log('succes');
		})
	}

	return (
		<div className='create-container'>
			<div className='title'>
				<p>Title</p>
				<input type='text' id='title' className='inputColor' onChange={handleChange} />
			</div>
			<div className='setBlogStyleDiv'>
				<div className='setHeaderImageDiv'>
					<p>Set Header Image</p>
					<SelectImage setImage={setImage} />
					<div className='preview-image'></div>
				</div>
				<div className='setHeaderColorDiv'>
					<p>Set Header Color</p>
					<SelectColors color={color} setColor={setColor} />
				</div>
			</div>
			<div className='fontColor'>
				<p>Select Header Font Color</p>
				<input type='color' id='fontColor' onChange={handleChange} />
			</div>
			<div className='contentDiv'>
				<p>State your Thought</p>
				<textarea className='inputColor' id='thought' onChange={handleChange} />
			</div>
			<div className='previewDiv'>
				<p>Preview</p>
				<ExampleCard title={title} thought={thought} fontColor={fontColor} image={image} color={color} />
			</div>
			<div className='publish' onClick={() => { saveToStorage(image) }}><h3>Publish</h3></div>
		</div>
	)
}
