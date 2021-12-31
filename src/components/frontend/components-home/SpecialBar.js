import React from "react";

function SpecialBar() {
    return ( 
        <center className="m-5 row">
            <div className="col-sm-3 col-6">
                <h5 className="fw-bold">Free Shipping</h5><hr />
                <p>Free On Oder Over $99</p>             
            </div>
            <div className="col-sm-3 col-6">
                <h5 className="fw-bold">Guarantee</h5><hr />  
                <p>30 Days Money Back</p>    
            </div>
            <div className="col-sm-3 col-6">
                <h5 className="fw-bold">Safe Payment</h5><hr />  
                <p>Safe your online payment</p>    
            </div>
            <div className="col-sm-3 col-6">
                <h5 className="fw-bold">Online Support</h5><hr />
                <p>We Have Support 24/7</p>      
            </div>
        </center>
     );
}

export default SpecialBar;