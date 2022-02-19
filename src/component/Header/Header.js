import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div className=" header">
<div className="container">
<div className="row ">
  <div className="col-lg-9">

<div className="x icon1">

<i class=" xx1 far fa-envelope"></i>
<span> contact@example.com</span>

</div>
<div className="x icon2">

<i class=" xx1 fas fa-mobile-alt "></i>
<span>+1 5589 55488 55</span>

</div>


</div>

<div className="col-lg-3">
<div className="info">
<i class="x11 fab fa-twitter"></i>
</div>
<div className="info">
  <Link to=" https://www.facebook.com/profile.php?id=100072446980879 ">  <i class="fab fa-facebook"></i> </Link>
</div>
<div className="info">
<i class="x11  fab fa-instagram"></i>
</div>
<div className="info">
<i class="x11  fab fa-invision"></i>
</div>
</div>



  </div>

</div>
        </div>
    )
}

export default Header
