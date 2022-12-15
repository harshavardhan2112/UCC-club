import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 
import "./emailform.css";
 

export const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_divcz7l', 'template_wvj28gv', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <div class="container">
    <form ref={form} onSubmit={sendEmail}>
  
      <label for="name">Name</label>
      <input type="text" id="name" name="user_name" placeholder="Your name.." />
  
      <label for="name">Email</label>
      <input type="text" id="name" name="email" placeholder="Your email.." />
 
  
      <label for="subject">Message</label>
      <textarea id="subject" name="subject" placeholder="Write something.." rows={4}></textarea>
  
      <input type="submit" value="Submit" />
  
    </form>
  </div>
  );
};

export default EmailForm
