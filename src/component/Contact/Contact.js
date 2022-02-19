import React from 'react';
import './Contact.css'
import Aos from 'aos';
import 'aos/dist/aos'
const Contact = () => {
    Aos.init({
        duration:3000
    })
    return (
        <div className="contact p-5" data-aos="fade-up">
            <div className="container contact-info">
                <div className="row p-5">
              <div  className="col-sm-12 col-md-6">

          <h3>
              <b>
              Send Message Us
              </b>
              <span className="linee"></span>
          </h3>

          <div className="my-4">
              <input placeholder="Your Name" type="text"/>
          </div>
          <div className="my-4">
              <input placeholder="Your Email" type="text"/>
          </div>
          <div className="my-4">
              <input placeholder="Subject" type="text"/>
          </div>
          <div className="my-4">
              <textarea placeholder="Message" row="30"></textarea>
          </div>
          <div className="my-5 text-center">
              <button className="btn-contact">
 Send Message
              </button>
          </div>

              </div>
                
                <div className="col-sm-12 col-md-6">

                <h3>
              <b>
              Get in Touch

              </b>
              <span className="linee"></span>
          </h3>
          <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?
          </p>
    <div className="my-2">
    <i class=" co fas fa-map-marker-alt"></i> <span className="mx-3">  329 WASHINGTON ST BOSTON, MA 02108 </span>
    </div>
    <div className="my-2">
<i class="  co fas fa-mobile-alt"></i>
     <span className="mx-3">  (617) 557-0089</span>
    </div>

    <div className="my-2">
    <i class=" co far fa-envelope"></i> <span className="mx-3">  contact@example.com </span>
    </div>



                </div>
                
                
                </div>
            </div>
        </div>
    )
}
export default Contact
