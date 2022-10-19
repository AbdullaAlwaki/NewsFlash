import React from 'react'
import { useEffect, useState } from "react";
import './TickStyle.css';
// import { AiOutlineThunderbolt } from 'react-icons/fa';
// import styled from 'styled-components';

// const wrapper = styled.div `
//     position: relative;
//     max-width: 800px;
//     margin: auto;

// `
// const bigHeading = styled.div `
//     display: block;
//     position: absolute;
//     font-style: italic;
//     font-size: 40px;
//     background-color: #e60000;
//     color: #fff;
//     text-transform: uppercase;
//     padding: 15px;
//     letter-spacing: 3px;
//     font-weight: 700;
//     z-index: 2;
// `

function Ticker() {

    // const [news, setNews] = useState([]);

//   useEffect(() =>{
//     fetch('https://saurav.tech/NewsAPI/top-headlines/category/entertainment/us.json')
//     .then( (res)=> {
//         return res.json();
//     })
//     .then( (data)=> {
//         setNews(data.articles);
//     });
//   }, []);
//   console.log(news);
 

  return (
   
   
   
    <div className='ticketWrapper'>
        <div className='bigHeading'>Breaking</div>
        <div className="textUpdate">
{/* 
        {news.map( (n,i) => {
          return <div key={i}>  */}
     

        {/* <p style={{textAlign: 'center'}}>{n.title}</p> } */}
            
            <p>  Priest in Ballybegs says he 'bored' a crack squad of armed Burglars out of his swish Parish Pad!   <i class="fa-solid fa-bolt"></i> <i class="fa-solid fa-bolt"></i>  <i class="fa-solid fa-bolt"></i>  The North of Ireland was on red alert today as a strange and startling yellow object appeared in the sky! <i class="fa-solid fa-bolt"></i>  <i class="fa-solid fa-bolt"></i><i class="fa-solid fa-bolt"></i>  An irish corpse interrupted his funeral today holding up the festivities for hours banging and hollering from his box. Needless to say thirsty revellers were not impressed <i class="fa-solid fa-bolt"></i> <i class="fa-solid fa-bolt"></i> <i class="fa-solid fa-bolt"></i></p>
            
        
        
        </div>
         {/* })}  */}
        </div>
      
     
    
    // </div>
    
  )
}

export default Ticker