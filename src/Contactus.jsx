import React from 'react';
import park4 from './image/park4.png';

const Contactus= ()=>{
    return( 
        <div >
        <section id="header" className="pt-0">
        <div className="container-fluid nav_bg" style={{marginTop:'50px'}}  >
          <div className='row'>
            <div className="col-10 mx-auto">
        <div className="row">
         <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1 style={{textAlign:"left"}}>A 24/7 Customer Support<br></br> with Experts,<strong style={{color:"lightblue"}}> At Elios Tech</strong></h1>
                <h5 className="my-3">
                    We are here to ease your experience
                </h5>
                <div className="mt-3">
              <a href="" className="btn-get-started" >Contact Us</a>
                </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
        <img src={park4} className="img-fluid animated" alt=" ">
        
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

export default Contactus;