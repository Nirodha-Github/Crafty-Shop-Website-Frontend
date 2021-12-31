import React from 'react';
import logo from './../../assets/frontend/images/home/logo.png';

function Header() {
    return ( 
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <h1 className="navbar-brand fs-1 mainHeading"><img src={logo} className="rounded-circle mr-4" alt="logo" width={"15%"}/><span className="crafty ml-3">Crafty</span><span className="shop">Shop</span></h1>
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success" type="submit">Search</button>
            </form>
        </div>
        </nav>
        
     );
}

export default Header;