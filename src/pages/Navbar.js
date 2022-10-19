import React from 'react'
import {Routes , Route ,Link } from "react-router-dom";
import Home from "./Home.js"; 
import About from "./About.js";
import Politics from "./Politics";
import Sport from "./Sport";
import Music from "./Music";
import Tech from "./Tech";
import Health from "./Health";
import Business from "./Business"

function Navbar() {
  return (
    
    <div >
      <nav className='navi'>
    <Link to="/" className='nav-link'>Home</Link>
    <Link to="/About" className='nav-link'>About</Link>
    <Link to="/Politics" className='nav-link'>Politics</Link>
    <Link to="/Sport" className='nav-link'>Sport</Link>
    <Link to="/Music" className='nav-link'>Music</Link>
    <Link to="/Tech" className='nav-link'>Tech</Link>
    <Link to="/Health" className='nav-link'>Health</Link>
    <Link to="/Business" className='nav-link'>Business</Link>
    </nav>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Politics" element={<Politics/>}/>
        <Route path="/Sport" element={<Sport/>}/>
        <Route path="/Music" element={<Music/>}/>
        <Route path="/Tech" element={<Tech/>}/>
        <Route path="/Health" element={<Health/>}/>
        <Route path="/Business" element={<Business/>}/>
    </Routes>
    </div>
  )
}

export default Navbar