import { app, auth } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Header from './components/Header';
import Home from './components/Home'
import './styles/styles.css';
import './styles/mobile/headerM.css'
import './styles/mobile/loginM.css'
import './styles/Explore.css'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Login from './components/Login';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import CreateBlog from './components/CreateBlog';
import Explore from './components/Explore';
import MyBlogs from './components/MyBlogs';

function App() {

	const [authentication, setAuthentication] = useState(null)
	const navigate = useNavigate()


	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			console.log(user);
			if (user) {
				setAuthentication(user)
				console.log(user);
			} else {
				alert("Log-in if you want to see someone else’s thought")

				navigate('/')
			}
		})
	},[])
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
		</Routes>
	);
}

export default App;
