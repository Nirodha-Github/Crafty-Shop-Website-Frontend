import React from "react";
import googlemap from './../../../assets/frontend/images/contact/googlemap.png';

function ContactMap() {
    return ( 
        <div className="m-5 row map">
            <img className="img-responsive" src={googlemap} alt="map" height="380px"/>
        </div>
     );
}

export default ContactMap;