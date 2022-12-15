import React, { useState } from "react";  
import "./form.css";
import axios from 'axios'

export const Form = () => {
  const [name, setName] = useState("")
  const [college, setCollege] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [depart_sec, setDepart_sec] = useState("")

  const handleSubmit =  async (e) => {
    e.preventDefault()
    const userData = {name, college, email, phone, depart_sec}
    console.log(userData)  
 
    
    try {
      await axios.post("http://localhost:9000/", userData)
      window.alert("successfullly Submitted!!!")

    } catch (error) {
      console.log(error)
    } 
    setName("")
    setCollege("")
    setDepart_sec("")
    setEmail("")
    setPhone("")
    //.then(res => console.log(res)).catch(err => console.log(err))



  }

  return ( 
    <>
    
    <br></br>
      <h1>FORM REGISTRATION</h1>
      <br></br>
      <h4>
            Fill The Form</h4>
      <div id="contact-container1">
        <div className="contact-info1">
          </div>
          <form onSubmit={handleSubmit}>
            <div className='col1'>
              <div className="form-group1">
                <label>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} style={{color: "white"}} type="text"/>
              </div>
              <div className="form-group1">
                <label>College Name</label>
                <input value={college} onChange={(e) => setCollege(e.target.value)} style={{color: "white"}} type="text"/>
              </div>
              </div>
              <div className='col1'>
              <div className="form-group1">
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} style={{color: "white"}} type="email"/>
              </div>
              <div className="form-group1">
                <label>Phone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} style={{color: "white"}} type="tel"/>
              </div>
              </div>
              <div className="col1">
                <div className="form-group1 solo1">
                {/* <label for="cars">Choose Problem Statement:</label>
                <select style={{color: "white"}} name="cars" id="cars">
                    <option style={{color: "white"}} value="volvo"  >P1</option>
                    <option style={{color: "white"}} value="saab">p2</option>
                    <option  style={{color: "white"}}value="mercedes">p3</option>
                    <option  style={{color: "white"}} value="audi">p4</option>
                </select> */} 
                <label>Department and Section</label>
                <input value={depart_sec} onChange={(e) => setDepart_sec(e.target.value)} style={{color: "white"}} type="tel"/>
                </div> 
                
              </div>
              
              <div className="col1">
                <div className="form-group1 solo1">
                  <button type="submit" className="primary1">Send Message</button>
                </div>
              </div>
          </form>
          </div>
          <br></br>
          <br></br>
          
          
    </>
  );
}
export default Form
