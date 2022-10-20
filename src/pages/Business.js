import React from "react";
import { useContext} from "react";
import { Data } from "../component/Context";

function Business() {
  const {business,setShowMore,showMore,btnRef,numb, spin,setNumb} = useContext(Data);

  
  return (
    <div className="App">
      {spin ? <p className="load">Loading...</p>: ""}
      {business.slice(0, numb).map((n, i) => {
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
            {n.urlToImage == null ? <p>sorry no img here because we have free Api 🥲</p>: <img src={n.urlToImage} alt="" width={"250px"} />}
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
export default Business
