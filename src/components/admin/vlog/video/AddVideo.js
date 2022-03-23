import React,{useState} from "react";
import axios from 'axios';
import swal from 'sweetalert';

function AddVideo() {

    const [videoInput,setVideo] =useState([]);
    const [videoImage,setVideoImage] =useState([]);
    const [error,setError] = useState([]);
 
     const handleInput = (e) =>{
         e.persist();
         setVideo({...videoInput,[e.target.name]:e.target.value})
     }

     const handleImage = (e) =>{
        e.persist();
        setVideoImage({coverimage:e.target.files[0]})
    }
 
     const submitVideo = (e) =>{
         e.preventDefault();
 
         const formData = new FormData();

        formData.append('coverimage',videoImage.coverimage);
        formData.append('slug',videoInput.slug);
        formData.append('title',videoInput.title);
        formData.append('description',videoInput.description);

        formData.append('meta_title',videoInput.meta_title);
        formData.append('meta_keyword',videoInput.meta_keyword);
        formData.append('meta_description',videoInput.meta_description);
        
        formData.append('video_link',videoInput.video_link);
        formData.append('status',videoInput.status);
 
         axios.post('/api/store-video', formData).then(res=>{
             if(res.data.status === 200){
                 swal("Success",res.data.message,"success");
                // document.getElementById('video-form').reset();
                 setError([]);
             }
             else if(res.data.status === 422){
                setError("Error",res.data.message,"error");
             }
         });
     }
 
    return ( 
        <div className="container-fluid px-4">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Add New Video
            </button>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Add New Video</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-3">                  
                    <form onSubmit={submitVideo} id="category-form">
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
                                        <input type="text" name="slug" onChange={handleInput} value={videoInput.slug} className="form-control" />
                                        <span className="row text-danger">{error.slug}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Title</label>
                                        <input type="text" name="title" onChange={handleInput} value={videoInput.title} className="form-control" />
                                        <span className="row text-danger">{error.title}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Video Link</label>
                                        <input type="text" name="video_link" onChange={handleInput} value={videoInput.video_link} className="form-control" />
                                        <span className="row text-danger">{error.video_link}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Description</label>
                                        <textarea name="description" onChange={handleInput} value={videoInput.description} className="form-control"></textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Status</label>
                                        <input type="checkbox" name="status" onChange={handleInput} value={videoInput.status} className="p-1 m-1" /><br /><small>Status 0 = shown / 1 = hidden</small>
                                    </div>
                                    <div className="col-md-12 form-group mb-3">
                                            <label>Cover Image</label>
                                            <input type="file"  name="coverimage" onChange={handleImage} className="form-control" />
                                            <span className="row text-danger">{error.coverimage}</span>
                                        </div>
                                </div>
                                <div className="tab-pane fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
                                    <div className="form-group mb-3">
                                        <label>Meta Title</label>
                                        <input type="text" name="meta_title" onChange={handleInput} value={videoInput.meta_title} className="form-control" />
                                        <span className="row text-danger">{error.meta_title}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Meta Keyword</label>
                                        <textarea name="meta_keyword" onChange={handleInput} value={videoInput.meta_keyword} className="form-control"></textarea>
                                        <span className="row text-danger">{error.meta_keyword}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Meta Description</label>
                                        <textarea name="meta_description" onChange={handleInput} value={videoInput.meta_description} className="form-control"></textarea>
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

export default AddVideo;