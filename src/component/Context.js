import React from 'react';
import {useState,createContext} from 'react'

export const Data = createContext()

function Context({children}) {

  const [news, setNews] = useState([]);
  const [numb, setNumb] = useState([])
  
  function fe(url,num=5){
    fetch(url)
    .then( (res)=> {
        return res.json();
    })
    .then( (data)=> {
        setNews(data.articles);
    });
  }

  return (
    <Data.Provider  value={{news, setNews,fe}}>
        {children}
    </Data.Provider>
  )
}

export default Context