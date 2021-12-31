import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


function Navbar() {

    const history = useHistory();

    const logoutSubmit = (e) =>{
        e.preventDefault();
    
        axios.post('/api/logout').then(res => {
          if(res.data.status === 200){
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_name');
            swal("Success", res.data.message,"success");
            history.push('/');
          }
        });
      }
    
        var AuthButtons = "";
        var AuthName = "";
    
      if(!localStorage.getItem('auth_token'))
      {
        AuthButtons = (
          <div className="navbar-nav">
                <li className="nav-item text-center">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item text-center">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
          </div>
        )
      }
      else{
        AuthName = localStorage.getItem('auth_name')
        AuthButtons = (   
            <div className="navbar-nav">
                <li className="nav-item text-center">
                    <Link className="nav-link" to="/cart">Cart</Link>
                </li>
                {/* <li className="nav-item text-center">
                    <Link className="nav-link" to="/orders">Orders</Link>
                </li> */}
                <li className="nav-item dropdown text-center">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {AuthName}
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item text-center" to="/profile">Profile</Link></li>
                        <li><Link className="dropdown-item text-center" to="#">Wish list</Link></li>
                        <li><button className="btn dropdown-item text-dark text-center" type="button" width={"100%"} onClick={logoutSubmit}>Logout</button></li>
                    </ul>
                </li>
            </div>
        )
      }

    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark shadow sticky-top mainNav justify-content-start">
        <div className="container">
            {/* <Link className="navbar-brand" to="#">Navbar</Link> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <li className="nav-item text-center active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item text-center">
                    <Link className="nav-link" to="/about-us">About Us</Link>
                </li>
                <li className="nav-item text-center">
                    <Link className="nav-link" to="/vlog">Vlog</Link>
                </li>
                <li className="nav-item text-center">
                    <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item text-center">
                    <Link className="nav-link" to="/contact-us">Contact Us</Link>
                 </li>
                
            </div>
            {AuthButtons}
            </div>
        </div>
        </nav>

     );
}

export default Navbar;