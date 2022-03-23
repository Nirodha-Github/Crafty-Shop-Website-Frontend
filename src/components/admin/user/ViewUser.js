import React,{useEffect, useState} from "react";
import axios from "axios";

function ViewUser() {

    const [loading,setLoading] = useState(true);
    const [userlist,setUserlist] = useState([]);
    //const [statuslist,setStatuslist] = useState([]);

    useEffect(()=>{
        axios.get('api/view-user').then(res=>{
            if(res.status === 200){
                setUserlist(res.data.user);       
                // setStatuslist(res.data.status);  
                // console.log(res.data.status);
            }
            setLoading(false);
        });
    },[]);


    var viewUserTable = "";

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
        viewUserTable = userlist.map((item) =>{
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.firstname} {item.lastname}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneno}</td>
                    <td>{item.address}</td>
                    <td>{item.lastseen}</td>
               </tr>                
            );
        })

      
    }

    return ( 
        <div className="container p-3 m-3">
            <div className="card">
                <table className="table card-body table-bordered table-striped">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewUserTable}
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default ViewUser;