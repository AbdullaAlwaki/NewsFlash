import React from 'react'
import {Routes , Route ,Link } from "react-router-dom";
import Home from "./Home.js"; 
import About from "./About.js";
import Entertainment from "./Entertainment";
import Sport from "./Sport";
import Science from "./Science";
import Tech from "./Tech";
import Health from "./Health";
import Business from "./Business"

function Navbar() {
  return (<div>
    <nav>
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Entertainment">Entertainment</Link>
    <Link to="/Sport">Sport</Link>
    <Link to="/Science">Science</Link>
    <Link to="/Tech">Tech</Link>
    <Link to="/Health">Health</Link>
    <Link to="/Business">Business</Link>
    </nav>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Entertainment" element={<Entertainment/>}/>
        <Route path="/Sport" element={<Sport/>}/>
        <Route path="/Science" element={<Science/>}/>
        <Route path="/Tech" element={<Tech/>}/>
        <Route path="/Health" element={<Health/>}/>
        <Route path="/Business" element={<Business/>}/>
    </Routes>
    </div>
  )
}

export default Navbar