import React from 'react';
import Faq from './components-home/Faq';
import SpecialBar from './components-home/SpecialBar';
import SlideShow from './components-home/SlideShow';
import Header from './../../layouts/frontend/Header';
import Navbar from './../../layouts/frontend/Navbar';
import Footer from './../../layouts/frontend/Footer';

function Home() {
    return ( 
        <div>
            <section className="m-0 p-0"><Header /></section>
            <section className="m-0 p-0"><Navbar /></section>            
            <div className="m-0 p-0" id="slideBack"><SlideShow /></div>
            <div className="homeContainer">Home</div>
            <div className="specialBar"><SpecialBar /></div>
            <div className="homeContainer">Home</div>
            <div className="homeContainer" id="faqContainer"><Faq /></div>
            <section className="m-3 h-25 spaceArea"></section>
            <section className="m-0 p-0 footerContainer"><Footer /></section>
        </div>
        
     );
}

export default Home;