import React ,{useEffect,useState} from "react";
import axios from 'axios';


function RecentVideos() {

    const [loading,setLoading] = useState(true);
    const [recentVideos,setRecentVideos] = useState([]);

    useEffect(()=>{
        let isMounted = true;

        axios.get('api/view-recent-video').then(res=>{
            if(isMounted){           
                if(res.data.status === 200){
                    setRecentVideos(res.data.video);
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
        var showRecentVideosList = "";
        showRecentVideosList = recentVideos.map((item) =>{
            return (
                <div className="col-sm" key={item.id}>
                    <div className="card recentVideosCard">
                    <div className="card-body">
                        <video controls><source src={item.video_link} /></video>
                    </div>
                        <div className="card-footer">
                            <h5 className="text-dark">{item.title}</h5>                                              
                        </div> 
                    </div>  
                </div>             
            )
        });
    }
    return ( 
        <div className="m-3 row">
            <h3 className="text-center">Recent Videos</h3>
            <div className="row mb-3">{showRecentVideosList}</div>
        </div>
     );
}

export default RecentVideos;