import React from 'react';
import VideosComponent from './components-vlog/VideosComponent';
import Header from '../../layouts/frontend/Header';
import Navbar from '../../layouts/frontend/Navbar';
import Footer from '../../layouts/frontend/Footer';

function Videos () {
    return ( 
        <div>
            <section className="m-0 p-0"><Header /></section>
            <section className="m-0 p-0"><Navbar /></section>            
            <section className="videosContainer"><VideosComponent /></section>
            <section className="m-3 h-25 spaceArea"></section>
            <section className="m-0 p-0 footerContainer"><Footer /></section>
        </div>
     );
}

export default Videos;