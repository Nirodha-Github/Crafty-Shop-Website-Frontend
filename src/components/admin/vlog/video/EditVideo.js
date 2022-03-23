import React,{useEffect,useState} from "react";
import { useHistory,Link } from "react-router-dom";
import swal from 'sweetalert';
import axios from 'axios';

function EditVideo(props) {

    const [loading,setLoading] = useState(true);
    const history = useHistory();

    const [videoInput,setVideoInput] = useState([]);

    const [videoImage,setVideoImage] = useState([]);
    const [error,setError] = useState([]);

    const handleInput = (e) =>{
        e.persist();
        setVideoInput({...videoInput,[e.target.name]:e.target.value})
    }

    const handleImage = (e) =>{
        e.persist();
        setVideoImage({coverimage:e.target.files[0]})
    }
    
    const [videoCheckbox, setCheckbox] = useState([]);

    const handleCheckbox = (e) =>{
        e.persist();
        setCheckbox({status:e.target.checked});
    }

    useEffect(()=>{

        const video_id = props.match.params.id;

        axios.get(`/api/edit-video/${video_id}`).then(res=>{
            if(res.data.status === 200){
                setVideoInput(res.data.video);
                setCheckbox(res.data.video);
            }
            else if(res.data.status === 404){
                swal("Error",res.data.message,"error");
                history.push("/admin/videos");
            }
            setLoading(false);
        });

    },[props.match.params.id,history]);

    

    const updateVideo = (e) =>{
        e.preventDefault();
        swal({
            Title:"Confirmation",
            text: "Confirm to Update Video Details",
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
                const video_id = props.match.params.id;
                const formData = new FormData();

                formData.append('coverimage',videoImage.coverimage);
                formData.append('slug',videoInput.slug);
                formData.append('title',videoInput.title);
                formData.append('description',videoInput.description);

                formData.append('meta_title',videoInput.meta_title);
                formData.append('meta_keyword',videoInput.meta_keyword);
                formData.append('meta_description',videoInput.meta_description);
                
                formData.append('video_link',videoInput.video_link);
                formData.append('status',videoCheckbox.status ? '1':'0');

                axios.post(`/api/update-video/${video_id}`, formData).then(res=>{
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
                        history.push("/admin/videos");
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
            <h5 className="fw-bold">Edit Videos
                <Link to="/admin/videos" className="btn btn-secondary btn-sm float-end">Back</Link>
            <hr /></h5>
            <form onSubmit={updateVideo} id="category-form">
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
                            <input type="checkbox" name="status" onChange={handleCheckbox} value={videoCheckbox.status} className="p-1 m-1" /><br /><small>Status 0 = shown / 1 = hidden</small>
                        </div>
                        <div className="col-md-12 form-group mb-3">
                                <label>Cover Image</label>
                                <input type="file"  name="coverimage" onChange={handleImage} className="form-control" />
                                <img src={`http://localhost:8000/${videoInput.coverimage}`} alt={videoInput.coverimage} width="50px" className="col-sm-2"/>
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
                <button type="submit" className="btn btn-success px-4 float-end">Update</button>  
            </form>
        </div>
     );
}

export default EditVideo;