import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import React, { useEffect } from 'react'
import '../styles/card.css'

export default function Card(props) {
	let image;
	let imageRef;

	let storage = getStorage()

	useEffect(() => {
		if (props.image !== undefined) {
			imageRef = ref(storage, props.image)
			console.log(props.image);
			// document.querySelector('.cardHead').contains(props.count).style.setBackgroundImage = 'url(' + imageRef + ')'
			getDownloadURL(imageRef).then((url) => {
				document.getElementsByClassName('cardHead')[props.count].style.backgroundImage = 'url(' + url + ')'
			}).catch((error) => {
				console.log(error);
			})
		}
	})


	return (
		<div className='card' style={{ border: '3px solid' + props.color }}>
			{props.image ?
				<div className='cardHead' style={{ backgroundImage: props.image }}>
					<div className='textBackground'>
						<h3 style={{ color: props.fontColor }} >{props.title}</h3>
					</div>
				</div> :
				<div className='cardHead' style={{ backgroundColor: props.color }}>
					<div className='textBackground'>
						<h3 style={{ color: props.fontColor }}>{props.title}</h3>
					</div>
				</div>
			}

			<div className='cardBody'>
				<textarea readOnly style={{resize: 'none'}} defaultValue={props.thought}></textarea>
			</div>
		</div>
	)
}
