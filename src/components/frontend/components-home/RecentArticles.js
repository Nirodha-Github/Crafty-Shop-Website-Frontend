import React ,{useEffect,useState} from "react";
import axios from 'axios';

function RecentArticle() {

    const [loading,setLoading] = useState(true);
    const [recentArticle,setRecentArticle] = useState([]);

    useEffect(()=>{
        let isMounted = true;

        axios.get('api/view-recent-article').then(res=>{
            if(isMounted){           
                if(res.data.status === 200){
                    setRecentArticle(res.data.article);
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
        var showRecentArticleList = "";
        showRecentArticleList = recentArticle.map((item) =>{
            return (
                <div className="col-sm" key={item.id}>
                    <div className="card recentArticleCard">
                    <div className="card-body">
                        <img src={`http://localhost:8000/${item.coverimage}`} className="w-100" height="250px" />
                        
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
            <h3 className="text-center">Recent Articles</h3>
            <div className="row mb-3">{showRecentArticleList}</div>
        </div>
     );
}

export default RecentArticle;