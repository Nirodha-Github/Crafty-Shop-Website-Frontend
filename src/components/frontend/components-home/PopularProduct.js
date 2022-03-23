import React ,{useEffect,useState} from "react";
import {Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';

function PopularProduct() {

    const [loading,setLoading] = useState(true);
    const [popularProduct,setPopularProduct] = useState([]);

    useEffect(()=>{
        let isMounted = true;

        axios.get('api/view-popular-product').then(res=>{
            if(isMounted){           
                if(res.data.status === 200){
                    setPopularProduct(res.data.product);
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
        var showPopularProductList = "";
        showPopularProductList = popularProduct.map((item) =>{
            return (
                <div className="col-sm" key={item.id}>
                    <div className="card popularProductCard">
                    <div className="card-body">
                        <img src={`http://localhost:8000/${item.pimage}`} className="w-100"/>
                    </div>
                        <div className="card-footer">
                            <h5 className="text-dark">{item.name}</h5>                                                
                        </div> 
                    </div>  
                </div>             
            )
        });
    }
    return ( 
        <div className="m-3 row">
            <h3 className="text-center">Popular Products</h3>
            <div className="row mb-3">{showPopularProductList}</div>
        </div>
     );
}

export default PopularProduct;