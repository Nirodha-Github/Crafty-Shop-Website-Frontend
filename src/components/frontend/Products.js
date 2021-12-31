import React from 'react';
import Header from './../../layouts/frontend/Header';
import Navbar from './../../layouts/frontend/Navbar';
import Footer from './../../layouts/frontend/Footer';

function Products () {
    return ( 
        <div>
            <section className="m-0 p-0"><Header /></section>
            <section className="m-0 p-0"><Navbar /></section>
            <section className="productContainer">Home</section>
            <section className="productContainer" id="factsContainer">Products<hr /></section>
            <section className="productContainer" id="featuresContainer"></section>
            <section className="m-3 h-25 spaceArea"></section>
            <section className="m-0 p-0 footerContainer"><Footer /></section>
        </div>
     );
}

export default Products ;