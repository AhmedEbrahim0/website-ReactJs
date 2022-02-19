import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Time from './component/time page/Time';
import About from './component/About/About';
import Service from './component/Service/Service';
import PORTFOLIO from './component/PORTFOLIO/PORTFOLIO';
import BLOG from './component/BLOG/BLOG';
import Contact from './component/Contact/Contact';
class App extends Component{
  render(){
    return(
  
<BrowserRouter>

<Header/>
<Navbar/>
<Route exact path="/" component={Time}/>
<Route exact path="/home" component={Home}/>
<Route exact path="/about" component={About}/>
<Route exact path="/service" component={Service}/>
<Route exact path="/work" component={PORTFOLIO}/>
<Route exact path="/blog" component={BLOG}/>
<Route exact path="/contact" component={Contact}/>
</BrowserRouter>
    
    )
  }
}
export default App