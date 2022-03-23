import React,{useState,useEffect} from "react";
import axios from "axios";
import swal from "sweetalert";

function AddProduct() {

    const [categorylist,setCategorylist] =useState([]);
    const [productInput,setProductInput] =useState({
        category_id:'',
        slug:'', 
        name:'', 
        description:'', 

        meta_title:'', 
        meta_keyword:'', 
        meta_description:'', 

        selling_price:'',
        original_price:'',
        qty:'',
        featured:0,
        popular:0,
        status:0, 
        error_list:[],
        
    });

    const [productImage,setProductImage] =useState([]);
    

    const handleInput = (e) =>{
        e.persist();
        setProductInput({...productInput,[e.target.name]:e.target.value})
    }

    const handleImage = (e) =>{
        e.persist();
        setProductImage({pimage:e.target.files[0]})
    }

    useEffect(()=>{
        axios.get(`api/all-category`).then(res =>{
            if(res.data.status === 200){
                setCategorylist(res.data.category);
            }
        });
    },[]);

    

    const submitProduct = (e) =>{
        e.preventDefault();

        const formData = new FormData();

        formData.append('pimage',productImage.pimage);
        formData.append('category_id',productInput.category_id);
        formData.append('slug',productInput.slug);
        formData.append('name',productInput.name);
        formData.append('description',productInput.description);

        formData.append('meta_title',productInput.meta_title);
        formData.append('meta_keyword',productInput.meta_keyword);
        formData.append('meta_description',productInput.meta_description);
        
        formData.append('selling_price',productInput.selling_price);
        formData.append('original_price',productInput.original_price);
        formData.append('qty',productInput.qty);
        formData.append('featured',productInput.featured);
        formData.append('popular',productInput.popular);
        formData.append('status',productInput.status);

        axios.post('/api/store-product', formData).then(res=>{
            if(res.data.status === 200){
                swal("Success",res.data.message,"success")
                .then(document.getElementById('product-form').reset());
                
            }
            else if(res.data.status === 422){
                swal("All fields should be completed","","error");
                setProductInput({...productInput,error_list:res.data.errors});
            }
        });
    }

    var display_errors =[];
    if(productInput.error_list){
        display_errors =[
            productInput.error_list.category_id,
            productInput.error_list.slug,
            productInput.error_list.name,
            productInput.error_list.meta_title,
            productInput.error_list.selling_price,
            productInput.error_list.original_price,
            productInput.error_list.qty,
            productInput.error_list.pimage,
        ]
    }

    return ( 
        <div className="container-fluid px-4">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Add Products
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Add Products</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-3">    
                        {                         
                            display_errors.map((item,id) => {
                                return (<p className="text-danger" key={id}>{item}</p>)
                            })
                        }
                        <form onSubmit={submitProduct} id="product-form" encType="multipart/form-data">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                                    <button className="nav-link" id="seo-tags-tab" data-bs-toggle="tab" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="seo-tags" aria-selected="false">SEO Tags</button>
                                    <button className="nav-link" id="other-details-tab" data-bs-toggle="tab" data-bs-target="#other-details" type="button" role="tab" aria-controls="other-details" aria-selected="false">Other Details</button>
                                </div>
                            </nav>
                            <div className="tab-content mt-3" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="form-group mb-3">
                                        <label>Select Category</label>
                                        <select className="form-control custom-select" name="category_id" onChange={handleInput} value={productInput.category_id}  >
                                            <option defaultValue>Choose...</option>
                                            {
                                                categorylist.map((item)=>{
                                                    return (
                                                        <option key={item.id} value={item.id}>{item.name}</option>
                                                    )
                                                })

                                            }
                                        </select>
                                        <small className="text-danger">{productInput.error_list.category_id}</small>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Slug</label>
                                        <input type="text" name="slug" onChange={handleInput} value={productInput.slug} className="form-control" />
                                        <span className="row text-danger">{productInput.error_list.slug}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Name</label>
                                        <input type="text" name="name" onChange={handleInput} value={productInput.name} className="form-control" />
                                        <span className="row text-danger">{productInput.error_list.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Description</label>
                                        <textarea name="description" onChange={handleInput} value={productInput.description} className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
                                    <div className="form-group mb-3">
                                        <label>Meta Title</label>
                                        <input type="text" name="meta_title" onChange={handleInput} value={productInput.meta_title} className="form-control" />
                                        <span className="row text-danger">{productInput.error_list.meta_title}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Meta Keyword</label>
                                        <textarea name="meta_keyword" onChange={handleInput} value={productInput.meta_keyword} className="form-control"></textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Meta Description</label>
                                        <textarea name="meta_description" onChange={handleInput} value={productInput.meta_description} className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="other-details" role="tabpanel" aria-labelledby="other-details-tab">
                                    <div className="row">
                                        <div className="col-md-4 form-group mb-3">
                                            <label>Selling Price</label>
                                            <input type="text" name="selling_price" onChange={handleInput} value={productInput.selling_price} className="form-control" />
                                            <span className="row text-danger">{productInput.error_list.selling_price}</span>
                                        </div>
                                        <div className="col-md-4 form-group mb-3">
                                            <label>Original Price</label>
                                            <input type="text" name="original_price" onChange={handleInput} value={productInput.original_price} className="form-control" />
                                            <span className="row text-danger">{productInput.error_list.original_price}</span>
                                        </div>
                                        <div className="col-md-4 form-group mb-3">
                                            <label>Quantity</label>
                                            <input type="text" name="qty" onChange={handleInput} value={productInput.qty} className="form-control" />
                                            <span className="row text-danger">{productInput.error_list.qty}</span>
                                        </div>
                                        <div className="col-md-12 form-group mb-3">
                                            <label>Image</label>
                                            <input type="file"  name="pimage" onChange={handleImage} className="form-control" />
                                            <span className="row text-danger">{productInput.error_list.pimage}</span>
                                        </div>
                                        <div className="col-md-4 form-group mb-3">
                                            <label className="mr-2">Featured </label>
                                            <input type="checkbox" name="featured" onChange={handleInput} value={productInput.featured} className="w-50 h-50" />
                                            <small>(checked = shown)</small>
                                        </div>
                                        <div className="col-md-4 form-group mb-3">
                                            <label className="mr-2">Popular </label>
                                            <input type="checkbox" name="popular" onChange={handleInput} value={productInput.popular} className="w-50 h-50" />
                                            <small>(checked = shown)</small>
                                        </div>
                                        <div className="col-md-4 form-group mb-3">
                                            <label>Status </label>
                                            <input type="checkbox" name="status" onChange={handleInput} value={productInput.status} className="w-50 h-50" />
                                            <small>(checked = hidden)</small>
                                        </div>
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

export default AddProduct;