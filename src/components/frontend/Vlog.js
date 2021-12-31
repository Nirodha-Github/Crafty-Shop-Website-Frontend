import React from 'react';
import Videos from './components-vlog/Videos';
import Articles from './components-vlog/Articles';
import Header from './../../layouts/frontend/Header';
import Navbar from './../../layouts/frontend/Navbar';
import Footer from './../../layouts/frontend/Footer';

function Vlog () {
    return ( 
        <div>
            <section className="m-0 p-0"><Header /></section>
            <section className="m-0 p-0"><Navbar /></section>            
            <section className="vlogContainer" id="videosContainer"><Articles /></section>
            <section className="vlogContainer" id="articlesContainer"><Videos /></section>
            <section className="m-3 h-25 spaceArea"></section>
            <section className="m-0 p-0 footerContainer"><Footer /></section>
        </div>
     );
}

export default Vlog ;