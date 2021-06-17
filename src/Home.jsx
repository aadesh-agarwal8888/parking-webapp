import React from 'react';
import {NavLink,useLocation} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import park5 from './image/park5.png';

const Home= ()=> {
const location=useLocation();
const heading={
    
    color:"blue",
    textAlign:"center"
};
console.log(location);
return( 
<div ><Navbar/>
<section id="header" className="pt-0">
<div className="container-fluid nav_bg" style={{marginTop:'50px'}}  >
  <div className='row'>
    <div className="col-10 mx-auto">
<div className="row">
 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
        <h1 style={{textAlign:"left"}}>Experience new way of<br></br> Parking with,<strong style={{color:"lightblue"}}>Elios Tech</strong></h1>
        <h5 className="my-3">
            We are here to innovate your parking
        </h5>
        <div className="mt-3">
      <a href="" className="btn-get-started" >Get Started</a>
        </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
<img src={park5} className="img-fluid animated" alt=" ">

</img>
        </div>
        </div>
    </div>
  </div>
</div>
</section>
</div>
     ) 
  };
  
  export default Home;
  