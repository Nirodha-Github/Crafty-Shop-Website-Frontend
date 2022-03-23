import React from "react";
import { Link } from "react-router-dom";

function SlideShow() {
    return ( 
        <div className="m-5 mt-0 row">
            <div className="col-sm-6 text-light mt-5">
                <h4 className="mt-5 mb-5 fw-bold">Do You Want To Buy Handicraft Products ?<hr/></h4>
                <h5 className="mt-2 mb-2 fw-bolder">Buy Crafty Products that you need for various occasions in same place.</h5>
                <Link to="/products" className="btn btn-dark text-light goProductBtn">View More ... </Link>
            </div>
            <div className="col-sm-6"></div>
        </div>
     );
}

export default SlideShow;