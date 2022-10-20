import React from "react";
import { useContext} from "react";
import { Data } from "../component/Context";


function Home() {
  const {news,btnRef,showMore,setShowMore,sport,business,entertainment,science,technology,health } = useContext(Data);
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
      
        <h4 className="section-header">Sport</h4>
      <section>
        {sport.slice(0,3).map((n, i) => {
          return <div key={i} className="section-boxes">
            <img src={n.urlToImage} alt="" />
            <h2>{n.title}</h2>
            <p>{n.content}</p>
          </div>
        }
        )}
      </section>

      <h4 className="section-header">Business</h4>
      <section>
        
        
        {business.slice(0,3).map((n, i) => {
          return <div key={i} className="section-boxes">
            <img src={n.urlToImage} alt="" />
            <h2>{n.title}</h2>
            <p>{n.content}</p>
          </div>
          
        }
        )}
        
      </section>

      <h4 className="section-header">Entertainment</h4>
      <section>
        
        
        {entertainment.slice(0,3).map((n, i) => {
          return <div key={i} className="section-boxes">
            <img src={n.urlToImage} alt="" />
            <h2>{n.title}</h2>
            <p>{n.content}</p>
          </div>
          
        }
        )}
        
      </section>

      <h4 className="section-header">Science</h4>
      <section>
        
        
        {science.slice(0,3).map((n, i) => {
          return <div key={i} className="section-boxes">
            <img src={n.urlToImage} alt="" />
            <h2>{n.title}</h2>
            <p>{n.content}</p>
          </div>
          
        }
        )}
        
      </section>

      <h4 className="section-header">Tech</h4>
      <section>
        
        
        {technology.slice(0,3).map((n, i) => {
          return <div key={i} className="section-boxes">
            <img src={n.urlToImage} alt="" />
            <h2>{n.title}</h2>
            <p>{n.content}</p>
          </div>
          
        }
        )}
        
      </section>
      <h4 className="section-header">Health</h4>
      <section>
        
        
        {health.slice(0,3).map((n, i) => {
          return <div key={i} className="section-boxes">
            <img src={n.urlToImage} alt="" />
            <h2>{n.title}</h2>
            <p>{n.content}</p>
          </div>
          
        }
        )}
        
      </section>
      
    </div>
  );
}

export default Home;
