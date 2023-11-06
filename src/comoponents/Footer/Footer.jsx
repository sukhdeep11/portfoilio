import React from 'react'
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <div className='bg-zinc-800 text-white flex justify-between items-center py-6'>
        <div>
            <h2 className='text-3xl font-bold mb-1'>Sukh</h2>
            <span className='font-medium'>Full Stack Devloper</span>
        </div>

        <div>
            <span className='mx-2 cursor-pointer hover:text-cyan-700 duration-150'>About</span>
            <span className='mx-2 cursor-pointer hover:text-cyan-700 duration-150'>Work</span>
        </div>

        <div>
            <Email className='mx-2 cursor-pointer hover:text-cyan-700 duration-150'/>
            <LinkedIn className='mx-2 cursor-pointer hover:text-cyan-700 duration-150'/>
            <GitHub className='mx-2 cursor-pointer hover:text-cyan-700 duration-150'/>

        </div>

    </div>
  )
}

export default Footer