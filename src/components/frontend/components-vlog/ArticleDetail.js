import React ,{useEffect,useState} from "react";  
import Header from './../../../layouts/frontend/Header';
import Navbar from './../../../layouts/frontend/Navbar';
import Footer from './../../../layouts/frontend/Footer';
import axios from 'axios';

function ArticleDetail(props) {
    const [loading,setLoading] = useState(true);
    const [article,setArticle] = useState([]);

    useEffect(()=>{
        let isMounted = true;
        const id = props.match.params.id;

        axios.get(`api/view-single-article/${id}`).then(res=>{                
            if(res.data.status === 200){
                setArticle(res.data.article); 
                setLoading(false);
            }            
            
        });
        
    },[props.match.params.id]);

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
        var showArticle = "";

        showArticle = article.map((item) =>{
            return (
                <div className="col-sm-12 m-2" key={item.id}>
                    <h3>{item.title}</h3> 
                    <p>{item.created_at}</p>
                    <img src={`http://localhost:8000/${item.coverimage}`}/>
                    <div>{item.article_body}</div>                 
                </div>             
            )
        });
    }
    return ( 
        <div>
            <section className="m-0 p-0"><Header /></section>
            <section className="m-0 p-0"><Navbar /></section>
            <section className="m-5 row">
                    <h3>Articles</h3>
                    <div className="row">{showArticle}</div>
            </section>
            <section className="m-0 p-0 footerContainer"><Footer /></section>
        </div>
     );
}

export default ArticleDetail;