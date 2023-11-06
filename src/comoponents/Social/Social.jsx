import React from 'react'
import { Email, GitHub, LinkedIn } from '@mui/icons-material';


function Social() {
  return (
    <div className='flex text-white'>
    <div className='flex items-center mr-4'>
        <Email className='text-cyan-700'/>
        <div className='mx-2'>
        <span className='block text-sm font-bold'>Email</span>
        <span className='text-sm'>sukhdeep.rayat1@gmail.com</span>
        </div>
    </div>

    <div className='flex items-center mr-4'>
        <LinkedIn className='text-cyan-700'/>
        <div className='mx-2'>
            <span className='block text-sm font-bold'>LinkedIn</span>
            <span>sukhdeep-rayat</span>
        </div>
    </div>

    <div className='flex items-center'>
        <GitHub className='text-cyan-700'/>
        <div className='mx-2'>
            <span className='block text-sm font-bold'>GitHub</span>
            <span>sukhdeep11</span>
        </div>
   
    </div>
</div>
  )
}

export default Social