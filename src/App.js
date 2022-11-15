import { app, auth } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header from './components/Header';
import Home from './components/Home'
import './styles/styles.css';
import './styles/mobile/headerM.css'
import './styles/mobile/loginM.css'
import './styles/Explore.css'
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Login from './components/Login';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import CreateBlog from './components/CreateBlog';
import Explore from './components/Explore';
import MyBlogs from './components/MyBlogs';
import { About } from './components/About';

function App() {

	const [authentication, setAuthentication] = useState(null)
	const navigate = useNavigate()
	// const locate = useLocation()
	
	const PathCheck = () => {
		let locate = useLocation().pathname
		if(useLocation().pathname === '/about') {
			console.log('locate = ' + locate);
		} 
		// if (locate !== '/' && locate !== '/about') {
		// 	alert("Log-in if you want to see someone else’s thought")

		// 	return navigate('/')
		// }

	}
	

	// function pathCheck() {
	// 	const locate = useLocation()
	// 	if (locate.pathname == '/create-blog' || locate.pathname == '/explore') {

	// 		alert("Log-in if you want to see someone else’s thought")

	// 		return navigate('/')
	// 	}
	// }

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthentication(user)
			} else {
			}
		})
	}, [])
	// console.log(auth.currentUser);

	// onAuthStateChanged(auth, (user) => {
	// 	setAuthentication(user)
	// })

	return (
		<Routes>
			<Route path='/' element={<>
				<Header user={authentication} setAuth={setAuthentication} />
				<Home />
			</>
			} />
			<Route path='/login' element={<>
				<Header user={authentication} setAuth={setAuthentication} />
				<Login />
			</>
			} />
			<Route path='/register' element={<>
				<Header user={authentication} setAuth={setAuthentication} />
				<Register />
			</>
			} />
			<Route path='/create-blog' element={
				<>
					<Header user={authentication} setAuth={setAuthentication} />
					<CreateBlog />
				</>
			} />
			<Route path='/explore' element={
				<>
					<Header user={authentication} setAuth={setAuthentication} />
					<Explore />
				</>
			} />
			<Route path='/myblogs' element={
				<>
					<Header user={authentication} setAuth={setAuthentication} />
					<MyBlogs />
				</>
			} />
			<Route path='/about' element={
				<>
					<Header user={authentication} setAuth={setAuthentication} />
					<About />
					<PathCheck/>
				</>
			} />
		</Routes>
	);
}

export default App;
