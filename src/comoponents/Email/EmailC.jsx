import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from '@mui/icons-material';
import "../Email/EmailC.css"

export default function EmailC() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('', '', form.current, '')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='flex flex-col justify-center mt-12'>
        
        <div className='name'>
          <input  type="text" className='inputText' name="user_name"/>
          <span></span>
        </div>
        
        <div className='email'>
        <input type="email" className='inputText' name="user_email"/>
        <span></span>
        </div>

        <div className='message'>
        <textarea className='inputText' name="message" cols="200"/>
        <span></span>
        </div>
          
      
      <button className='rounded-lg my-2 p-2 bg-cyan-700 text-white font-medium'type="submit">Submit <Send className='p-1'/></button>
      </div>
    </form>
  )
}
