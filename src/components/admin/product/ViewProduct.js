import React,{useEffect, useState} from "react";
import './../../../../node_modules/@google/model-viewer';
import axios from "axios";
import {Link} from "react-router-dom";

function ViewProduct() {
    
    const [loading,setLoading] = useState(true);
    const [productlist,setProductlist] = useState([]);

    useEffect(()=>{

        document.title = "Products - Dashboard";
        
        axios.get('api/view-product').then(res=>{
            if(res.status === 200){
                setProductlist(res.data.product);
                               
            }
            setLoading(false);
        });
    },[]);


    var viewProductTable = "";
    if(loading){
        return (            
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            );
    }
    else{

        var ProductStatus = "";
        viewProductTable = productlist.map((item) =>{
            if(item.status === 0){
                ProductStatus = "shown";
            }
            else if(item.status === 1){
                ProductStatus = "hidden";
            }
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.category.name}</td>
                    <td>{item.name}</td>
                    <td>{item.selling_price}</td>
                    {/* <td><model-viewer bounds="tight" src={`http://localhost:8000/${item.pimage}`} poster="poster.webp" ar ar-modes="webxr scene-viewer quick-look" 
                    camera-controls environment-image="neutral" shadow-intensity="1" camera-orbit="-7.313deg 27.56deg auto" width="60px" className="model"></model-viewer></td> */}
                    <td><Link to={`products/${item.id}`} className="btn btn-success btn-sm">Edit</Link></td>
                    <td>{ProductStatus}</td>
                </tr>
            )
        });
    }

    

    return ( 
        <div className="container p-3 m-3">
            <div className="card">
                <table className="table card-body table-bordered table-striped">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Category Name</th>
                        <th>Name</th>
                        <th>Selling Price</th>
                        {/* <th>Image</th> */}
                        <th>Edit</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewProductTable}
                        
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default ViewProduct;