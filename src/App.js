import Header from './components/Header';
import './styles/styles.css';
import './styles/mobile/headerM.css'
import './styles/mobile/loginM.css'
import { Route, Routes } from "react-router-dom"
import Login from './components/Login';
import Register from './components/Register';

function App() {
	return (
		<Routes>
			<Route path='/login' element={<>
				<Header />
				<Login />
			</>
			} />
			<Route path='/register' element={<>
				<Header />
				<Register />
			</>}
			/>
		</Routes>
	);
}

export default App;
