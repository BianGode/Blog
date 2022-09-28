import Header from './components/Header';
import './styles/styles.css';
import { Route, Routes } from "react-router-dom"
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<>
        <Header/>
        <Login/>
      </>
    }/>
    </Routes>
  );
}

export default App;
