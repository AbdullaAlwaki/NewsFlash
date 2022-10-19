import React from "react";
import { useContext,useEffect,useState } from "react";
import { Data } from "../component/Context";

function Entertainment() {
    const [numb, setNumb] = useState(12)
  const {news,fe} = useContext(Data);
  useEffect(()=>{
    fe("https://saurav.tech/NewsAPI/top-headlines/category/entertainment/us.json")
    
  },[])
  return (
    <div className="App">
      {news.slice(0,numb).map((n, i) => {
        return (
          <div key={i}>
            <h3>{i+1}-{ n.title}</h3>
            <p>{n.author}</p>
            <p>{n.content}</p>
            <img src={n.urlToImage} alt="" width={"250px"} />
          </div>
        );
      })}
      <button onClick={()=> setNumb(numb+5)}>Show more</button>
    </div>
  );
}
export default Entertainment