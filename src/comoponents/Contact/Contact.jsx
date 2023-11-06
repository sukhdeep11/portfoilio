import React from 'react'
import { Email, GitHub, LinkedIn, ArrowForward } from '@mui/icons-material';
import EmailC from '../Email/EmailC';

function Contact() {
  return (
    <section>

        <div className='flex flex-col items-center'>
            <p className='text-cyan-700 text-lg mb-1 font-medium'>Get In Touch</p>
            <h1 className='text-white font-semibold text-4xl' >Contact Me</h1>
        </div>

    <section className='flex justify-evenly'>

        <div>

            <div className='flex flex-col items-center bg-zinc-800 text-white my-6 rounded-lg px-20 py-6'>
                <Email className='text-cyan-700'/>
                <span className='block text-sm font-bold'>Email</span>
                <span className='text-sm'>sukhdeep.rayat1@gmail.com</span>
                <button className='text-cyan-700 cursor-pointer mt-1'>Email Me <ArrowForward className='scale-50 -ml-2' /></button>         
            </div> 

            <div className='flex flex-col items-center bg-zinc-800 text-white my-6 rounded-lg px-20 py-6'>
                <GitHub className='text-cyan-700'/>
                <span className='block text-sm font-bold'>GitHub</span>
                <span className='text-sm'>sukhdeep11</span> 
                <button className='text-cyan-700 cursor-pointer mt-1'>Get me there<ArrowForward className='scale-50 -ml-1' /></button>        
            </div>   

            <div className='flex flex-col items-center bg-zinc-800 text-white my-6 rounded-lg px-20 py-6'>
                <LinkedIn className='text-cyan-700'/>
                <span className='block text-sm font-bold'>LinkedIn</span>
                <span className='text-sm'>sukhdeep-rayat</span>
                <button className='text-cyan-700 cursor-pointer mt-1'>Get me there<ArrowForward className='scale-50 -ml-1' /></button>         
            </div>   

        </div>


        <EmailC/>

    </section>

    </section>
  )
}

export default Contact