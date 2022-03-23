import React,{useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function Feedback() {
    const [loading,setLoading] = useState(true);
    const [feedbacklist,setFeedbacklist] = useState([]);

    useEffect(()=>{
        document.title = "Feedback - Dashboard";
        axios.get('api/view-feedback').then(res=>{
            if(res.status === 200){
                setFeedbacklist(res.data.feedback);
            }
            setLoading(false);
        });
    },[]);

    const deleteFeedback = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;

        swal({
            Title:"Confirmation",
            text: "Confirm to Delete Feedback Data",
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

                axios.delete(`api/delete-feedback/${id}`).then(res =>{
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

    var viewFeedbackTable = "";
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
        viewFeedbackTable = feedbacklist.map((item) =>{
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>                 
                    <td>{item.email}</td>
                    <td>{item.phonenumber}</td>
                    <td>{item.title}</td>
                    <td colspan="2">{item.description}</td>       
                    <td><button type="button" onClick={(e) => deleteFeedback(e, item.id)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
            )
        });
    }
    return ( 
        <div className="container-fluid px-4">
            <h4 className="fw-bold">Feedback<hr /></h4>
            <div className="container p-3 m-3">
            <div className="card">
                <table className="table card-body table-bordered table-striped">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Title</th>
                        <th colspan="2">Description</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewFeedbackTable}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
     );
}

export default Feedback;