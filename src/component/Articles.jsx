import React from 'react'
import { useContext,useEffect } from "react";
import { Data } from "../component/Context";
import '../styles/Articles.css';

function Articles() {
    const {news,fe} = useContext(Data);
    useEffect(()=>{
      fe("' https://saurav.tech/NewsAPI/everything/<source_id>.json'")
      
    },[])
    return (
        <div className="Feature">
            <div className='article-container' style={{flex:1, flexWrap:'wrap'}}>
      {news.slice(12,16).map((n, i) => {
        return (
          <div key={i}>
            <div style={{
          backgroundImage: `url(${n.urlToImage})`, backgroundSize: 'cover'
        }} className="article-card">
            <h3>{n.title}</h3>
            {/* <p className="author">{n.author}</p>
            <p className="Description">{n.description}</p> */}
            {/* <img style={{width: '200px'}} src={n.urlToImage} alt="" className="article-pic" /> */}
     {/* <p className='Content'>{n.content}</p>  */}
          </div>
          </div>
        
        );
      })}
    </div>
    </div>
      );
    }

export default Articles