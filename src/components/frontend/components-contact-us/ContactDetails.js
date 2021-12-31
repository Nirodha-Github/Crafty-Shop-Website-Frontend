import React from "react";
import {Link} from 'react-router-dom';
import {SiFacebook,SiTwitter,SiWhatsapp,SiGithub,SiInstagram,SiLinkedin} from './../../../../node_modules/react-icons/si';

const facebook = {color:"#3b5998"};
const twitter = {color:"#00acee"};
const whatsapp = {color:"#075e54"};
const instagram = {color:"#8a3ab9"};
const linkedin = {color:"#0077b5"};
const github = {color:"#171515"};

function ContactDetails() {
    return ( 
        <div className="m-5 p-2 mt-0 row contactDetails">
            <h3 className="text-center p-3">Contact Us</h3><hr />
            <div className="row">
                <div className="col-sm-6 col-12">
                    <h5 className="fw-bold">Contact Details</h5>
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
                <div className="col-sm-6 col-12">
                    <div className="row m-2">
                        {/* facebook */}
                        <SiFacebook style={facebook} className="col-sm-2 shadow-sm bg-light" size={32} />   
                        <Link className="col-sm-10" to="/www.facebook.com/crafty-shop/ " role="button">
                            www.facebook.com/crafty-shop/           
                        </Link>  
                    </div>     
                    <div className="row m-2">     
                        {/* twitter */}
                    <SiTwitter style={twitter} className="col-sm-2 shadow-sm bg-light"  size={32}  />
                    <Link className="col-sm-10" to="/www.twitter.com/crafty-shop" role="button">
                        www.twitter.com/crafty-shop
                    </Link>
                    </div>
                    <div className="row m-2">
                        {/* whatsapp */}
                        <SiWhatsapp style={whatsapp} className="col-sm-2 shadow-sm bg-light"  size={32} />
                        <Link className="col-sm-10" to="/www.whatsapp.com/crafty-shop/" role="button">
                            www.whatsapp.com/crafty-shop/  
                        </Link>
                    </div>
                    <div className="row m-2">
                        {/* instagram */}
                        <SiInstagram style={instagram} className="col-sm-2 shadow-sm bg-light"  size={32} />
                        <Link className="col-sm-10" to="/www.instagram.com/crafty-shop/ " role="button">
                            www.instagram.com/crafty-shop/   
                        </Link>
                    </div>
                    <div className="row m-2">
                        {/* linkedin */}
                        <SiLinkedin style={linkedin} className="col-sm-2 shadow-sm bg-light"  size={32} />
                        <Link className="col-sm-10" to="/www.linkedin.com/crafty-shop/" role="button">
                            www.linkedin.com/crafty-shop/
                        </Link>
                    </div>
                    <div className="row m-2">
                        {/* github */}
                        <SiGithub style={github} className="col-sm-2 shadow-sm bg-light"  size={32}  />
                        <Link className="col-sm-10" to="/www.github.com/crafty-shop/" role="button">
                            www.github.com/crafty-shop/
                        </Link> 
                    </div>           
                </div>
            </div>
        </div>
     );
}

export default ContactDetails;