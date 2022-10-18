import React from "react";
import { useContext,useEffect } from "react";
import { Data } from "../component/Context";

function Home() {
  const {news,fe} = useContext(Data);
  useEffect(()=>{
    fe("https://saurav.tech/NewsAPI/top-headlines/category/entertainment/us.json")
    
  },[])
  return (
    <div className="App">
      {news.slice(0,5).map((n, i) => {
        return (
          <div key={i}>
            <h3>{n.title}</h3>
            <p>{n.author}</p>
            <p>{n.content}</p>
            <img src={n.urlToImage} alt="" width={"250px"} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
