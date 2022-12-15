import React, { useRef, useState } from "react";  
import emailjs from '@emailjs/browser';
import EmailForm from "./EmailForm";
import Form from "./form";
import "./maincu.css";

export const Contact = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")
  const [successMsg, setSuccessMsg] = useState("") 

  const sendEmail = (e) => {
    e.preventDefault();
    let formData = {
      user_name: fname + " " + lname,
      user_email: email,
      message: feedback
    }
    emailjs.send('service_divcz7l', 'template_wvj28gv', formData, '5bEJlQAIi38U1ZRUi')
      .then((result) => {
          console.log(result.text);
          window.alert("successfullly mailed")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
    <br></br>
      <h1>Contact Us</h1>
      <br></br>
      <div id="contact-container">
        <div className="contact-info">
          <h4 >
            Contact Information
            
          </h4>
          <p><b>Fill up the form and click send</b></p>
          <div className="icon-text">
          <i class="bi bi-telephone"></i>
            <span><b>9347928920</b></span>
          </div>
          <div className="icon-text">
          <i class="bi bi-envelope"></i>
            <span><b>uc3cbit@gmail.com</b></span>
          </div>
          <div className="icon-text">
          <i class="bi bi-pin-map-fill"></i>
            <span><b>CBIT, Gandipet, Hyderabad, Telangana</b></span>
          </div>
          <div className="social-media">
            <a href="#" className="icon-circle">
            <i class="bi bi-facebook"></i>
            </a>
            <a href="#" className="icon-circle">
            <i class="bi bi-instagram"></i>
            </a>
            <a href="#" className="icon-circle">
            <i class="bi bi-twitter"></i>
            </a>
          </div>
          </div>
          <form onSubmit={sendEmail}>
            <div className='col'>
              <div className="form-group">
                <label>FirstName</label>
                <input style = {{color:'white'}} type="text" required="required" onChange={(e) => setFname(e.target.value)}/>
              </div>
              <div className="form-group">
                <label>LastName</label>
                <input style = {{color:'white'}} type="text" required="required" onChange={(e) => setLname(e.target.value)}/>
              </div>
              </div>
              <div className='col'>
              <div className="form-group">
                <label>Email</label>
                <input style = {{color:'white'}}  type="email" required="required" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input style = {{color:'white'}} type="tel" required="required"/>
              </div>
              </div>
              <div className="col">
                <div className="form-group solo">
                  <label>Feedback</label>
                  <textarea style = {{color:'white'}}  onChange={(e) => setFeedback(e.target.value)}></textarea>
                </div>
              </div>
              <div className="col">
                <div className="form-group solo">
                  <button type="submit" className="primary">Send Message</button>
                </div>
              </div>
          </form>
          </div>
          <br></br>
          <br></br>
    </>
  );
};






