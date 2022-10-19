import React from "react";
import { useContext,useEffect } from "react";
import { Data } from "../component/Context";


function Home() {
  const {news,btnRef,showMore,setShowMore,sport} = useContext(Data);
  return (
    <div className="App">
      {news.slice(0,3).map((n, i) => {
        return (
          <div key={i}>
            <h3>{i+1}-{n.title}</h3>
            <p>{n.author}</p>
            <p>{showMore.includes(i) ?  n.content : `${n.content.substring(0,20)}....`}</p>
            <img src={n.urlToImage} alt="" width={"250px"} />
            <button onClick={()=>{ 
              if(!showMore.includes(i)){
              setShowMore([...showMore,i])
                }else {
                setShowMore(showMore.filter(el=> el !== i))
              }}} ref={btnRef}>
               {showMore.includes(i) ? "show less" :"show more"}
               </button>
          </div>
        );
      })}
      <section>
        <h4>Sport</h4>
        {sport.slice(0,3).map(i => {
          return <div>
            <img src={i.urlToImage} alt="" />
            <h2>{i.title}</h2>
            <p>{i.content}</p>
          </div>
        }
        )}
      </section>
      
    </div>
  );
}

export default Home;
