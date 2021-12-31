import React from 'react';
import InterestingFacts from './components-about-us/InterestingFacts';
import AboutUs from './components-about-us/AboutUs';
import Features from './components-about-us/Features';
import Feedback from './components-about-us/Feedback';
import Header from './../../layouts/frontend/Header';
import Navbar from './../../layouts/frontend/Navbar';
import Footer from './../../layouts/frontend/Footer';

function About () {
    return ( 
        <div>
            <section className="m-0 p-0"><Header /></section>
            <section className="m-0 p-0"><Navbar /></section>
            <section className="aboutContainer"><AboutUs /></section>
            <section className="aboutContainer" id="factsContainer"><InterestingFacts /><hr /></section>
            <section className="aboutContainer" id="featuresContainer"><Features /></section>
            <section className="aboutContainer"  id="feedbackContainer"><Feedback /></section>
            <section className="m-3 h-25 spaceArea"></section>
            <section className="m-0 p-0 footerContainer"><Footer /></section>
        </div>
     );
}

export default About ;