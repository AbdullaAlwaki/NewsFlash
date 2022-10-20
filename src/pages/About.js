import React from 'react'
import Den from "../../src/images/den-avatar.JPEG"
import Nigel from "../../src/images/nigel-avatar.JPEG"
import Abdulla from "../../src/images/alwaki-avatar.JPEG"
import Ahmed from "../../src/images/ahmed-avatar.JPEG"
import logo from "../../src/images/newsFlash3.png";
import truth from "../../src/images/truth-power.jpeg";
import madonna from "../../src/images/madonna.jpeg";
import atten from "../../src/images/attenborough.jpeg";
import obama from "../../src/images/obama.jpeg";
import Footer from "../component/Footer";
import '../styles/About.css';

function About() {
  return (
    <div>
      <header>
        <div className='headerContainer'> 
        <img  src={logo} alt="" width={"12%"} height={"100%"}/>
        <h1 className='headline'> NewsFlash - Your Fast News Feed</h1>
        </div>
  </header>
  <section className='bodyContainer'>

      {/* about company description */}
    <div className='aboutBox'>
      <h2 className='sub-head'> NewsFlash. Who we are. What we do.</h2>
      <img style={{width: '100%', height: '25%'}} src={truth} alt="Speak truth to Power"/>
      <p> A News Source you can trust. A news source not bending over backwards to appease a billionaire owner. No crooked Government. No institutionlised  appeasement. No propaganda. No Bullshit. No lies. You want to stay on top of current affairs. Be informed. It can be a full time job to filter the crap and stay a breast of the Truth. NewsFlash have you covered. No one will keep you up to speed and on the right path faster than we will. Knowing the Truth has never been quicker.</p>
      <div className='testimonial'>
      <img className='test-pix'  src={atten} alt="David Attenborough" />
      <q> The planet is being destroyed if we don't act fast. I don't have time to get my new anywhere else. NewsFlash is a GodSend</q> <cite>David Attenborough</cite>
      </div>
      <div className='testimonial'>
      <img className='test-pix'  src={obama} alt="Barrack Obama" />
      <q> NesFlash has me up to date with all the news and Info I need in minutes. If you want a quick antidote to Fake News you need to read you some NewsFlash</q> <cite>Barrack Obama</cite>
      </div>
      <div className='testimonial'>
      <img className='test-pix'  src={madonna} alt="Lady Madonna" />
      <q> I love NewsFlash. I don't read anything else. And Nigel Nix s Hottttttt!!</q> <cite>Madonna</cite>
      </div>
    </div>


    {/* team profile cards */}
    <div className='teamBox'>
      <h2 className='sub-head'>Meet the NewsFlash team</h2>

      <div className='playerCard'>
        <div>
        <h3>Nigel Nix</h3>
        <p> Fearless Roving Reporter at large</p>
        <p> Nigel Nix is a fearlessly committed and independent investigative Journalist. His desire and ingenuity in unearthing the truth about the issues facing the world in todays terrifying climate is an inspiration to us all. Thanks to Nigel's unparalleled reputation NewsFlash has quickly established itself as one of the most preeminent and unbiased new sources in the world today</p>
        <i class="fa-brands fa-github">  https://github.com/nigelnix/nigelnix</i>
        </div>
        <img className='profilePix'  src={Nigel} alt="Nigel Avatar" />

      </div>
      <div className='playerCard'>
        <div>
        <h3>Ahmed H. Omar</h3>
        <p> Fearless Roving Reporter at large</p>
        <p> Nigel Nix is a fearlessly committed and independent investigative Journalist. His desire and ingenuity in unearthing the truth about the issues facing the world in todays terrifying climate is an inspiration to us all. Thanks to Nigel's unparalleled reputation NewsFlash has quickly established itself as one of the most preeminent and unbiased new sources in the world today</p>
        <i class="fa-brands fa-github">  https://github.com/AhmedHusseinOmar </i>
        </div>
        <img className='profilePix'  src={Ahmed} alt="Ahmed Avatar" />

      </div>
      <div className='playerCard'>
        <div>
        <h3>Abdulla Alwaki</h3>
        <p> Fearless Roving Reporter at large</p>
        <p> Nigel Nix is a fearlessly committed and independent investigative Journalist. His desire and ingenuity in unearthing the truth about the issues facing the world in todays terrifying climate is an inspiration to us all. Thanks to Nigel's unparalleled reputation NewsFlash has quickly established itself as one of the most preeminent and unbiased new sources in the world today</p>
        <i class="fa-brands fa-github">  https://github.com/AbdullaAlwaki/AbdullaAlwaki</i>
        </div>
       
        <img className='profilePix'  src={Abdulla} alt="Abdulla Avatar" />
       
      </div>
      <div className='playerCard'>
        <div>
        <h3>Denis McArdle</h3>
        <p> Fearless Roving Reporter at large</p>
        <p> Nigel Nix is a fearlessly committed and independent investigative Journalist. His desire and ingenuity in unearthing the truth about the issues facing the world in todays terrifying climate is an inspiration to us all. Thanks to Nigel's unparalleled reputation NewsFlash has quickly established itself as one of the most preeminent and unbiased new sources in the world today</p>
        <i class="fa-brands fa-github">  https://github.com/DeniMc/DeniMc</i>
        </div>
        
        <img className='profilePix'  src={Den} alt="Denis Avatar" />
       
      </div>
    </div>

  </section>
  <Footer />
    </div>
  )
}

export default About