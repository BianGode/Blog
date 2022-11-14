import React, { useEffect, useState } from 'react'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { auth, db } from '../firebase'
import '../styles/Explore.css'
import '../styles/mobile/exploreM.css'
import LoadThoughts from './LoadThoughts'
import Card from './Card';
import { collection, query, getDocs, where } from "firebase/firestore";


export default function Explore() {
	const [thoughtState, setThoughtState] = useState([])
	const [search, setSearch] = useState('')

	let searched = []

	const LoadThoughtsFun = async () => {
		console.log('search');
		// const q = query(collection(db, 'blogs'), orderBy(	'time', 'desc'), limit(6))
		const q = query(collection(db, 'blogs'), where('title', '==', search))

		const querySnapshot = await getDocs(q);

		const thoughts = []
		if (thoughtState !== []) {
			querySnapshot.docs.forEach((thought, index) => {
				if (thought.data().image) {
					thoughts.push(<Card key={index} count={index} image={thought.data().image} fontColor={thought.data().fontColor} title={thought.data().title} thought={thought.data().thought} color={thought.data().color} />)
				} else {
					thoughts.push(<Card key={index} count={index} fontColor={thought.data().fontColor} title={thought.data().title} thought={thought.data().thought} color={thought.data().color} />)
				}// console.log(counter);
			})
			setThoughtState(thoughts)
		}
	}

	useEffect(() => {
		const initialLoad = async () => {
			console.log('initial load');
			// const q = query(collection(db, 'blogs'), orderBy('time', 'desc'), limit(6))
			const q = query(collection(db, 'blogs'))

			const querySnapshot = await getDocs(q);

			const thoughts = []
			if (thoughtState !== []) {
				querySnapshot.docs.forEach((thought, index) => {
					if (thought.data().image) {
						thoughts.push(<Card key={index} count={index} image={thought.data().image} fontColor={thought.data().fontColor} title={thought.data().title} thought={thought.data().thought} color={thought.data().color} />)
					} else {
						thoughts.push(<Card key={index} count={index} fontColor={thought.data().fontColor} title={thought.data().title} thought={thought.data().thought} color={thought.data().color} />)
					}// console.log(counter);
				})
				setThoughtState(thoughts)
			}
		}

		initialLoad()

		return () => {
			console.log('unmount I supose')
		}
	}, [])

	const handleChange = (event) => {
		setSearch(event.target.value)
	}

	// LoadThoughts()
	return (
		<div className='explore'>
			<div className='searchFilterDiv'>
				<div className='searchDiv'>
					<input onChange={handleChange} type='text' />
					<button onClick={LoadThoughtsFun}>Search</button>
				</div>
			</div>
			<div className='loadThoughts'>
				<div className='loadThought'>
					{thoughtState}
				</div>
			</div>
		</div>
	)
}
