import Header from './components/Header';
import Home from './components/Home'
import './styles/styles.css';
import './styles/mobile/headerM.css'
import './styles/mobile/loginM.css'
import { Route, Routes } from "react-router-dom"
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import CreateBlog from './components/CreateBlog';
import Explore from './components/Explore';

function App() {

	const [authentication, setAuthentication] = useState(null)

	onAuthStateChanged(auth, (user) => {
		setAuthentication(user)
	})

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
			<Route path='/create-blog' element={<>
				<Header user={authentication} setAuth={setAuthentication} />
				<CreateBlog />
			</>
			} />
			<Route path='/explore' element={<>
				<Header user={authentication} setAuth={setAuthentication} />
				<Explore />
			</>
			} />
		</Routes>
	);
}

export default App;
