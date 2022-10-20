import React from 'react';
import {useState,createContext,useRef ,useEffect} from 'react';


export const Data = createContext()

function Context({children}) {
  const btnRef = useRef();
  const [news, setNews] = useState([]);
  const [showMore, setShowMore] = useState([]);
  const [numb, setNumb] = useState(12);
  const [sport , setSport] = useState([])
  const [health,setHealth] = useState([])
  const [business,setBusiness] = useState([])
  const [entertainment,setEntertainment] = useState([])
  const [science,setScience] = useState([])
  const [technology,setTechnology] = useState([])
  const [spin,setSpin] = useState(false)
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
    setSpin(true)
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/sports/us.json").then(res=> res.json()).then(data=> setSport(data.articles)).catch(err=> console.log(err));
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/us.json").then(res=> res.json()).then(data=> setHealth(data.articles)).catch(err=> console.log(err));
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json").then(res=> res.json()).then(data=> setBusiness(data.articles)).catch(err=> console.log(err));
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/entertainment/us.json").then(res=> res.json()).then(data=> setEntertainment(data.articles)).catch(err=> console.log(err));
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/science/us.json").then(res=> res.json()).then(data=> setScience(data.articles)).catch(err=> console.log(err));
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json").then(res=> res.json()).then(data=> setTechnology(data.articles)).catch(err=> console.log(err));
    fetch("https://saurav.tech/NewsAPI/everything/cnn.json").then(res=> res.json()).then(data=> setNews(data.articles)).catch(err=> console.log(err));
    setTimeout(() => {
      setSpin(false)
    }, 1000);
  },[])

  return (
    <Data.Provider  value={{news,fe,btnRef,showMore,setShowMore,numb, spin,setNumb,sport,health,business,entertainment,science,technology}}>
        {children}
    </Data.Provider>
  )
}

export default Context