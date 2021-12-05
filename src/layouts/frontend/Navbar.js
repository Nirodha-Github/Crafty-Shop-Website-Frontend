import React from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
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
          <span className="btn-group justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
          </span>
        )
      }
      else{
        AuthName = localStorage.getItem('auth_name')
        AuthButtons = (    
            <li className="nav-item dropdown  justify-content-end">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {AuthName}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li className="nav-item"><Link className="dropdown-item" to="/profile">Profile</Link></li>
                    <li className="nav-item"><Link className="dropdown-item" to="#">Another action</Link></li>
                    <li className="nav-item"><button className="btn dropdown-item text-dark text-center nav-link" type="button" width={"100%"} onClick={logoutSubmit}>Logout</button></li>
                </ul>
            </li>
        )
      }
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
        <div className="container">
            {/* <Link className="navbar-brand" to="#">Navbar</Link> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Cart</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Vlog</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Orders</Link>
                </li>
                {AuthButtons}
            </div>
            </div>
        </div>
        </nav>
     );
}

export default Navbar;