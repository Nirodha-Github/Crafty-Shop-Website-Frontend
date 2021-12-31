import React,{useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory,Link } from "react-router-dom";

function EditCategory(props) {
 
    const [loading,setLoading] = useState(true);
    const history = useHistory();
    const [categoryInput,setCategory] = useState([]);
    const [error,setError] = useState([]);
    const [checkboxInput, setCheckbox] = useState([]);

    useEffect(() =>{
        const category_id = props.match.params.id;
        axios.get(`api/edit-category/${category_id}`).then(res=> {
            
            if(res.data.status === 200){
                setCategory(res.data.category);
                setCheckbox(res.data.category);
            }
            else if(res.data.status === 404){
                swal("Error",res.data.message,"error");
                history.push('/admin/product-categories')
            }
            setLoading(false);
        });
    }, [props.match.params.id,history]);

    const handleInput = (e) =>{
        e.persist();
        setCategory({...categoryInput,[e.target.name]:e.target.value})
    }

    const handleCheckbox = (e) =>{
        e.persist();
        setCheckbox({...checkboxInput,[e.target.name]:e.target.checked});
    }

    const updateCategory = (e) => {
        e.preventDefault();
        swal({
            Title:"Confirmation",
            text: "Confirm to Update Categories Data",
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
                const category_id = props.match.params.id;
                const data = categoryInput;
                axios.put(`/api/update-category/${category_id}`, data).then(res=>{
                    if(res.data.status === 200){
                        swal("Success",res.data.message,"success");
                        console.log(checkboxInput);
                        setError([]);
                    }
                    else if(res.data.status === 422){
                        swal("All field Should Be Completed","","error");
                        setError(res.data.errors);
                    
                    }
                    else if(res.data.status === 404){
                        swal("Error",res.data.message,"error");
                        history.push("admin/product-categories");
                    }
                });
                    }
                });
        }
    

    if(loading){
        return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            );
    }
  

    return ( 
        <div className="container-fluid px-4">
            <h5 className="fw-bold">Edit Product Category
                <Link to="/admin/product-categories" className="btn btn-secondary btn-sm float-end">Back</Link>
            <hr /></h5>
            <form onSubmit={updateCategory} id="category-form">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                        <button className="nav-link" id="seo-tags-tab" data-bs-toggle="tab" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="seo-tags" aria-selected="false">SEO Tags</button>
                    </div>
                </nav>
                <div className="tab-content mt-3" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="form-group mb-3">
                            <label>Slug</label>
                            <input type="text" name="slug" onChange={handleInput} value={categoryInput.slug} className="form-control" />                          
                            <small className="row text-danger">{error.slug}</small>
                        </div>
                        <div className="form-group mb-3">
                            <label>Name</label>
                            <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control" />
                            <small className="row text-danger">{error.name}</small>
                        </div>
                        <div className="form-group mb-3">
                            <label>Description</label>
                            <textarea name="description" onChange={handleInput} value={categoryInput.description} className="form-control"></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <label>Status</label>
                            <input type="checkbox" name="status" onChange={handleCheckbox} defaultChecked={checkboxInput.status === 1 ? true:false} className="p-1 m-1" /><br /><small>Status 0 = shown / 1 = hidden</small>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
                        <div className="form-group mb-3">
                            <label>Meta Title</label>
                            <input type="text" name="meta_title" onChange={handleInput} value={categoryInput.meta_title} className="form-control" />
                            <small className="row text-danger">{error.meta_title}</small>
                        </div>
                        <div className="form-group mb-3">
                            <label>Meta Keyword</label>
                            <textarea name="meta_keyword" onChange={handleInput} value={categoryInput.meta_keyword} className="form-control"></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <label>Meta Description</label>
                            <textarea name="meta_description" onChange={handleInput} value={categoryInput.meta_description} className="form-control"></textarea>
                        </div>
                    </div>
                </div>  
                <button type="submit" id="updateBtn" className="btn btn-success px-4 float-end">Update</button>  
            </form>
                </div>

     );
}

export default EditCategory;