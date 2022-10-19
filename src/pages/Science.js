import React from "react";
import { useContext,useEffect,useState } from "react";
import { Data } from "../component/Context";

function Science() {
    const [numb, setNumb] = useState(12)
  const {news,fe,setShowMore,showMore,btnRef} = useContext(Data);
  useEffect(()=>{
    fe("https://saurav.tech/NewsAPI/top-headlines/category/science/us.json")
    
  },[])
  return (
    <div className="App">
      {news.slice(0, numb).map((n, i) => {
        return (
          <div key={i}>
            <h3>
              {i + 1}-{n.title}
            </h3>
            <p>{n.author}</p>
            <p>
              {showMore.includes(i) 
                ? n.content
                : `${n.content !== null && n.content.substring(0, 20)}...`}
            </p>
            <img src={n.urlToImage} alt="" width={"250px"} />
            <button
              onClick={() => {
                if (!showMore.includes(i)) {
                  setShowMore([...showMore, i]);
                } else {
                  setShowMore(showMore.filter((el) => el !== i));
                }
              }}
              ref={btnRef}
            >
              {showMore.includes(i) ? "show less" : "show more"}
            </button>
          </div>
        );
      })}
      <button onClick={() => setNumb(numb + 5)}>Show more</button>
    </div>
  );
}
export default Science