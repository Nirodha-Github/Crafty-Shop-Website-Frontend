import React,{useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function AddCategory() {

    const [categoryInput,setCategory] =useState({
       slug:'', 
       name:'', 
       description:'', 
       status:0, 
       meta_title:'', 
       meta_keyword:'', 
       meta_description:'', 
       error_list:[],
    });

    const [categoryImage,setCategoryImage] =useState([]);

    const handleImage = (e) =>{
        e.persist();
        setCategoryImage({cimage:e.target.files[0]})
    }

    const handleInput = (e) =>{
        e.persist();
        setCategory({...categoryInput,[e.target.name]:e.target.value})
    }

    const submitCategory = (e) =>{
        e.preventDefault();

        const formData = new FormData();

        formData.append('cimage',categoryImage.cimage);
        formData.append('slug',categoryInput.slug);
        formData.append('name',categoryInput.name);
        formData.append('description',categoryInput.description);

        formData.append('meta_title',categoryInput.meta_title);
        formData.append('meta_keyword',categoryInput.meta_keyword);
        formData.append('meta_description',categoryInput.meta_description);
        
        formData.append('status',categoryInput.status);

        axios.post('/api/store-category', formData).then(res=>{
            if(res.data.status === 200){
                swal("Success",res.data.message,"success");
                document.getElementById('category').reset();
            }
            else if(res.data.status === 422){
                setCategory({...categoryInput,error_list:res.data.errors});
            }
        });
    }

    var display_errors =[];
    if(categoryInput.error_list){
        display_errors =[
            categoryInput.error_list.slug,
            categoryInput.error_list.name,
            categoryInput.error_list.meta_title,
            categoryInput.error_list.cimage,
        ]
    }

    return ( 
        <div className="container-fluid px-4">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Add Product Categories
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Add Product Categories</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-3">    
                {                         
                            display_errors.map((item,idx) => {
                            return (<p className="text-danger" key={idx}>{item}</p>)
                            })
                        }
                        <form onSubmit={submitCategory} id="category">
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
                                        <span className="row text-danger">{categoryInput.error_list.slug}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Name</label>
                                        <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control" />
                                        <span className="row text-danger">{categoryInput.error_list.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Description</label>
                                        <textarea name="description" onChange={handleInput} value={categoryInput.description} className="form-control"></textarea>
                                    </div>
                                    <div className="col-md-12 form-group mb-3">
                                            <label>Image</label>
                                            <input type="file"  name="cimage" onChange={handleImage} className="form-control" />
                                            <span className="row text-danger">{categoryInput.error_list.cimage}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Status</label>
                                        <input type="checkbox" name="status" onChange={handleInput} value={categoryInput.status} className="p-1 m-1" /><br /><small>Status 0 = shown / 1 = hidden</small>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
                                    <div className="form-group mb-3">
                                        <label>Meta Title</label>
                                        <input type="text" name="meta_title" onChange={handleInput} value={categoryInput.meta_title} className="form-control" />
                                        <span className="row text-danger">{categoryInput.error_list.meta_title}</span>
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
                            <button type="submit" className="btn btn-primary px-4 float-end">Add+</button>  
                        </form>
                </div>
                </div>
            </div>
            </div>
            
        </div>
     );
}

export default AddCategory;