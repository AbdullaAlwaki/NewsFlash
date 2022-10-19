import React from 'react'
import BBC from '../images/BBC_News.png'
import CSPAN from '../images/C-SPAN.png' 
import CNN from '../images/cnn.png'
import FOX from '../images/fox-news.jpg'
import SKY from '../images/Sky-news-logo.png'

function Footer() {
  return (
    <div className="footer">
      <p>NewsFlash ©2022</p>
        <ul>
            
            <li><img src={BBC} alt="" /></li>
            <li><img src={CNN} alt="" /></li>
            <li><img src={SKY} alt="" /></li>
            <li><img src={FOX} alt="" /></li>
            <li><img src={CSPAN} alt="" /></li>
        </ul>
    </div>
  )
}

export default Footer
