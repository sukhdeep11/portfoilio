import React from 'react'
import devImg from "../../assets/devImg.png"
import Button from '../Button/Button';

function Info() {
  return (
    <div className='flex'>
        
        <div className='text-slate-100'>
            <h1 className='text-5xl font-medium text-slate-50'>Hi, I'm Sukhdeep</h1>
            <h2 className='text-2xl font-medium my-3 text-slate-50'>Front End Developer</h2>
            <p className='tracking-tight font-normal text-base text-slate-50'>I am a Full Stack Devloper. I am motivated in designing and developing websites, and currently learning how to apply my technical skills in a business-oriented environment. I look forward to starting my career as a Web Developer.</p>
        
        <Button/>
        
        </div>


        <div>
         <img className='px-48' src={devImg} alt="dev" />
        </div>

        
    </div>
  )
}

export default Info