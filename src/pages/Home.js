import React from "react";
import { useContext,useEffect,useState , useRef} from "react";
import { Data } from "../component/Context";


function Home() {
    const [numb, setNumb] = useState(12)
    const [showMore, setShowMore] = useState([]);
    const btnRef = useRef();
  const {news,fe} = useContext(Data);
  useEffect(()=>{
    fe("https://saurav.tech/NewsAPI/everything/cnn.json")

    },[])
  return (
    <div className="App">
      {news.slice(0,numb).map((n, i) => {
        return (
          <div key={i}>
            <h3>{i+1}-{ n.title}</h3>
            <p>{n.author}</p>
            <p>{showMore.includes(i) ?  n.content : `${n.content.substring(0,20)}....`}</p>
            <img src={n.urlToImage} alt="" width={"250px"} />
            <button onClick={()=>{ 
              if(!showMore.includes(i)){
              setShowMore([...showMore,i])
              console.log(btnRef.current.innerText);
                }else {
                setShowMore(showMore.filter(el=> el !== i))
                console.log("hi");
              }}} ref={btnRef}>
               {showMore.includes(i) ? "show less" :"show more"}
               </button>
          </div>
        );
      })}
      <button onClick={()=> setNumb(numb+5)}>Show more</button>
    </div>
  );
}

export default Home;
