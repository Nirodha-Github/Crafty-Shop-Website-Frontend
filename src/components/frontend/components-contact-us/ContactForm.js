import React from "react";
//import contact from './../../../assets/frontend/images/contact/contact.jpg';

function ContactForm() {
    return ( 
        <div className="m-5 mb-0 row p-5">
            <h3>Send Your Feedback for us<hr /></h3>
                <form className="col-sm-6 offset-col-6 contact-form">
                    <div class="form-group m-3">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" />
                    </div>
                    <div class="form-group m-3">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" required />
                    </div>
                    <div class="form-group m-3">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="text" class="form-control" id="phonenumber" max="10"/>
                    </div>
                    <div class="form-group m-3">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" />
                    </div>
                    <div class="form-group m-3">
                        <label for="message">Message</label>
                        <textarea type="textArea" class="form-control" id="message" rows="10"></textarea>
                    </div>
                    <button type="submit" class="btn m-3" id="contactBtn">Send Feedback</button>
                </form>
            </div>

     );
}

export default ContactForm;