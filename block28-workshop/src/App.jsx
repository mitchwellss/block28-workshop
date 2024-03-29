
import { Routes, Route, Link } from "react-router-dom";
import Blue from './Components/Blue';
import Red from './Components/Red';
import Home from './Components/Home';
import Nav from './Components/Nav';
import MainContainer from './Components/MainContainer';


import './index.css'

function App() {
  

  return (
    <>

<div id="container">
      <h1></h1>
      <div id="navbar">
          <Link to={"/blue"}>Blue</Link>
          <Link to={"/red"}>Red</Link>
          <Link to={"/home"}>Home</Link>
          <Link to={"/nav"}>Nav</Link>
          <Link to={"/mainContainer"}>Main</Link>
      </div>
          

        
       

      <div id="main-section">
        <Routes>
          <Route path = '/blue' element={< Blue /> } />
          <Route path = '/red' element={<Red />} />
          <Route path = '/home' element={<Home />} />
          <Route path = '/nav' element={<Nav />} />
          <Route path = '/mainContainer' element={<MainContainer />} />
        </Routes>
      </div>
    </div>

    </>
  )
}

export default App
