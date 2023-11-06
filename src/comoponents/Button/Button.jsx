import React from 'react'

import { PersonOutline, Download } from '@mui/icons-material';


export default function Button() {
  return (
    <>
        <div className='flex mt-6'>
            <div className='cursor-pointer flex items-center bg-cyan-700 text-slate-100 rounded px-8 py-3 font-medium'>
            <PersonOutline/>
            <span className='px-1'>About Me</span>
            </div>

            <div className='cursor-pointer flex items-center bg-cyan-700 text-slate-100 rounded px-8 py-3 font-medium mx-4'>
            <Download/>
            <span className='px-1'>Download Resume</span>
            </div>
        </div>
    </>
  )
}
