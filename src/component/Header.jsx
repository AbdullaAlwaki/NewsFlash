import React from 'react'
import logo from "../../src/images/newsFlash3.png";
import lightning from "../../src/images/lightning-banner.jpeg";
import '../styles/Header.css';

function Header() {
  return (
    
        <div style={{height: '12rem',display: 'flex', backgroundImage: `url(${lightning})`,  backgroundPosition: '60%', backgroundSize: 'contain'}}>
     <img  src={logo} alt="" width={"12%"} height={"100%"}/>
    <h2 className='banner-headline' style={{fontSize: '5rem'}}> TOP STORIES TODAY</h2>
    </div>
   
  )
}

export default Header