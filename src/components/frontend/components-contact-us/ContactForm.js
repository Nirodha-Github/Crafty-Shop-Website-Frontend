import React,{useState} from "react";
import axios from 'axios';
import swal from 'sweetalert';
//import contact from './../../../assets/frontend/images/contact/contact.jpg';

function ContactForm() {

    const [feedbackInput,setFeedback] = useState({
        name:'',
        email:'',
        phonenumber:'',
        title:'',
        description:''
    });
    const [error,setError] = useState([]);
 
     const handleInput = (e) =>{
         e.persist();
         setFeedback({...feedbackInput,[e.target.name]:e.target.value})
     }
 
     const submitFeedback = (e) =>{
         e.preventDefault();
 
         const data = {
             name:feedbackInput.name,
             email:feedbackInput.email,
             phonenumber:feedbackInput.phonenumber,
             title:feedbackInput.title,
             description:feedbackInput.description,
         }
 
         axios.post('/api/store-feedback', data).then(res=>{
             if(res.data.status === 200){
                 swal("Success",res.data.message,"success")
                 (document.getElementById('contact-form').reset());
                 setError([]);
             }
             else if(res.data.status === 422){
                setError(res.data.errors);
             }
         });
     }
 
    return ( 
        <div className="m-5 mb-0 row p-5">
            <h3>Send Your Feedback for us<hr /></h3>
                <form onSubmit={submitFeedback} className="col-sm-6 offset-col-6" id="contact-form">             
                    <div className="form-group m-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={handleInput} value={feedbackInput.name} className="form-control" id="name" />
                        <small className="row text-danger">{error.name}</small>
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email"  onChange={handleInput} value={feedbackInput.email} className="form-control" id="email"  />
                        <small className="row text-danger">{error.email}</small>                   
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" name="phonenumber"  onChange={handleInput} value={feedbackInput.phonenumber} className="form-control" id="phonenumber" max="10"/>
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title"  onChange={handleInput} value={feedbackInput.title} className="form-control" id="title" />
                        <small className="row text-danger">{error.title}</small>   
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="message">Message</label>
                        <textarea type="textArea" name="description"  onChange={handleInput} value={feedbackInput.description} className="form-control" id="description" rows="10"></textarea>
                        <small className="row text-danger">{error.description}</small>
                    </div>
                    <button type="submit" className="btn m-3" id="contactBtn">Send Feedback</button>
                </form>
            </div>

     );
}

export default ContactForm;