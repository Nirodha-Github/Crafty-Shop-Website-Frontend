import React,{useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import {Link} from "react-router-dom";

function ViewCategory() {

    const [loading,setLoading] = useState(true);
    const [categorylist,setCategorylist] = useState([]);

    useEffect(()=>{
        document.title = "Product Categories - Dashboard";
        axios.get('api/view-category').then(res=>{
            if(res.status === 200){
                setCategorylist(res.data.category);
            }
            setLoading(false);
        });
    },[]);

    const deleteCategory = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;

        swal({
            Title:"Confirmation",
            text: "Confirm to Delete Categories Data",
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

                axios.delete(`api/delete-category/${id}`).then(res =>{
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

    var viewCategoryTable = "";
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
        viewCategoryTable = categorylist.map((item) =>{
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.slug}</td>
                    <td>{item.description}</td>
                    <td>{item.status}</td>
                    <td><Link to={`product-categories/${item.id}`} className="btn btn-success btn-sm">Edit</Link></td>
                    <td><button type="button" onClick={(e) => deleteCategory(e, item.id)} className="btn btn-danger btn-sm">Delete</button></td>
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
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {viewCategoryTable}
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default ViewCategory;