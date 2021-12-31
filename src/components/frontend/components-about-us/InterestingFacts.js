import React from "react";

function InterestingFacts() {
    return ( 
        <div className="m-5 factsContent">
            <h3 className="text-center">Interesting Facts<hr /></h3>
            <div className="row">
                <span className="col-sm-4">
                    <div className="card card-body h-100 shadow-lg">
                        <h5 className="fw-bolder text-center">500+<br />Items In Store</h5>
                        <p className="fw-normal">There are lots of handicraft products related to various product categories.</p>
                    </div>
                </span>
                <span className="col-sm-4">
                    <div className="card card-body h-100 shadow-lg">
                        <h5 className="fw-bolder text-center">90% <br />Our Customers Comeback</h5>
                        <p className="fw-normal">Many Customers give good feedback and they are always connecting with us.</p>
                    </div>
                </span>
                <span className="col-sm-4">
                    <div className="card card-body h-100 shadow-lg">
                        <h5 className="fw-bolder text-center">200+<br />User Of This Site</h5>
                        <p className="fw-normal">There are more than 200 users in our site.</p>
                    </div>
                </span>
            </div>
        </div>
     );
}

export default InterestingFacts;