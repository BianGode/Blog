import React, { useEffect, useState } from 'react'
import { collection, query, orderBy, getDocs, limit } from "firebase/firestore";
import { db } from '../firebase'
import Card from './Card';

export default function LoadThoughts() {
  const [thoughtState, setThoughtState] = useState([])
  const ThoughtList = []

  async function LoadThoughtsFun() {
    // const q = query(collection(db, 'blogs'), orderBy('time', 'desc'), limit(6))
    const q = query(collection(db, 'blogs'))

    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    querySnapshot.forEach((thought, index) => {
      // setThoughtState += 
      ThoughtList.push(<Card key={index} fontColor={thought.data().fontColor} title={thought.data().Title} thought={thought.data().thought} color={thought.color} />)
    })
  }

  LoadThoughtsFun().then(() => {
    // ThoughtList.forEach((thoughtComp) => {
    //   setThoughtState(current => [...current, thoughtComp])
    // })
    setThoughtState(ThoughtList)
  })
  return (
    <div className='loadThought'>
      {thoughtState}
    </div>
  )
}
