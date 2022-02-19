import React from 'react';
import './BLOG.css'
import Img1 from './post-1.jpg';
import Img2 from './post-2.jpg';
import Img3 from './post-3.jpg';
import Aos from 'aos'
import 'aos/dist/aos'

const BLOG = () => {
    Aos.init({
        duration:3000
    })
    return (
        <div data-aos="fade-up" >
            <div className="my-5">
              <div >

             <div className="text-center">
             <h1><b>
                BLOG    
                </b></h1>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
             </div>

               <div className="container">
              <div className="row">

              
<div className=" col-sm-12 mx-2 col-md-3 cards-blog1 border">

<img src={Img1} height="40%" width="100%" />
<h5><b> See more ideas about Travel </b></h5>
<p>
Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
</p>
<div className="blog-icon container-fluid border">
<div className="row ">
 <div className="col-7 p-2  ">
     <img className="icon-blog" src={Img1}/>
     <span className="p-2 fs-6"> Morgan Freeman</span>
     </div>  

<div className="col-5 p-2">

<i class="far fa-clock"></i> <span> 10 min</span>


</div>


</div>

</div>


</div>

<div className=" col-sm-12 mx-2 col-md-3 cards-blog1 border">

<img src={Img2} height="40%" width="100%" />
<h5><b> See more ideas about Travel </b></h5>
<p>
Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
</p>
<div className="blog-icon container-fluid border">
<div className="row ">
 <div className="col-7 p-2  ">
     <img className="icon-blog" src={Img2}/>
     <span className="p-2 fs-6"> Morgan Freeman</span>
     </div>  

<div className="col-5 p-2">

<i class="far fa-clock"></i> <span> 10 min</span>


</div>


</div>

</div>


</div>

<div className=" col-sm-12 mx-2 col-md-3 cards-blog1 border">

<img src={Img3} height="40%" width="100%" />
<h5><b> See more ideas about Travel </b></h5>
<p>
Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
</p>
<div className="blog-icon container-fluid ">
<div className="row border">
 <div className="col-7 p-2  ">
     <img className="icon-blog" src={Img3}/>
     <span className="p-2 fs-6"> Morgan Freeman</span>
     </div>  

<div className="col-5 p-2">

<i class="far fa-clock"></i> <span> 10 min</span>


</div>


</div>

</div>


</div>






</div>
              </div>
               </div>
            </div>
        </div>
    )
}

export default BLOG;
