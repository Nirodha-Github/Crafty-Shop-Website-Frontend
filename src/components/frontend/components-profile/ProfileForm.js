import React from "react";

function ProfileForm() {
    return ( 
        <div className="m-0 row p-0">
            <h3 className="text-center p-3 mt-3">Welcome to Profile<hr /></h3>
            <div className="row m-0 p-0">
                <div className="col-sm mt-5 side"></div>
                <form className="card-body col-sm-10 shadow-lg">
                    <div className="form-row row">
                        <div className="form-group col-sm-4 offset-sm row mt-4 mb-4" id="profilePhoto">
                            <input type="file" name="pic" placeholder="Upload Your Profile Image" className="col-sm-8 p-2 border border-circle border-primary border-1" id="fname"/>
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="form-group col-sm-12 row mt-4">
                            <label htmlFor="fname" className="col-sm-4">Full Name</label>
                            <input type="text" name="fname" placeholder="Enter Your First Name" className="col-sm-8 p-2 border border-primary border-1" id="fname"/>
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="form-group col-sm-12 row mt-4">
                            <label htmlFor="email" className="col-sm-4">Email</label>
                            <input type="email" name="email" placeholder="Enter Your Email Address" className="col-sm-8 p-2 border border-primary border-1" id="email"/>
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="form-group col-sm-12 row mt-4">
                            <label htmlFor="phoneno" className="col-sm-4">Phone Number</label>
                            <input type="tel" name="phoneno" placeholder="Enter Your Phone Number" className="col-sm-8 p-2 border border-primary border-1" id="phoneno"/>
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="form-group col-sm-12 row mt-4">
                            <label htmlFor="address" className="col-sm-4">Address</label>
                            <input type="text" name="address" placeholder="Enter Your Address" className="col-sm-8 p-2 border border-primary border-1" id="address"/>
                        </div>
                    </div>
                    <div className="form-row mt-4"><center><button type="submit" className="btn" id="profileBtn">Update Profile</button></center></div>                     
                </form>
                <div className="col-sm mt-5 side"></div>
            </div>
        </div>
     );
}

export default ProfileForm;