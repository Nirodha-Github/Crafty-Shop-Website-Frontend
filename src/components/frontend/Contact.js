import React from 'react';
import ContactDetails from './components-contact-us/ContactDetails';
import ContactForm from './components-contact-us/ContactForm';
import ContactMap from './components-contact-us/ContactMap';
import Header from './../../layouts/frontend/Header';
import Navbar from './../../layouts/frontend/Navbar';
import Footer from './../../layouts/frontend/Footer';

function Contact () {
    return ( 
        <div>
            <section className="m-0 p-0"><Header /></section>
            <section className="m-0 p-0"><Navbar /></section>
            <section className="contactDetailsContainer m-0 mt-3 p-0"><ContactDetails /></section><hr/>
            <section className="contactMapContainer"><ContactMap /></section>
            <section className="contactFormContainer m-0 p-0"><ContactForm /></section>
            <section className="m-0 p-0 footerContainer" id="footerBack"><Footer /></section>
        </div>
     );
}

export default Contact ;