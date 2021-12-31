import React from "react";
import {Link} from 'react-router-dom';
import {SiFacebook,SiTwitter,SiWhatsapp,SiGithub,SiInstagram,SiLinkedin} from './../../../node_modules/react-icons/si';

const facebook = {color:"#3b5998"};
const twitter = {color:"#00acee"};
const whatsapp = {color:"#075e54"};
const instagram = {color:"#8a3ab9"};
const linkedin = {color:"#0077b5"};
const github = {color:"#171515"};

function Footer() {
    return ( 
        <footer className="footer sticky-bottom mt-0">
            <div className="container p-4">
                <section className="mb-4 mt-2 socialMedia">
                    <center>
                        <Link className="btn btn-light btnF rounded btn-floating m-1" to="#!" role="button"><SiFacebook style={facebook} size={32} /></Link>
                        <Link className="btn btn-light rounded btn-floating m-1" to="#!" role="button"><SiTwitter style={twitter} size={32}  /></Link>
                        <Link className="btn btn-light rounded btn-floating m-1" to="#!" role="button"><SiWhatsapp style={whatsapp} size={32} /></Link>
                        <Link className="btn btn-light rounded btn-floating m-1" to="#!" role="button"><SiInstagram style={instagram} size={32} /></Link>
                        <Link className="btn btn-light rounded btn-floating m-1" to="#!" role="button"><SiLinkedin style={linkedin} size={32} /></Link>
                        <Link className="btn btn-light rounded btn-floating m-1" to="#!" role="button"><SiGithub style={github} size={32}  /></Link>
                    </center>
                </section>

                <section className="footer-links">
                   <div className="row">
                        <div className="col-6 col-sm-6 col-md-3 mb-2">
                            <h6 className="text-uppercase fw-bolder text-white">Quick Links</h6>
                            <hr className="text-white"/>
                            <ul className="list-unstyled mb-0 fw-normal footerLink">
                                <li>
                                    <Link to="/" className="text-decoration-none footerLink">Home</Link>
                                </li>
                                <li>
                                    <Link to="/About-Us" className="text-decoration-none footerLink">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/Products" className="text-decoration-none footerLink">Products</Link>
                                </li>
                                <li>
                                    <Link to="/Vlog" className="text-decoration-none footerLink">Vlog</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3 mb-3">
                            <h6 className="text-uppercase fw-bolder text-white">Contact Details</h6>
                            <hr className="text-white" />
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <h6>Crafty Shop,<br />Galle Road,<br />Panadura</h6>
                                </li>
                                <li>
                                    <h6>(+94)91 234 293 08</h6>
                                </li>
                                <li>
                                    <h6>craftyShop@private.limited.com</h6>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3 mb-3">
                            <h6 className="text-uppercase fw-bolder text-white">Payment Methods</h6>
                            <hr className="text-white" />
                            <ul className="list-unstyled mb-0 fw-normal">
                                <li>
                                <Link to="#!" className="text-decoration-none footerLink">Link 1</Link>
                                </li>
                                <li>
                                <Link to="#!" className="text-decoration-none footerLink">Link 2</Link>
                                </li>
                                <li>
                                <Link to="#!" className="text-decoration-none footerLink">Link 3</Link>
                                </li>
                                <li>
                                <Link to="#!" className="text-decoration-none footerLink">Link 4</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3 mb-3">
                            <h6 className="text-uppercase fw-bolder text-white">Other Details</h6>
                            <hr className="text-white" />
                            <ul className="list-unstyled mb-0 fw-normal">
                                <li>
                                <Link to="#!" className="text-decoration-none footerLink">Wish list</Link>
                                </li>
                                <li>
                                <Link to="#!" className="text-decoration-none footerLink">Special Offers</Link>
                                </li>
                                <li>
                                <Link to="#!" className="text-decoration-none footerLink">Site Map</Link>
                                </li>
                                <li>
                                <Link to="#!" className="text-decoration-none footerLink">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>                   
                </section>            
            </div>
            <div className="text-center p-2 text-white">
                    © 2021 Copyright , Crafty Shop
             </div>

        </footer>

     );
}

export default Footer;