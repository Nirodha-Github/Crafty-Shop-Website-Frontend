import React from 'react';
import ArticlesComponent from './components-vlog/ArticlesComponent';
import Header from '../../layouts/frontend/Header';
import Navbar from '../../layouts/frontend/Navbar';
import Footer from '../../layouts/frontend/Footer';

function Articles () {
    return ( 
        <div>
            <section className="m-0 p-0"><Header /></section>
            <section className="m-0 p-0"><Navbar /></section>            
            <section className="articlesContainer"><ArticlesComponent /></section>
            <section className="m-3 h-25 spaceArea"></section>
            <section className="m-0 p-0 footerContainer"><Footer /></section>
        </div>
     );
}

export default Articles;