import React from 'react'
import './home.jpg'
import './Home.css'
import Typewriter  from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    Aos.init({
        duration:3000
    })
    
    return (
        <div className="Home ">
      <div className="container x1">
      <div className="row">


<div className=" col-lg-12  txt text-center h-100">
    <div className="name " data-aos="fade-up">
    <b>I am Ahmed Ebrahim</b>
    </div>
     </div>
<div className=" col-lg-12 typewriter">
<Typewriter onInit={(p)=>{
           p.typeString("I am Ahmed Ebrahim")
           .pauseFor(2000)
           .deleteAll()
           .typeString("from Egypt")
           .pauseFor(2000)
           .deleteAll()
           .typeString(" Developer")
           .pauseFor(2000)
           .deleteAll()
           .typeString("And Free Lancer")
           .pauseFor(2000)
           .deleteAll()
           .start()
       
     }} />
</div>





</div>


      </div>
            
        </div>
    )
}

export default Home
