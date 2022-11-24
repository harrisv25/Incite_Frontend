import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client'
// import Search from './Search'
import { Route, Routes, Link, Router } from 'react-router-dom';
import NavBar from './NavBar'
import AddTest from './AddTest'
import Home from './Home'
// import ReviewedGallery from './Reviewed'
// import ReviewedGame from './ReviewedGame'


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
      <div id="root">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/AddTest' element={<AddTest />} />
          {/* <Route path='/reviewed' element={<ReviewedGallery />} />
          <Route path='/reviewed/:id' element={<ReviewedGame />} /> */}
        </Routes>
        {/* < AddTest /> */}
      </div>
    </div>
  );
}

export default App;
