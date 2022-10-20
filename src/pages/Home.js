import React from "react";
import { useContext,useEffect } from "react";
import { Data } from "../component/Context";
import Header from "../component/Header";
import Ticker from "../component/Ticker";

import Feature from "../component/Feature";
import Articles from "../component/Articles";
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

    <div className="feature-box">
    <Feature />
    <Articles />
    </div>
    
    
    
    

    
    </>      
  
  );
}

export default Home;
