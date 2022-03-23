import React,{useEffect,useState} from "react";
import axios from "axios";
import swal from 'sweetalert';
import {Link} from "react-router-dom";

function ViewVideo() {

    const [loading,setLoading] = useState(true);
    const [videolist,setVideolist] = useState([]);

    useEffect(()=>{

        document.title = "Videos - Dashboard";
        
        axios.get('api/view-video').then(res=>{
            if(res.status === 200){
                setVideolist(res.data.video);
                               
            }
            setLoading(false);
        });
    },[]);

    const deleteVideo = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;

        swal({
            Title:"Confirmation",
            text: "Confirm to Delete Video",
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

                axios.delete(`api/delete-video/${id}`).then(res =>{
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

    var viewVideoTable = "";
    if(loading){
        return (            
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            );
    }
    else{

        var VideoStatus = "";
        if(videolist){
            viewVideoTable = videolist.map((item) =>{
                if(item.status === 0){
                    VideoStatus = "shown";
                }
                else if(item.status === 1){
                    VideoStatus = "hidden";
                }
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.slug}</td>
                        <td><video controls><source src={item.video} /></video></td>
                        <td>{item.description}</td>
                        <td>{VideoStatus}</td>
                        <td><Link to={`manage-videos/${item.id}`} className="btn btn-success btn-sm">Edit</Link></td>
                        <td><button type="button" onClick={(e) => deleteVideo(e, item.id)} className="btn btn-danger btn-sm">Delete</button></td>                      
                    </tr>
                )
            });
        }



        
    }

    

    return ( 
        <div className="container p-3 m-3">
            <div className="card">
                <table className="table card-body table-bordered table-striped">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Video</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {viewVideoTable}
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default ViewVideo;