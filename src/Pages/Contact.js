import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6ve5fdi',
      'template_dustx4h',
      e.target,
      'user_Mb1ZYcfDFlJthdhlmK5ui')
      .then((res) => {
        toast.info("Thank you for your feedback...",{
          position: 'top-center'
        });
        document.getElementById("myForm").reset();
      })
      .catch((err) => console.log(err));
  }
  return (
    <div class="container cform">
      {/* <div class="absolute">
              <h3 class="mb-4">Contact Info</h3>
              <p>Telephone: +91 7009301233 <br/> Email: dps@12111.com</p>
            </div>
          */}
      <h3 class=" mb-4">Contact Us</h3>

      <form class="mb-5" onSubmit={sendEmail} id="myForm" name="contactForm" >
        <div class="row">
          <div class="col-md-6 mb-4">
            <input type="text" class="cinput" name="name" id="name" placeholder="Your name " required />
          </div>
          <div class="col-md-6 mb-4">
            <input type="email" class="cinput" name="user_email" id="email" placeholder="Your Email" required/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-4">
            <textarea class="cinput textarea" name="message" id="message" cols="30" rows="2" placeholder="Write your message" required></textarea>
          </div>
        </div>
        <input type="submit" value="Send" class="btn cbtn btn-primary rounded-0 py-2 px-4" />
      </form>
      <ToastContainer />
    </div>
  )
}


export default Contact;
