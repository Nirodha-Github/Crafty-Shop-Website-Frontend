import React,{useState} from 'react';
import {BrowserRouter as Router,useHistory} from 'react-router-dom';
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
        rdate:'',
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
            rdate: registerInput.rdate,
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
        <div className="w-100 p-0 loginContainer">
        <div className="card loginCard shadow-lg">
            <div className="row p-0 m-0">
                <div className="col-sm-4 p-0 m-0">
                    <img className="img-fluid h-100 " width={"100%"} src={loginCover} alt="loginCoverImage" />
                </div>
                <div className="col-sm-8 row p-0 m-0 col-12">
                    <div className="card-header col-sm-12 h3 text-center" id="loginHeader">Crafty Shop - Login</div>
                    <form className="card-body loginBody col-sm-12" onSubmit={registerSubmit}>
                        <div className="form-row m-2">
                            <div className="form-group row gx-3">
                                <label htmlFor="email" className="col-sm-3 h6">Email</label>
                                <input type="email" name="email" onChange={handleInput} value={loginInput.email} placeholder="Enter Your Username" className="col-sm-9 p-2 border border-primary border-1" id="email"/>
                            </div>
                            <span className="row">{loginInput.error_list.email}</span>
                        </div>
                        <div className="form-row m-2">
                            <div className="form-group row gx-3">
                                <label htmlFor="password" className="col-sm-3 h6">Password</label>
                                <input type="password" name="password" onChange={handleInput} value={loginInput.password} placeholder="Enter Your Password"  className="col-sm-9 p-2 border border-primary border-1" id="password"/>
                            </div>
                            <span className="row">{loginInput.error_list.password}</span>
                        </div>
                        <div className="form-row"><center><button type="submit" className="btn" id="loginBtn">login</button></center></div>                     
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