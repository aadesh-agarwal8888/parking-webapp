import React from 'react';
import park1 from './image/park1.jpg';
import park2 from './image/park2.jpg';
import park3 from './image/park3.jpg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './Navbar.css';


const About= ()=> {
    
     return( <>
     <h1 className="text-center text danger text-capitalize my-5"> Welcome to the world of Elios tech</h1>
     <div className="container" style={{margin:"auto"}} >
  <div className="row">
    <div className="col-sm">
      <div class="card" style={{padding:'30px'}}>
  <img class="card-img-top" src={park1} alt="Card image cap" height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Hasslefree Parking</h5>
    <p class="card-text">An innovative way to Parking which lets your organisation to have a hasslefree,maintainable,realtime paring</p>
    <a href="#" class="btn btn-primary">Know More</a>
  </div>
</div>

    </div>
    <div className="col-sm">
      <div class="card" style={{padding:'30px'}}>
  <img class="card-img-top" src={park2} alt="Card image cap" height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Innovative Tech</h5>
    <p class="card-text">An innovative way to Parking which lets your organisation to have a hasslefree,maintainable,realtime paring</p>
    <a href="#" class="btn btn-primary">Know More</a>
  </div>
</div>

    </div>
    <div className="col-sm">
      <div class="card" style={{padding:'30px'}}>
  <img class="card-img-top" src={park3} alt="Card image cap" height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Customer service</h5>
    <p class="card-text">An innovative way to Parking which lets your organisation to have a hasslefree,maintainable,realtime paring</p>
    <a href="#" class="btn btn-primary">Know More</a>
  </div>
</div>

    </div>
    
  </div>
</div>
         </>) 
      };
      
      export default About;
      