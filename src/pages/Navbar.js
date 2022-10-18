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
    <div>
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Politics">Politics</Link>
    <Link to="/Sport">Sport</Link>
    <Link to="/Music">Music</Link>
    <Link to="/Tech">Tech</Link>
    <Link to="/Health">Health</Link>
    <Link to="/Business">Business</Link>
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