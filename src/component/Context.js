import React from 'react';
import {useState,createContext} from 'react'

export const Data = createContext()

function Context({children}) {

  const [news, setNews] = useState([]);
  
  
  function fe(url){
    fetch(url)
    .then( (res)=> {
        return res.json();
    })
    .then( (data)=> {
        setNews(data.articles);
    });
  }

  return (
    <Data.Provider  value={{news,fe}}>
        {children}
    </Data.Provider>
  )
}

export default Context