import React from 'react'
import { useContext, useEffect } from "react";
import { Data } from "../component/Context";
function Tech() {
const {news,setNews,fe} = useContext(Data)
useEffect(()=> {
    fe("https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json")
})
  return (
    <div className="App">
      {news.map((n, i) => {
        return (
          <div key={i}>
            <img src={n.urlToImage} alt="" width={"250px"} />
            <h3>{n.title}</h3>
            
            <p>{n.author}</p>
            <p>{n.content}</p>
            
          </div>
        );
      })}
    </div>
  )
}


export default Tech