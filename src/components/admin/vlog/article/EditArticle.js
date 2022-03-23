import React,{useEffect,useState} from "react";
import { useHistory,Link } from "react-router-dom";
import swal from 'sweetalert';
import axios from 'axios';
import {CKEditor} from './../../../../../node_modules/@ckeditor/ckeditor5-react';
import ClassicEditor from './../../../../../node_modules/@ckeditor/ckeditor5-build-classic';
// import the config here
import { config } from './editorConfig'

function EditArticle(props) {

    const [loading,setLoading] = useState(true);
    const history = useHistory();

    const [articleInput,setArticleInput] = useState([]);

    const [articleImage,setArticleImage] = useState([]);
    const [error, setError] = useState([]);
    const [body, setBody] = useState([]);

    ClassicEditor.defaultConfig = config;

    const handleInput = (e) =>{
        e.persist();
        setArticleInput({...articleInput,[e.target.name]:e.target.value})
    }


    const handleImage = (e) =>{
        e.persist();
        setArticleImage({coverimage:e.target.files[0]})
    } 
    
    const handleContent = (event,editor)=>{
        const data = editor.getData();
        setBody({content:data});
        console.log(data);
    }

    const [articleCheckbox, setCheckbox] = useState([]);

    const handleCheckbox = (e) =>{
        e.persist();
        setCheckbox({status:e.target.checked});
    }

    useEffect(()=>{

        const article_id = props.match.params.id;

        axios.get(`/api/edit-article/${article_id}`).then(res=>{
            if(res.data.status === 200){
                setArticleInput(res.data.article);
                setCheckbox(res.data.article);
            }
            else if(res.data.status === 404){
                swal("Error",res.data.message,"error");
                history.push("/admin/articles");
            }
            setLoading(false);
        });

    },[props.match.params.id,history]);

    

    const updateArticle = (e) =>{
        e.preventDefault();
        swal({
            Title:"Confirmation",
            text: "Confirm to Update Article Details",
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
                const article_id = props.match.params.id;
                const formData = new FormData();

                formData.append('coverimage',articleImage.coverimage);
                formData.append('slug',articleInput.slug);
                formData.append('title',articleInput.title);
                formData.append('description',articleInput.description);

                formData.append('meta_title',articleInput.meta_title);
                formData.append('meta_keyword',articleInput.meta_keyword);
                formData.append('meta_description',articleInput.meta_description);
                
                formData.append('article_body',body.content);
                formData.append('status',articleCheckbox.status ? '1':'0');

                axios.post(`/api/update-article/${article_id}`, formData).then(res=>{
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
                        history.push("/admin/articles");
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
            <h5 className="fw-bold">Edit Articles
                <Link to="/admin/manage-articles" className="btn btn-secondary btn-sm float-end">Back</Link>
            <hr /></h5>
            <form onSubmit={updateArticle} id="category-form">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                        <button className="nav-link" id="nav-article-tab" data-bs-toggle="tab" data-bs-target="#nav-article" type="button" role="tab" aria-controls="nav-article" aria-selected="false">Article</button>
                        <button className="nav-link" id="seo-tags-tab" data-bs-toggle="tab" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="seo-tags" aria-selected="false">SEO Tags</button>
                    </div>
                </nav>
                <div className="tab-content mt-3" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="form-group mb-3">
                            <label>Slug</label>
                            <input type="text" name="slug" onChange={handleInput} value={articleInput.slug} className="form-control" />
                            <span className="row text-danger">{error.slug}</span>
                        </div>
                        <div className="form-group mb-3">
                            <label>Description</label>
                            <textarea name="description" onChange={handleInput} value={articleInput.description} className="form-control"></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <label>Status</label>
                            <input type="checkbox" name="status" onChange={handleInput} value={articleInput.status} className="p-1 m-1" /><br /><small>Status 0 = shown / 1 = hidden</small>
                        </div>
                       <div className="col-md-12 form-group mb-3">
                                <label>Cover Image</label>
                                <input type="file"  name="coverimage" onChange={handleImage} className="form-control" />
                                <img src={`http://localhost:8000/${articleInput.coverimage}`} alt={articleInput.coverimage} width="50px" className="col-sm-2"/>
                                <span className="row text-danger">{error.coverimage}</span>
                            </div> 
                    </div>
                    <div className="tab-pane fade" id="nav-article" role="tabpanel" aria-labelledby="nav-article-tab">
                        <div className="form-group mb-3">
                            <label>Title</label>
                            <input type="text" name="title" onChange={handleInput} value={articleInput.title} className="form-control" />
                            <span className="row text-danger">{error.title}</span>
                        </div>
                        <div className="form-group mb-3">
                            <label>Article Content</label>
                            <div height="200px">
                            <CKEditor
                                editor = {ClassicEditor}

                                onReady = {editor =>{

                                }}

                                onChange={handleContent}
                                name="article_body"
                                        
                            />
                            </div>
                            
                            <span className="row text-danger">{error.article_body}</span>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
                        <div className="form-group mb-3">
                            <label>Meta Title</label>
                            <input type="text" name="meta_title" onChange={handleInput} value={articleInput.meta_title} className="form-control" />
                            <span className="row text-danger">{error.meta_title}</span>
                        </div>
                        <div className="form-group mb-3">
                            <label>Meta Keyword</label>
                            <textarea name="meta_keyword" onChange={handleInput} value={articleInput.meta_keyword} className="form-control"></textarea>
                            <span className="row text-danger">{error.meta_keyword}</span>
                        </div>
                        <div className="form-group mb-3">
                            <label>Meta Description</label>
                            <textarea name="meta_description" onChange={handleInput} value={articleInput.meta_description} className="form-control"></textarea>
                        </div>
                    </div>
                </div>   
                <button type="submit" className="btn btn-success px-4 float-end">Update</button>  
            </form>
        </div>
     );
}

export default EditArticle;