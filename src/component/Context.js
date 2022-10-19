import React from 'react';
import {useState,createContext,useRef , useEffect} from 'react'

export const Data = createContext()

function Context({children}) {
  const btnRef = useRef();
  const [news, setNews] = useState([]);
  const [showMore, setShowMore] = useState([]);
  const [numb, setNumb] = useState(12);
  const [sport , setSport] = useState([])
  const [health,setHealth] = useState([])
  const [business,setBusiness] = useState([])
  function fe(url){
    fetch(url)
    .then( (res)=> {
        return res.json();
    })
    .then( (data)=> {
        setNews(data.articles);
    });
  }
  useEffect(()=>{
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/sports/us.json").then(res=> res.json()).then(
      data=> setSport(data.articles)).catch(err=> console.log(err));
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/us.json").then(res=> res.json()).then(
        data=> setHealth(data.articles)).catch(err=> console.log(err));
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json").then(res=> res.json()).then(data=> setBusiness(data.articles)).catch(err=> console.log(err));
  },[])

  return (
    <Data.Provider  value={{news,fe,btnRef,showMore,setShowMore,numb, setNumb,sport,health,business}}>
        {children}
    </Data.Provider>
  )
}

export default Context