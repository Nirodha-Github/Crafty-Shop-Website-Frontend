import React from "react";
import item1 from './../../../assets/frontend/images/about/item1.jpg';
import item2 from './../../../assets/frontend/images/about/item2.jpg';
import item3 from './../../../assets/frontend/images/about/item3.jpg';
import item4 from './../../../assets/frontend/images/about/item4.jpg';
import item5 from './../../../assets/frontend/images/about/item5.jpg';
import item6 from './../../../assets/frontend/images/about/item6.jpg';

function Features() {
    return ( 
        <div className="m-5 bg-white featuresContent">
            <div className="row">
                <div className="col-sm-6">
                    <h5 className="fw-bold letterSpace">What we Realy Do? <hr /></h5>
                    <div className="fw-normal">Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock
                    </div>
                </div>
                <div className="col-sm-6">
                    <h5 className="fw-bold letterSpace">History Of Crafty Shop <hr /></h5>
                    <div className="fw-normal">Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock
                    </div>
                </div>
            </div>
            <div className="row pt-1 justify-content-center">
                <img className="col-sm-1" src={item1} alt="item1" width={"50%"}/>
                <img className="col-sm-1" src={item2} alt="item2" width={"50%"}/>
                <img className="col-sm-1" src={item3} alt="item3" width={"50%"}/>
                <img className="col-sm-1" src={item4} alt="item4" width={"50%"}/>
                <img className="col-sm-1" src={item5} alt="item5" width={"50%"}/>
                <img className="col-sm-1" src={item6} alt="item6" width={"50%"}/>
              
            </div>
            <hr />
        </div>
     );
}

export default Features;