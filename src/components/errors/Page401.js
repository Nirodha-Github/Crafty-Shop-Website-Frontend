import React from "react";
import {Link} from 'react-router-dom';

function Page404() {
   
    return ( 
        <div id="layoutError">
            <div id="layoutError_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="text-center mt-4">
                                    <h1 className="display-1">401</h1>
                                    <p className="lead">Unauthorized</p>
                                    <p>Access to this resource is denied.</p>
                                    <Link to="/login">
                                        <i className="fas fa-arrow-left me-1"></i>
                                        Please login first
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutError_footer">
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Crafty Shop 2021</div>
                            <div>
                                <Link to="#">Privacy Policy</Link>
                                &middot;
                                <Link to="#">Terms &amp; Conditions</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
     );
}

export default Page404;