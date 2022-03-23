import React,{useEffect,useState} from "react";
import Header from './../../layouts/frontend/Header';
import Navbar from './../../layouts/frontend/Navbar';
import Footer from './../../layouts/frontend/Footer';
import axios from 'axios';
import swal from 'sweetalert';


function Profile(props) {

    const [loading,setLoading] = useState(true);
    const [userInput,setUserInput] = useState([]);
    const [error,setError] = useState([]);
    const [userImage,setUserImage] = useState([]);

    
    const handleInput = (e) =>{
        e.persist();
        setUserInput({...userInput,[e.target.name]:e.target.value})
    }

    const handleImage = (e) =>{
        e.persist();
        setLoading(true);  
        setUserImage({uimage:e.target.files[0]});
        setLoading(false);  
    }

    useEffect(()=>{
        const id = props.match.params.id;
        axios.get(`api/getUser/${id}`).then(res=>{
          
            if(res.data.status === 200){
                setUserInput(res.data.user);
                setUserImage(res.data.user);              

            }
            else if(res.data.status === 404){
                swal("Error",res.data.message,"error");
                
            }
            setLoading(false);      
            
        });

    },[props.match.params.id]);

    const updateUser = (e) =>{
        e.preventDefault();
        swal({
            Title:"Confirmation",
            text: "Confirm to Update Profile Data",
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
                const id = props.match.params.id;
                const userData = new FormData();   

                userData.append('uimage',userImage.uimage);
                userData.append('firstname',userInput.firstname);
                userData.append('lastname',userInput.lastname);
                userData.append('email',userInput.email);
                userData.append('phoneno',userInput.phoneno);
                userData.append('address',userInput.address);

                axios.post(`/api/updateUser/${id}`, userData).then(res=>{
                    if(res.data.status === 200){
                        swal("Success",res.data.message,"success");
                        setError([]);
                                                
                    }
                    else if(res.data.status === 404){
                        swal("Error",res.data.message,"error");
                    }
                });

            }
        });
    }

    if(loading){
        return (            
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            );
    }
   

    return ( 
            
        <div>
            <section className="m-0 p-0"><Header /></section>
            <section className="m-0 p-0"><Navbar /></section>
            <section className="m-0 p-0 profileContainer" >
            <h3 className="text-center p-3 mt-3">Welcome to Profile<hr /></h3>
            <div className="row m-0 p-0">
                <div className="col-sm-2 mt-5 side"></div>
                <div className="card-body col-sm-8 shadow-lg " >
                
                <form onSubmit={updateUser} id="user-form" encType="multipart/form-data">
                <div className="form-row">
                    <div className="form-group profile">
                        <img src={userImage.uimage!=="" ? `http://localhost:8000/${userImage.uimage}`:`http://localhost:8000/profile/photo.png`} alt="profileImage" width="100px" height="100px" className="border rounded-circle row"/>     
                        <input type="file"  name="uimage" onChange={handleImage} className="form-control" id="uploadBtn" />                
                    </div>
                    <small className="text-danger">{error.uimage}</small>
                </div>
                <div className="form-row row">
                    <div className="form-group col-sm-6 row mt-4">
                        <label htmlFor="firstname" className="col-sm-6">First Name</label>
                        <input type="text" name="firstname" onChange={handleInput} value={userInput.firstname}   className="col-sm-6 p-2 border border-primary border-1" id="firstname"/>
                    </div>
                    <div className="form-group col-sm-6 row mt-4">
                        <label htmlFor="lastname" className="col-sm-6">Last Name</label>
                        <input type="text" name="lastname" onChange={handleInput} value={userInput.lastname}   className="col-sm-6 p-2 border border-primary border-1" id="lastname"/>
                    </div>
                </div>
                <div className="form-row row">
                    <div className="form-group col-sm-12 row mt-4">
                        <label htmlFor="email" className="col-sm-4">Email</label>
                        <input type="email" name="email" onChange={handleInput} value={userInput.email} className="col-sm-8 p-2 border border-primary border-1" id="email"/>
                        <small className="text-danger">{error.email}</small>
                    </div>
                </div>
                <div className="form-row row">
                    <div className="form-group col-sm-12 row mt-4">
                        <label htmlFor="phoneno" className="col-sm-4">Phone Number</label>
                        <input type="tel" name="phoneno" onChange={handleInput} value={userInput.phoneno}className="col-sm-8 p-2 border border-primary border-1" id="phoneno"/>
                        <small className="text-danger">{error.phoneno}</small>
                    </div>
                </div>
                <div className="form-row row">
                    <div className="form-group col-sm-12 row mt-4">
                        <label htmlFor="address" className="col-sm-4">Address</label>
                        <input type="text" name="address" onChange={handleInput} value={userInput.address} className="col-sm-8 p-2 border border-primary border-1" id="address"/>
                    </div>
                </div>
                <div className="form-row mt-4"><center><button type="submit" className="btn" id="profileBtn">Update Profile</button></center></div>                     
            </form> 

                </div>  
                <div className="col-sm-2 mt-5 side"></div>
        </div>
            </section>
            <section className="m-0 p-0 footerContainer"><Footer /></section>
        </div>
        
     );
}

export default Profile;