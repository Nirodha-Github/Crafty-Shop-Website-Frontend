import React, { useEffect,useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory,Link } from "react-router-dom";
import Header from './../../../layouts/frontend/Header';
import Navbar from './../../../layouts/frontend/Navbar';
import Footer from './../../../layouts/frontend/Footer';

function ViewProduct(props) {

    const [loading,setLoading] = useState(true);
    const history = useHistory();
    const [product,setProduct] = useState([]);
    const [category,setCategory] = useState([]);
    const productCount = product.length;

    useEffect(()=>{
        let isMounted = true;
        const product_slug = props.match.params.slug;

        axios.get(`api/fetchproducts/${product_slug}`).then(res=>{
            if(isMounted){           
                if(res.data.status === 200){
                    setProduct(res.data.product_data.product);
                    setCategory(res.data.product_data.category);
                    setLoading(false);
                }  
                else if(res.data.status === 400){
                    swal('Warning',res.data.message,"");
                }
               else if(res.data.status === 404){
                    history.push('/products');
                    swal('Error',res.data.message,"error");
                 }               
            }
           
        });
        
        return ()=>{
            isMounted = false;
        }
    },[props.match.params.slug,history]);

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
        var showProductList = '';

        if(productCount){
            showProductList = product.map((item)=>{
                return (
                    <div className="col-sm-3" key={item.id}>
                        <div className="card card-body productCard">                   
                            <img src={`http://localhost:8000/${item.pimage}`} className="w-100" alt={item.name} />
                            
                            <Link className="btn mt-2" id="moreBtn" to={`/products/category/${item.category.slug}/${item.slug}`}>
                                <h5 className="text-light">{item.name}</h5>
                            </Link>
                        </div>
                    </div>
                )
            })
    }
    else{
        showProductList = 
            <div className="col-sm-3">
                <h4>No Product Available For {category.name}</h4>
            </div>
    }
    }

    return ( 
        <div>
            <section className="m-0 p-0"><Header /></section>
            <section className="m-0 p-0"><Navbar /></section>
            <section className="container mt-5 mb-5">          
                <span className="row p-3 bg-light"><h5 className="col-sm-10">Product Categories/ {category.name}</h5>
                <Link to="/products" className="btn btn-secondary col-sm-2">Back</Link></span>
                <div className="row mt-3 mb-3">
                    {showProductList}
                </div>
            </section>
            <section className="m-0 p-0 footerContainer"><Footer /></section>
        </div>
     );
}

export default ViewProduct;