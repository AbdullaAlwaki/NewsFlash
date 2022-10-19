import React from "react";
import { useContext} from "react";
import { Data } from "../component/Context";

function Tech() {
  const {technology,setShowMore,showMore,btnRef,numb, setNumb} = useContext(Data);

  return (
    <div className="App">
      {technology.slice(0, numb).map((n, i) => {
        return (
          <div key={i}>
<<<<<<< HEAD
<<<<<<< HEAD
            <img src={n.urlToImage} alt="" width={"250px"} />
            <h3>{n.title}</h3>
            
=======
            <h3>{i+1}-{ n.title}</h3>
>>>>>>> main
            <p>{n.author}</p>
            <p>{n.content}</p>
            
=======
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
>>>>>>> main
          </div>
        );
      })}
      <button onClick={() => setNumb(numb + 5)}>Show more</button>
    </div>
  );
}

export default Tech