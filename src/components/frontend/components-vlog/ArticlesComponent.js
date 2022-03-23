import React ,{useEffect,useState} from "react";
import {Link,useHistory } from "react-router-dom";
import axios from 'axios';

function ArticlesComponent() {
    const [loading,setLoading] = useState(true);
    const [article,setArticle] = useState([]);

    useEffect(()=>{
        let isMounted = true;

        axios.get('api/view-article').then(res=>{
            if(isMounted){           
                if(res.data.status === 200){
                    setArticle(res.data.article);
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
        var showArticleList = "";

        showArticleList = article.map((item) =>{
            return (
                <div className="col-sm-12 m-2" key={item.id}>
                    <div className="card articleCard row">
                        <div className="card-body col-sm-5">
                            <img src={`http://localhost:8000/${item.coverimage}`} className="w-100" height="150"/>             
                        </div>
                        <Link to={`/vlog/articles/${item.id}/${item.slug}`}>
                            <div className="card-footer col-sm-7">
                                <h5 className="text-dark">{item.title}</h5>   
                                <p>{item.description}</p>   
                                <div><p>{item.created_date}</p><span class="badge bg-secondary">{item.meta_keyword}</span></div>                                        
                            </div> 
                        </Link>
                    </div>             
                </div>             
            )
        });
    }
    return ( 
        <div className="m-5 row">
                <h3>Articles</h3>
                <div className="row">{showArticleList}</div>
        </div>
     );
}

export default ArticlesComponent;