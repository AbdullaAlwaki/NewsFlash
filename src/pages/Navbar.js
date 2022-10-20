import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Entertainment from "./Entertainment";
import Sport from "./Sport";
import Science from "./Science";
import Tech from "./Tech";
import Health from "./Health";
import Business from "./Business";


function Navbar() {
  return (
    <div>
      <nav >
        <ul className="nav">
              <input type={"checkbox"}/>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Entertainment">Entertainment</Link></li>
              <li><Link to="/Sport">Sport</Link></li>
              <li><Link to="/Science">Science</Link></li>
              <li><Link to="/Tech">Tech</Link></li>
              <li><Link to="/Health">Health</Link></li>
              <li><Link to="/Business">Business</Link></li>
              </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/Sport" element={<Sport />} />
          <Route path="/Science" element={<Science />} />
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Health" element={<Health />} />
          <Route path="/Business" element={<Business />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default Navbar;
