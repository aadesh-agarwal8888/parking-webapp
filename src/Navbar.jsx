import React from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './Navbar.css';
const Navbar = ()=>{
return(
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-white" >
  <div className="container-fluid" style={{marginBottom:'4rem'}}>
    <NavLink exact className="navbar-brand" to="/">ELIOS Tech</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link" to="/SignIn">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/FirstSignIN">Sign Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contactus">Contact Us</NavLink>
        </li>
        </ul>
        
      </div>
      
  </div>
  
</nav>


    </>
);

} ;
export default Navbar;