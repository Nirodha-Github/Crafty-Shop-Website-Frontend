import React,{useState,useEffect} from "react";
import { useHistory,Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function EditProduct(props) {

    const [categorylist,setCategorylist] = useState([]);
    const [loading,setLoading] = useState(true);
    const history = useHistory();

    const [productInput,setProductInput] = useState([]);

    const [productImage,setProductImage] = useState([]);
    const [error,setError] = useState([]);

    const handleInput = (e) =>{
        e.persist();
        setProductInput({...productInput,[e.target.name]:e.target.value})
    }

    const handleImage = (e) =>{
        e.persist();
        setProductImage({pimage:e.target.files[0]})
    }
    
    const [allcheckbox, setCheckboxes] = useState([]);

    const handleCheckbox = (e) =>{
        e.persist();
        setCheckboxes({...allcheckbox,[e.target.name]:e.target.checked});
    }

    useEffect(()=>{
        axios.get(`api/all-category`).then(res =>{
            if(res.data.status === 200){
                setCategorylist(res.data.category);
            }
        });

        const product_id = props.match.params.id;

        axios.get(`/api/edit-product/${product_id}`).then(res=>{
            if(res.data.status === 200){
                setProductInput(res.data.product);
                setCheckboxes(res.data.product);
            }
            else if(res.data.status === 404){
                swal("Error",res.data.message,"error");
                history.push("/admin/products");
            }
            setLoading(false);
        });

    },[props.match.params.id,history]);

    

    const updateProduct = (e) =>{
        e.preventDefault();
        swal({
            Title:"Confirmation",
            text: "Confirm to Update Products Data",
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
                const product_id = props.match.params.id;
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
                formData.append('featured',allcheckbox.featured ? '1':'0');
                formData.append('popular',allcheckbox.popular ? '1':'0');
                formData.append('status',allcheckbox.status ? '1':'0');

                axios.post(`/api/update-product/${product_id}`, formData).then(res=>{
                    if(res.data.status === 200){
                        swal("Success",res.data.message,"success");
                        setError([]);
                        
                    }
                    else if(res.data.status === 422){
                        swal("All fields should be completed","","error");
                        setError(res.data.errors);
                    }
                    else if(res.data.status === 404){
                        swal("Error",res.data.message,"error");
                        history.push("/admin/products");
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
            <h5 className="fw-bold">Edit Products
                <Link to="/admin/products" className="btn btn-secondary btn-sm float-end">Back</Link>
            <hr /></h5>
            <form onSubmit={updateProduct} id="product-form" encType="multipart/form-data">
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
                            <small className="text-danger">{error.category_id}</small>
                        </div>
                        <div className="form-group mb-3">
                            <label>Slug</label>
                            <input type="text" name="slug" onChange={handleInput} value={productInput.slug} className="form-control" />
                            <small className="text-danger">{error.slug}</small>
                        </div>
                        <div className="form-group mb-3">
                            <label>Name</label>
                            <input type="text" name="name" onChange={handleInput} value={productInput.name} className="form-control" />
                            <small className="text-danger">{error.name}</small>
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
                            <small className="text-danger">{error.meta_title}</small>
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
                                <small className="text-danger">{error.selling_price}</small>
                            </div>
                            <div className="col-md-4 form-group mb-3">
                                <label>Original Price</label>
                                <input type="text" name="original_price" onChange={handleInput} value={productInput.original_price} className="form-control" />
                                <small className="text-danger">{error.original_price}</small>
                            </div>
                            <div className="col-md-4 form-group mb-3">
                                <label>Quantity</label>
                                <input type="text" name="qty" onChange={handleInput} value={productInput.qty} className="form-control" />
                                <small className="text-danger">{error.qty}</small>
                            </div>
                            <div className="col-md-12 form-group mb-3">
                                <label>Image</label>
                                <span className="row">
                                    <input type="file"  name="pimage" onChange={handleImage} className="form-control col-sm-10" />
                                    <img src={`http://localhost:8000/${productInput.pimage}`} alt={productInput.pimage} width="50px" className="col-sm-2"/>
                                </span>
                                <small className="text-danger">{error.pimage}</small>
                            </div>
                            <div className="col-md-4 form-group mb-3">
                                <label className="mr-2">Featured (checked = shown) </label>
                                <input type="checkbox" name="featured" onChange={handleCheckbox} defaultChecked={allcheckbox.featured === 1 ? true:false} className="w-50 h-50" />                               
                            </div>
                            <div className="col-md-4 form-group mb-3">
                                <label className="mr-2">Popular (checked = shown)</label>
                                <input type="checkbox" name="popular" onChange={handleCheckbox} defaultChecked={allcheckbox.popular === 1 ? true:false} className="w-50 h-50" />
                            </div>
                            <div className="col-md-4 form-group mb-3">
                                <label>Status (checked = hidden)</label>
                                <input type="checkbox" name="status" onChange={handleCheckbox} defaultChecked={allcheckbox.status === 1 ? true:false} className="w-50 h-50" />
                            </div>
                        </div>
                    </div>
                </div>  
                <button type="submit" className="btn btn-success px-4 float-end">Update</button>  
            </form>
        </div>

     );
}

export default EditProduct;