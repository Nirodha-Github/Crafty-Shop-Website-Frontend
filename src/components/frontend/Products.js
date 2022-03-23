import React from 'react';
import Header from './../../layouts/frontend/Header';
import Navbar from './../../layouts/frontend/Navbar';
import Footer from './../../layouts/frontend/Footer';
import ViewCategory from './components-products/ViewCategory';

function Products () {
    return ( 
        <div>
            <section className="m-0 p-0"><Header /></section>
            <section className="m-0 p-0"><Navbar /></section>
            <section className="p-0 m-0 productViewContainer"><ViewCategory /></section>
            <section className="m-0 p-0 footerContainer"><Footer /></section>
        </div>
     );
}

export default Products ;