import React from "react";  
import "./maincu.css";

export const Contact = () => {
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
          <form>
            <div className='col'>
              <div className="form-group">
                <label>FirstName</label>
                <input type="text"/>
              </div>
              <div className="form-group">
                <label>LastName</label>
                <input type="text"/>
              </div>
              </div>
              <div className='col'>
              <div className="form-group">
                <label>Email</label>
                <input type="email"/>
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel"/>
              </div>
              </div>
              <div className="col">
                <div className="form-group solo">
                  <label>Feedback</label>
                  <textarea></textarea>
                </div>
              </div>
              <div className="col">
                <div className="form-group solo">
                  <button className="primary">Send Message</button>
                </div>
              </div>
          </form>
          </div>
    </>
   
  );
};
