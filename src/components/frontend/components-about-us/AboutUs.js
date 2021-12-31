import React from "react";
import about from './../../../assets/frontend/images/about/about.png';

function AboutUs() {
    return ( 
        <div className="m-5 row">
            <div className="col-sm-8 col-12">
                <h3>About Us <hr/></h3>
                <p>Note that the development build is not optimized.
To create a production build, use npm run build.Note that the development build is not optimized.
To create a production build, use npm run build.Note that the development build is not optimized.
To create a production build, use npm run build.Note that the development build is not optimized.
To create a production build, use npm run build.Note that the development build is not optimized.
To create a production build, use npm run build.</p>
            </div>
            <div className="col-sm-4 col-12">
                <img src={about} alt="aboutImage" width={"100%"}/>
            </div>
        </div>
     );
}

export default AboutUs;