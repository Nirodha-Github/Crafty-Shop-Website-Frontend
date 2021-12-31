import React,{useState} from 'react';
import {BrowserRouter as Router,useHistory} from 'react-router-dom';
import './../../../assets/frontend/css/styles.css';
import './../../../assets/frontend/js/scripts.js';
import authCover from './../../../assets/frontend/images/auth/authCover.jpeg';
import axios from 'axios';
import swal from 'sweetalert';

function Register() {

    const history = useHistory();

    const [registerInput,setRegister] = useState({
        fname:'',
        lname:'',
        email:'',
        phoneno:'',
        password:'',
        address:'',
        error_list:[],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]:e.target.value});
    }


    const registerSubmit = (e) =>{
        e.preventDefault();

        const data = {
            fname: registerInput.fname,
            lname: registerInput.lname,
            email: registerInput.email,
            phoneno:registerInput.phoneno,
            password: registerInput.password,
            address: registerInput.address,
            
        }

    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/api/register',data).then(res =>{
            if(res.data.status === 200)
            {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                swal("Success", res.data.message,'success');
                history.push('/');
                
            }
            else
            {
                setRegister({...registerInput ,error_list: res.data.validation_errors});
                console.log(res.data.validation_errors);
            }
         }).catch(error => {            
            console.log(error)
        });
});
   
    
    }

    return ( 
        <div className="w-100 p-0 authContainer">
        <div className="card registerCard shadow-lg">
            <div className="row p-0 m-0">
                <div className="col-sm-4 p-0 m-0">
                    <img className="img-fluid h-100 " width={"100%"} src={authCover} alt="authCoverImage" />
                </div>
                <div className="col-sm-8 row p-0 m-0 col-12">
                    <div className="card-header col-sm-12 h3 text-center" id="authHeader">Crafty Shop - SignUp</div>
                    <form className="card-body authBody col-sm-12" onSubmit={registerSubmit}>
                        <div className="form-row row">
                            <div className="form-group col-sm-6 row mt-4">
                                <label htmlFor="fname" className="col-sm-4">First Name</label>
                                <input type="text" name="fname" onChange={handleInput} value={registerInput.fname} placeholder="Enter Your First Name" className="col-sm-8 p-2 border border-primary border-1" id="fname"/>
                                <span className="row">{registerInput.error_list.fname}</span>
                            </div>
                            <div className="form-group col-sm-6 row mt-4">
                                <label htmlFor="lname" className="col-sm-4">Last Name</label>
                                <input type="text" name="lname" onChange={handleInput} value={registerInput.lname} placeholder="Enter Your Last Name" className="col-sm-8 p-2 border border-primary border-1" id="lname"/>
                                <span className="row">{registerInput.error_list.lname}</span>
                            </div>
                        </div>
                        <div className="form-row row">
                            <div className="form-group col-sm-6 row mt-4">
                                <label htmlFor="email" className="col-sm-4">Email</label>
                                <input type="email" name="email" onChange={handleInput} value={registerInput.email} placeholder="Enter Your Email Address" className="col-sm-8 p-2 border border-primary border-1" id="email"/>
                                <span className="row">{registerInput.error_list.email}</span>
                            </div>
                            <div className="form-group col-sm-6 row mt-4">
                                <label htmlFor="phoneno" className="col-sm-4">Phone Number</label>
                                <input type="tel" name="phoneno" onChange={handleInput} value={registerInput.phoneno} placeholder="Enter Your Phone Number" className="col-sm-8 p-2 border border-primary border-1" id="phoneno"/>
                                <span className="row">{registerInput.error_list.phoneno}</span>
                            </div>
                        </div>
                        <div className="form-row row">
                            <div className="form-group col-sm-6 row mt-4">
                                <label htmlFor="password" className="col-sm-4">Password</label>
                                <input type="password" name="password" onChange={handleInput} value={registerInput.password} placeholder="Enter Your Password"  className="col-sm-8 p-2 border border-primary border-1" id="password"/>
                                <span className="row">{registerInput.error_list.password}</span>
                            </div>
                            <div className="form-group col-sm-6 row mt-4">
                                <label htmlFor="address" className="col-sm-4">Address</label>
                                <input type="text" name="address" onChange={handleInput} value={registerInput.address} placeholder="Enter Your Address" className="col-sm-8 p-2 border border-primary border-1" id="address"/>
                                <span className="row error">{registerInput.error_list.address}</span>
                            </div>
                        </div>
                        <div className="form-row mt-4"><center><button type="submit" className="btn" id="registerBtn">Register</button></center></div>                     
                    </form>
                    <div className="card-footer text-center bg-light">
                        <span>Already have an account ? 
                            <Router>
                                <a href={"login"} className="text-decoration-none"> login here</a>
                            </Router>
                        </span>
                    </div> 
                </div>
            </div>
       </div>
   </div>

           
        
     );
}

export default Register; 


// DOM element
// if (document.getElementById('registration')) {
//     ReactDOM.render(<Registration />, document.getElementById('registration'));
// }