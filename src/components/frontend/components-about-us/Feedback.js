import React from "react";
import feedback from './../../../assets/frontend/images/about/feedback.jpg';
import {BsStarFill} from './../../../../node_modules/react-icons/bs';
import {BsStarHalf} from './../../../../node_modules/react-icons/bs';
import {BsStar} from './../../../../node_modules/react-icons/bs';

const review = {color: '#FFD700'};

function Feedback() {
    return ( 
        <div className="feedback m-3 row">
            <h3 className="text-center">Customers' Feedback </h3>
            <span className="row">
                <div className="card col-sm-2 mb-3 shadow-lg">
                    <img src={feedback} className="card-img-top img-fluid" alt="feedback" />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Anne Mary</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text text-muted"><BsStarFill style={review} /><BsStarFill  style={review} /><BsStarFill  style={review} /><BsStarHalf  style={review} /><BsStar  style={review} /></p>
                    </div>
                </div>
                <div className="card col-sm-2 mb-3 shadow-lg">
                    <img src={feedback} className="card-img-top img-fluid" alt="feedback" />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Anne Mary</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text text-muted"><BsStarFill style={review} /><BsStarFill  style={review} /><BsStarFill  style={review} /><BsStarHalf  style={review} /><BsStar  style={review} /></p>
                    </div>
                </div>
                <div className="card col-sm-2 mb-3 shadow-lg">
                    <img src={feedback} className="card-img-top img-fluid" alt="feedback" />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Anne Mary</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text text-muted"><BsStarFill style={review} /><BsStarFill  style={review} /><BsStarFill  style={review} /><BsStarHalf  style={review} /><BsStar  style={review} /></p>
                    </div>
                </div>
                <div className="card col-sm-2 mb-3 shadow-lg">
                    <img src={feedback} className="card-img-top img-fluid" alt="feedback" />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Anne Mary</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text text-muted"><BsStarFill style={review} /><BsStarFill  style={review} /><BsStarFill  style={review} /><BsStarHalf  style={review} /><BsStar  style={review} /></p>
                    </div>
                </div>
                <div className="card col-sm-2 mb-3 shadow-lg">
                    <img src={feedback} className="card-img-top img-fluid" alt="feedback" />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Anne Mary</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text text-muted"><BsStarFill style={review} /><BsStarFill  style={review} /><BsStarFill  style={review} /><BsStarHalf  style={review} /><BsStar  style={review} /></p>
                    </div>
                </div>
                <div className="card col-sm-2 mb-3 shadow-lg">
                    <img src={feedback} className="card-img-top img-fluid" alt="feedback" />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Anne Mary</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text text-muted"><BsStarFill style={review} /><BsStarFill  style={review} /><BsStarFill  style={review} /><BsStarHalf  style={review} /><BsStar  style={review} /></p>
                    </div>
                </div>
            </span>
        </div>
     );
}

export default Feedback;