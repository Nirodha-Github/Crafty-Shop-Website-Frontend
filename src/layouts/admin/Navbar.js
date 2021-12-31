import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { FaUserCircle,FaBars,FaSearch } from './../../../node_modules/react-icons/fa';

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

    return ( 

        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark mb-3">
        
        <Link class="navbar-brand ps-3" to="/admin"><h1>Crafty Shop</h1></Link>
       
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" to="#!"><FaBars /></button>
        
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-warning text-light" id="btnNavbarSearch" type="button"><FaSearch /></button>
                </div>
        </form>
      
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <Link to="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaUserCircle size={28}/></Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/admin/admin-profile">Profile</Link></li>
                        <li><Link className="dropdown-item" to="#!">Activity Log</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><button className="btn dropdown-item text-dark" type="button" width={"100%"} onClick={logoutSubmit}>Logout</button></li>
                    </ul>
                </li>
        </ul>
    </nav>
     );
}

export default Navbar;