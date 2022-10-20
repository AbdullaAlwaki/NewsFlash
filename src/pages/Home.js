import React from "react";
import { useContext} from "react";
import { Data } from "../component/Context";
import "../style/home.css"

function Home() {
  const {news,btnRef,spin,showMore,setShowMore,sport,business,entertainment,science,technology,health } = useContext(Data);
  return (
    <div className="App">
      {spin ? <p className="load">Loading...</p>: ""}
      {news.slice(4,5).map((n, i) => {
        return (
          <div key={i}  style={{
            backgroundImage: `url(${n.urlToImage})`, backgroundSize: 'cover', backgroundPosition: 'center'
          }} className="feature-card">
            <h3>{n.title}</h3>
            <p className="Description">{n.description}</p>
            <p className='Content'>{showMore.includes(i) ?  n.content : `${n.content.substring(0,20)}....`}</p>
            {n.urlToImage == null ? <p>sorry no img here because we have free Api 🥲</p>: <img src={n.urlToImage} alt="" width={"250px"} />}
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
      <div className="Feature">
            <div className='article-container' style={{flex:1, flexWrap:'wrap'}}>
      {news.slice(12,16).map((n, i) => {
        return (
          <div key={i}>
            <div style={{
          backgroundImage: `url(${n.urlToImage})`, backgroundSize: 'cover'
        }} className="article-card">
            <h3>{n.title}</h3>
          </div>
          </div>
        );
      })}
    </div>
    </div>
  
        <h4 className="section-header">Sport</h4>
      <section className="section">
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
      <section  className="section">
        
        
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
      <section className="section">
        
        
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
      <section className="section">
        
        
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
      <section className="section">
        
        
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
      <section className="section">
        
        
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
