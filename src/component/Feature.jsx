import React from 'react'
import { useContext,useEffect } from "react";
import { Data } from "./Context";
import '../styles/Articles.css';

function Feature() {
    const {news,fe} = useContext(Data);
    useEffect(()=>{
      fe("' https://saurav.tech/NewsAPI/everything/<source_id>.json'")
      
    },[])
    return (
        <div className="Feature">
   
      {news.slice(4,5).map((n, i) => {
        return (
          <div key={i}>
            <div style={{
          backgroundImage: `url(${n.urlToImage})`, backgroundSize: 'cover', backgroundPosition: 'center'
        }} className="feature-card">
            <h3>{n.title}</h3>
            {/* <p className="author">{n.author}</p> */}
            <p className="Description">{n.description}</p>
            {/* <img style={{width: '100%', height: '100%'}} src={n.urlToImage} alt="" className="feature-pic" /> */}
            <p className='Content'>{n.content}</p>
          </div>
          </div>
        
        );
      })}
    </div>
   
      );
    }

export default Feature