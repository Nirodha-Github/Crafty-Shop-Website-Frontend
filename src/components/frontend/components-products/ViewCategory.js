import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
//import swal from "sweetalert";

function ViewCategory () {

    const [loading,setLoading] = useState(true);
    const [category,setCategory] = useState([]);

    useEffect(()=>{
        let isMounted = true;

        axios.get('api/getCategory').then(res=>{
            if(isMounted){           
                if(res.data.status === 200){
                    setCategory(res.data.category);
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
        var showCategoryList = "";
        showCategoryList = category.map((item) =>{
            return (
                <div className="col-sm-3" key={item.id}>
                    <div className="card categoryCard">
                        <img src={`http://localhost:8000/${item.cimage}`} className="w-100"/>
                        <div className="card-body">
                            <Link to={`products/category/${item.slug}`} className="btn" id="categoryBtn" role="button"><h5 className="text-light">{item.name}</h5></Link>                                                       
                        </div> 
                    </div>  
                </div>             
            )
        });
    }

    return ( 
        <div className="row p-0 m-0">          
            <h3>Product Categories</h3>
            <div className="row">
                {showCategoryList}
            </div>
        </div>

     );
}

export default ViewCategory ;