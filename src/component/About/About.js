import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import Img from './about.jpg'
const About = () => {
    Aos.init({
        duration:2000
    })
    return (

<div className="bg-about"  data-aos="fade-up">
        <div className="container about-back p-5 border">
            <div className="row">


                <div className="col-sm-12 col-lg-6">
                  
                <div className="row">
                    <div className=" col-sm-12 col-md-4">
                  <img src={Img}/>
                    </div>
                    <div className=" col-sm-12 col-md-8">
                        <p>
                        <span><b>Name:</b></span> <span>Ahmed ebrahim</span>
                       </p>
                       <p>
                        <span><b>Profile:</b></span> <span>Web developer</span>
                       </p>
                        <p>
                        <span><b>Email:</b></span> <span> contact@example.com</span>
                        </p>
                        <p>
                        <span><b>Phone:</b></span> <span>(617) 557-0089</span>
                        </p>

                    </div>
                </div>

<p className="my-5"> <b>Skill</b></p>
<div className="animate11">
    <p>HTML 85%</p>
    <p className="width html"></p>
</div>
<div className="animate11">
    <p>CSS 75%</p>
    <p className="width css"></p>
</div>
<div className="animate11">
    <p>JAVASCRIPT 60%</p>
    <p className="width js"></p>
</div>
                </div>


                <div className="col-sm-12 col-lg-6">
                    <div className="txt-about">
                        <div className="about-me">
                        <b>About me 
                            <span className="underline"></span>
                        </b>
                        </div>
                       <div className="font-about">
                       <p>
                        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.
                        </p>
                        <p>
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                        </p>
                        <p>
                        Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        </p>
                       </div>
                    </div>
                    </div>




            </div>
        </div>
        </div>
    
    
    )
}

export default About







