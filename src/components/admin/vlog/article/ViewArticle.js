import React,{useEffect,useState} from "react";
import axios from "axios";
import swal from 'sweetalert';
import { Link } from "react-router-dom";

function ViewArticle() {

    const [loading,setLoading] = useState(true);
    const [articlelist,setArticlelist] = useState([]);

    useEffect(()=>{

        document.title = "Articles - Dashboard";
        
        axios.get('api/view-article').then(res=>{
            if(res.status === 200){
                setArticlelist(res.data.article);
                               
            }
            setLoading(false);
        });
    },[]);

    const deleteArticle = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;

        swal({
            Title:"Confirmation",
            text: "Confirm to Delete Article",
            buttons: {           
                confirm: {
                    text: "Confirm",
                    value: true,
                },
                cancel:"Cancel",
            },
            icon: "info",
          }).then((value) => {
            if(value === true){
                        
                thisClicked.innerText = "Deleting...";

                axios.delete(`api/delete-article/${id}`).then(res =>{
                    if(res.data.status === 200){
                        swal("Success",res.data.message,"success");
                        thisClicked.closest("tr").remove();
                    }
                    else if(res.data.status === 404){
                        swal("Error","","error");
                        thisClicked.innerText = "Delete";
                    }
                });
        }
    });
}

    var viewArticleTable = "";
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

        var ArticleStatus = "";
        if(articlelist){
            viewArticleTable = articlelist.map((item) =>{
                if(item.status === 0){
                    ArticleStatus = "shown";
                }
                else if(item.status === 1){
                    ArticleStatus = "hidden";
                }
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td><img src={`http://localhost:8000/${item.coverimage}`} alt={item.coverimage} width="50px"/></td>
                        <td>{item.slug}</td>
                        <td>{item.article_body}</td>
                        <td>{item.description}</td>
                        <td>{ArticleStatus}</td>
                        <td><Link to={`manage-articles/${item.id}`} className="btn btn-success btn-sm">Edit</Link></td>
                        <td><button type="button" onClick={(e) => deleteArticle(e, item.id)} className="btn btn-danger btn-sm">Delete</button></td>                      
                    </tr>
                )
            });
        }



        
    }

    

    return ( 
        <div className="container p-3 m-3">
            <div className="card">
                <table className="table card-body table-bordered table-striped">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Title</th>
                        <th>Article</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewArticleTable}
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default ViewArticle;