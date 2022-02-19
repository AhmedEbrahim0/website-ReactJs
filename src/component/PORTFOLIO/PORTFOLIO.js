import React,{Component} from 'react';
import './PORTFOLIO.css'
import Aos from 'aos';
import 'aos/dist/aos';
import Img1 from './work-1.jpg';
import Img2 from './work-2.jpg';
import Img3 from './work-3.jpg';
import Img4 from './work-4.jpg';
import Img5 from './work-5.jpg';
import Img6 from './work-6.jpg';
import Img7 from './overlay-bg.jpg';
import Img8 from './testimonial-2.jpg';
import Img9 from './testimonial-4 (1).jpg';


const PORTFOLIO=()=>{
    Aos.init({
        duration:2000
    })
    return(
        <div>









<div className="fs-1 text-center my-5" data-aos="fade-up">
            <p>
                <b>
                PORTFOLIO
                </b>
                <p className="fs-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </p>
          


            <div className="container">
                
                <div className="row">

                <div className="col-sm-12 col-lg-3  work-card border">
             <div >
                 <img width="100%" height="80%" src={Img1}/>
             </div>
                 <div className="row p-4">

                 <div className="col-9 fs-6 ">
                 <div>
                   <b>
                 Lorem impsum dolor
                     </b>
                 </div>
               <div>
                     <span> Web Design</span>/ 18 sep. 2018
                 </div>
                 
                 </div>
             <div className="col-3 fs-4">
                 <button className="btn-modal"  data-src="work-1.jpg">
             <i class="fas fa-plus"></i>
                 </button>
             </div>
            
            
             </div>

            </div>


            <div className="col-sm-12 col-lg-3  work-card">
             <div >
                 <img width="100%" height="80%" src={Img2}/>
             </div>
                 <div className="row p-4">

                 <div className="col-9 fs-6 ">
                 <div>
                   <b>
                 Lorem impsum dolor
                     </b>
                 </div>
               <div>
                     <span> Web Design</span>/ 18 sep. 2018
                 </div>
                 
                 </div>
             <div className="col-3 fs-4">
                 <button className="btn-modal"  data-src="work-1.jpg">
             <i class="fas fa-plus"></i>
                 </button>
             </div>
            
            
             </div>

            </div>


            <div className="col-sm-12 col-lg-3  work-card">
             <div >
                 <img width="100%" height="80%" src={Img3}/>
             </div>
                 <div className="row p-4">

                 <div className="col-9 fs-6 ">
                 <div>
                   <b>
                 Lorem impsum dolor
                     </b>
                 </div>
               <div>
                     <span> Web Design</span>/ 18 sep. 2018
                 </div>
                 
                 </div>
             <div className="col-3 fs-4">
                 <button className="btn-modal"  data-src="work-1.jpg">
             <i class="fas fa-plus"></i>
                 </button>
             </div>
            
            
             </div>

            </div>


       
  
            <div className="col-sm-12 col-lg-3  work-card">
             <div >
                 <img width="100%" height="80%" src={Img4}/>
             </div>
                 <div className="row p-4">

                 <div className="col-9 fs-6 ">
                 <div>
                   <b>
                 Lorem impsum dolor
                     </b>
                 </div>
               <div>
                     <span> Web Design</span>/ 18 sep. 2018
                 </div>
                 
                 </div>
             <div className="col-3 fs-4">
                 <button className="btn-modal"  data-src="work-1.jpg">
             <i class="fas fa-plus"></i>
                 </button>
             </div>
            
            
             </div>

            </div>


       
  
            <div className="col-sm-12 col-lg-3  work-card">
             <div >
                 <img width="100%" height="80%" src={Img5}/>
             </div>
                 <div className="row p-4">

                 <div className="col-9 fs-6 ">
                 <div>
                   <b>
                 Lorem impsum dolor
                     </b>
                 </div>
               <div>
                     <span> Web Design</span>/ 18 sep. 2018
                 </div>
                 
                 </div>
             <div className="col-3 fs-4">
                 <button className="btn-modal"  data-src="work-1.jpg">
             <i class="fas fa-plus"></i>
                 </button>
             </div>
            
            
             </div>

            </div>


       
  
            <div className="col-sm-12 col-lg-3  work-card">
             <div >
                 <img width="100%" height="80%" src={Img6}/>
             </div>
                 <div className="row p-4">

                 <div className="col-9 fs-6 ">
                 <div>
                   <b>
                 Lorem impsum dolor
                     </b>
                 </div>
               <div>
                     <span> Web Design</span>/ 18 sep. 2018
                 </div>
                 
                 </div>
             <div className="col-3 fs-4">
                 <button className="btn-modal"  data-src="work-1.jpg">
             <i class="fas fa-plus"></i>
                 </button>
             </div>
            
            
             </div>

            </div>


       
  





                </div>
            </div>



    
          
        </div>
   
   




        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src={Img8} class="d-block w-100"/>
      <div class="carousel-caption d-none d-md-block">
        <h5> Lorem computer science  </h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>


    <div class="carousel-item">
      <img src={Img9} class="d-block w-100"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>  our team   </h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>





  </div>


  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>







        </div>
    )
}

export default PORTFOLIO
