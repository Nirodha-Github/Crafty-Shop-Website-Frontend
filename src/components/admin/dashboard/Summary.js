import React,{useEffect, useState} from "react";
import axios from "axios";
import users from "./../../../assets/admin/assets/dashboard/users.png";
import article from "./../../../assets/admin/assets/dashboard/article.png";
import video from "./../../../assets/admin/assets/dashboard/video.png";
import feedback from "./../../../assets/admin/assets/dashboard/feedback.png";

function Summary() {

    const [loading,setLoading] = useState(true);
    const [countuser,setCountuser] = useState('');
    const [countproduct,setCountproduct] = useState([]);
    const [countcategory,setCountcategory] = useState([]);
    const [countfeedback,setCountfeedback] = useState([]);
    const [countvideo,setCountvideo] = useState([]);
    const [countarticle,setCountarticle] = useState([]);

    useEffect(()=>{
        axios.get('api/view-count').then(res=>{
            if(res.status === 200){
                setCountuser(res.data.users);
                setCountproduct(res.data.product);   
                setCountcategory(res.data.category);   
                setCountfeedback(res.data.feedback);   
                setCountvideo(res.data.video);
                setCountarticle(res.data.article);
            }
            setLoading(false);
        });
    },[]);


    var userCount = "";

    if(loading){
        return (            
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            );
    }

    return ( 
        <div>
            <section className="row justify-content-center mt-2">
                <div className="card card-body col-sm-3 bg-primary text-light">
                    <div className="row">
                        <div className="col-sm-6"><img src={users} width="60px"/></div>
                        <div className="col-sm-6">User<h2>{countuser}</h2></div>
                    </div>
                </div>
                <div className="card card-body col-sm-3 bg-secondary text-light">
                    <div className="row">
                        <div className="col-sm-6"><img src={article} width="80px"/></div>
                        <div className="col-sm-6">Articles<h2>{countarticle}</h2></div>
                    </div>
                </div>
                <div className="card card-body col-sm-3 bg-danger text-light">
                    <div className="row">
                        <div className="col-sm-6"><img src={video} width="60px"/></div>
                        <div className="col-sm-6">Videos<h2>{countvideo}</h2></div>
                    </div>
                </div>
                <div className="card card-body col-sm-3 bg-dark text-light">
                    <div className="row">
                        <div className="col-sm-6"><img src={feedback} width="60px"/></div>
                        <div className="col-sm-6">Feedback<h2>{countfeedback}</h2></div>
                    </div>
                </div>
            </section>
            <section className="row justify-content-center mt-2">
                <div className="card card-body col-sm-4 bg-warning text-light">
                    <div>User<h2>{countuser}</h2></div></div>
                <div className="card card-body col-sm-4 bg-success text-light">
                    <div>Articles<h2>{countarticle}</h2></div></div>
                <div className="card card-body col-sm-4 bg-info text-light">
                    <div>Videos<h2>{countvideo}</h2></div></div></section>
        </div>
     );
}

export default Summary;