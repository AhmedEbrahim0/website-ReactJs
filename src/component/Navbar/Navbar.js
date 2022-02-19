import React from 'react';
import {NavLink ,  Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <Link className="navbar-brand" to="#"> <span className="ahm" >A hm</span> <span className="ed">eD</span> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link    class="nav-link " aria-current="page" to="/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link    class="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link    class="nav-link" to="/service">Service</Link>
              </li>
              <li class="nav-item">
                <Link    class="nav-link" to="/work">Work</Link>
              </li>
              <li class="nav-item">
                <Link    class="nav-link" to="/blog">Blog</Link>
              </li>
              <li class="nav-item dropdown">
                <Link  class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link    class="dropdown-item" to="#">Action</Link></li>
                  <li><Link    class="dropdown-item" to="#">Another action</Link></li>
                  <li><Link    class="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>


              <li class="nav-item">
                <Link    class="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
