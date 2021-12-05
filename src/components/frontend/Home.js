import React from 'react';
import Navbar from '../../layouts/frontend/Navbar';
import Header from '../../layouts/frontend/Header';

function Home() {
    return ( 
        <div>
            <div className="p-0 m-0"><Header /></div>
            <div className="p-0 m-0"><Navbar /></div>
            <h1>Home</h1>
        </div>
        
     );
}

export default Home;