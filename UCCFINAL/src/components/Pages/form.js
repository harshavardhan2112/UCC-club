import React from "react";  
import "./form.css";

export const Form = () => {
  return ( 
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
    <br></br>
      <h1>FORM REGISTRATION</h1>
      <br></br>
      <h4>
            Fill The Form</h4>
      <div id="contact-container1">
        <div className="contact-info1">
          </div>
          <form>
            <div className='col1'>
              <div className="form-group1">
                <label>FirstName</label>
                <input type="text"/>
              </div>
              <div className="form-group1">
                <label>LastName</label>
                <input type="text"/>
              </div>
              </div>
              <div className='col1'>
              <div className="form-group1">
                <label>Email</label>
                <input type="email"/>
              </div>
              <div className="form-group1">
                <label>Phone</label>
                <input type="tel"/>
              </div>
              </div>
              <div className="col1">
                <div className="form-group1 solo1">
                <label for="cars">Choose a car:</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                </div>
              </div>
              <div className="col1">
                <div className="form-group1 solo1">
                  <button className="primary1">Send Message</button>
                </div>
              </div>
          </form>
          </div>
    </>
  );
}
export default Form
