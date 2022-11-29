import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client'
import { Route, Routes, Link, Router } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import AddQuestion from './AddQuestion'
import ViewQuestion from './ViewQuestion'
import Delete from './Delete'


// linking to backend here vvvv
let baseURL = "";

if (process.env.NODE_ENV === "development") {
  // baseURL = "http://localhost:3003";
  baseURL = process.env.REACT_APP_BACKEND_URL
} else {
  baseURL = "your heroku backend url here";
}

function App() {

  return (
    <div className="App">
      <div id="logo">
        <h1>Incite</h1>
      </div>
      <img src={require('./images/stock_background.png')} alt='logo'></img>
      {/* <NavBar /> */}
      <div id="root">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Profile/:user_id' element={<Profile />} />
          <Route path='/AddQuestion/:user_id' element={<AddQuestion />} />
          <Route path='/ViewQuestion/:user_id' element={<ViewQuestion />} />
          <Route path='/Delete/:user_id' element={<Delete />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
