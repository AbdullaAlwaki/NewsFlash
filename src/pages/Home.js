import React from "react";
import { useContext,useEffect } from "react";
import { Data } from "../component/Context";
import Header from "../component/Header";
import Ticker from "../component/Ticker";
// import './TickStyle.css'

function Home() {
  const {news,fe} = useContext(Data);
  useEffect(()=>{
    fe("https://saurav.tech/NewsAPI/top-headlines/category/entertainment/us.json")
    
  },[])
  return (
<>
    <Header />
    <Ticker />
    
    
    <div className="App">
    <div className="container" style={{flex:1, flexWrap:'wrap'}}>
      {news.slice(0,12).map((n, i) => {
        return (
          <div key={i}>
            <div  className="card">
            <h3>{n.title}</h3>
            <p className="author">{n.author}</p>
            <p className="content">{n.content}</p>
            <img src={n.urlToImage} alt="" className="card-pic" />
          </div>
          </div>
        
        );
      })}
    </div>
    </div>

    
    </>      
  
  );
}

export default Home;
