import React,{useEffect,useState} from "react";
import {Link,useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import Header from './../../../layouts/frontend/Header';
import Navbar from './../../../layouts/frontend/Navbar';
import Footer from './../../../layouts/frontend/Footer';

function ProductDetail(props) {

    const [loading,setLoading] = useState(true);
    const history = useHistory();
    const [product,setProduct] = useState([]);
    const [quantity,setQuantity] = useState(1);

    useEffect(()=>{
        let isMounted = true;
        const category_slug = props.match.params.category;
        const product_slug = props.match.params.product;

        axios.get(`api/viewproductdetail/${category_slug}/${product_slug}`).then(res=>{
            if(isMounted){           
                if(res.data.status === 200){
                    setProduct(res.data.product);
                    setLoading(false);
                    
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
    },[props.match.params.category,props.match.params.product,history]);

    const handleDecrement  = () =>{
        if(quantity > 1){
            setQuantity(prevCount  => prevCount-1 );
        } 
       
    }
    
    const handleIncrement  = () =>{
        if(quantity < 10){
            setQuantity(prevCount  => prevCount+1 );
        } 
    }

    const submitAddToCart = (e) =>{
        e.preventDefault();

        const data = {
            product_id:product.id,
            product_qty: quantity,
        }

        axios.post('/api/add-to-cart', data).then(res=> {
            if(res.data.status === 201){
                swal("Success", res.data.message, "success");
            }else if(res.data.status === 409){
                swal("Warning", res.data.message, "warning");
            }else if(res.data.status === 401){
                swal("Error", res.data.message, "error");
            }else if(res.data.status === 404){
                swal("Warning", res.data.message, "Warning");
            }
        });
    }

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
        var available_stock = "";

        if(product.qty > 0){
            available_stock = <div>
                <label className="btn-sm btn-success mt-2">In Stock</label>
                    <div className="row">
                        <div className="col-sm-3 mt-3">
                            <div className="input-group">
                                <button type="button" onClick={handleDecrement} className="input-group-text">-</button>
                                <div className="form-control text-center" >{quantity}</div>
                                <button type="button" onClick={handleIncrement} className="input-group-text">+</button>
                            </div>
                        </div>
                        <div className="col-sm-3 mt-3">
                            <button type="button" className="btn btn-primary w-100" onClick={submitAddToCart}>Add to Cart</button>
                        </div>
                    </div>
            </div>
        }
        else{
             available_stock = <div>
                <label className="btn-sm btn-success mt-2">Out of Stock</label>
            </div>
        }
            
    }
    
    return ( 
        <div>
            <section className="m-0 p-0"><Header /></section>
            <section className="m-0 p-0"><Navbar /></section>
            <section className="singleProductContainer m-0 p-0"> 
                <div className="py-3 container">
                    <div className="row bg-light p-3">
                        <h5 className="col-sm-10">Collections / {product.category.name} / {product.name}</h5>
                        <Link to="/products" className="btn btn-secondary col-sm-2">Back</Link>
                    </div>
                </div>
                <div className="container">                         
                    <div className="row singleProductCard p-3">
                        <div className="col-sm-4">
                            <img src={`http://localhost:8000/${product.pimage}`} alt={product.name} className="w-100"/>
                        </div>
                        <div className="col-sm-8">
                            <h4>{product.name}</h4><hr/>
                            <p>{product.description}</p>
                            <h4 className="mb-1">Rs: {product.selling_price}&nbsp;&nbsp;&nbsp;   
                            <s>Rs: {product.original_price}</s></h4>
                            <div>
                                {available_stock}
                            </div>
                            <button type="button" className="btn btn-danger mt-3">Add to Whishlist</button>
                        </div>

                    </div>
                </div>  
            </section>
            <section className="m-0 p-0 footerContainer"><Footer /></section>
        </div>
     );
}

export default ProductDetail;