import React from 'react'
import './bg.jpg';
import './Time.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Time() {
    Aos.init({
        duration:3000
    })
    return (
        <div className="time">
            <div data-aos="fade-up" className="txt-time container ">
                <b>Welcome To My Website</b>
                <p>  We're working hard to improve our website and we'll ready to launch after </p>
            </div>
            <div className="date">
                <div className="day" data-aos="fade-right" >
                    <p></p>
                    Day
                </div>
                <div className="hour" data-aos="fade-right">
                    <p></p>
                    Hour
                    </div>
                <div data-aos="fade-left" className="min"><p></p>Minutes</div>
                <div data-aos="fade-left" className="sec"><p></p>Seconds</div>
            </div>
        </div>
    )
}

export default Time
