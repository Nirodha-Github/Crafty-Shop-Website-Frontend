import React,{useState} from "react";
import swal from 'sweetalert';
import axios from 'axios';
import {CKEditor} from './../../../../../node_modules/@ckeditor/ckeditor5-react';
import ClassicEditor from './../../../../../node_modules/@ckeditor/ckeditor5-build-classic';
// import the config here
import { config } from './editorConfig'

function AddArticle() {

    const [articleInput,setArticle] =useState([]);
    const [articleImage,setArticleImage] =useState([]);
    const [error,setError] = useState([]);
    const [body, setBody] = useState([]);

    ClassicEditor.defaultConfig = config;


    const handleInput = (e) =>{
         e.persist();
         setArticle({...articleInput,[e.target.name]:e.target.value})
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

   
 
     const submitArticle = (e) =>{
         e.preventDefault();
 
         const formData = new FormData();

        formData.append('coverimage',articleImage.coverimage);
        formData.append('slug',articleInput.slug);
        formData.append('title',articleInput.title);
        formData.append('description',articleInput.description);

        formData.append('meta_title',articleInput.meta_title);
        formData.append('meta_keyword',articleInput.meta_keyword);
        formData.append('meta_description',articleInput.meta_description);
        
        formData.append('article_body',body.content);
        formData.append('status',articleInput.status);
 
         axios.post('/api/store-article', formData).then(res=>{
             if(res.data.status === 200){
                 swal("Success",res.data.message,"success");
                // document.getElementById('article-form').reset();
                 setError([]);
             }
             else if(res.data.status === 422){
                swal("Error","","error");
                setError(res.data.errors);
             }
         });
     }

    return ( 
        <div className="container-fluid px-4">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Add New Article
        </button>

    <div className="modal fade p-3" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" height="800px">
        <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Add New Article</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-3">                  
                    <form onSubmit={submitArticle} id="category-form">
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
                                        <input type="file" name="coverimage" onChange={handleImage} className="form-control" />
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
                        <button type="submit" className="btn btn-primary px-4 float-end">Add+</button>  
                    </form>
                </div>
            </div>
        </div>
    </div>
    
</div>
     );
}

export default AddArticle;