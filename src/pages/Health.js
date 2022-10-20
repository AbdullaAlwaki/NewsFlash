import React from 'react'
import { useContext, useEffect } from "react";
import { Data } from "../component/Context";
function Health() {
const {news,setNews,fe} = useContext(Data)
useEffect(()=> {
    fe("https://saurav.tech/NewsAPI/top-headlines/category/health/us.json")
})
  return (
    <div className="App">
      {news.map((n, i) => {
        return (
          <div key={i}>
            <h3>{n.title}</h3>
            <p>{n.author}</p>
            <p>{n.content}</p>
            <img src={n.urlToImage} alt=""  />
          </div>
        );
      })}
    </div>
  )
}

export default Health