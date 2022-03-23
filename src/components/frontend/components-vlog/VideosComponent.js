import React ,{useEffect,useState} from "react";
import {Link,useHistory } from "react-router-dom";
import axios from 'axios';

function VideosComponent() {
    const [loading,setLoading] = useState(true);
    const [video,setVideo] = useState([]);

    useEffect(()=>{
        let isMounted = true;

        axios.get('api/view-video').then(res=>{
            if(isMounted){           
                if(res.data.status === 200){
                    setVideo(res.data.video);
                    setLoading(false);
                }            
            }
        });
        
        return ()=>{
            isMounted = false;
        }
    },[]);

    if(loading){
        return (            
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            );
    }
    else{
        var showVideoList = "";

        showVideoList = video.map((item) =>{
            return (
                <div className="col-sm-12 m-2" key={item.id}>
                    <div className="card row">
                        <div className="card-body col-sm-5">
                        <video controls><source src={item.video_link} type="video/mp4"/></video>         
                        </div>       
                            <div className="card-footer col-sm-7">
                                <h5 className="text-dark">{item.title}</h5>   
                                <p>{item.description}</p>   
                                <div><p>{item.created_date}</p><span class="badge bg-secondary">{item.meta_keyword}</span></div>                                        
                            </div> 
                    </div>             
                </div>             
            )
        });
    }
    return ( 
        <div className="m-5 row">
                <h3>Videos</h3>
                <div className="row">{showVideoList}</div>
        </div>
     );
}

export default VideosComponent;