import React from 'react';

function Header() {
    return ( 
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <h1 className="navbar-brand h1">Crafty Shop</h1>
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </nav>
        
     );
}

export default Header;