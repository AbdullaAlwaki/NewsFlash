import React from 'react'
import logo from "../../src/images/newsFlash3.png";
import lightning from "../../src/images/lightning-banner.jpeg"

function Header() {
  return (
    
        <div style={{height: '12rem',display: 'flex', backgroundImage: `url(${lightning})`,  backgroundPosition: 'center', border: 'blue 5px solid'}}>
     <img  src={logo} alt="" width={"12%"} height={"100%"}/>
    <h2 style={{color: 'yellow', fontFamily: 'Bungee Inline', textShadow: '8px 2px blue', fontSize: '5rem', textAlign: 'center', marginLeft: '10%'}}> TOP STORIES TODAY</h2>
    </div>
   
  )
}

export default Header