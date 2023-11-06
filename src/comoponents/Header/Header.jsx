import React from 'react'
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
import { GitHub, LinkedIn } from '@mui/icons-material';
import "../Header/header.css"

function Header() {
  return (
    <div>
        <div className=" text-md  flex items-center text-slate-50 m-2">
            <span className='dash font-semibold'>Find Me On </span>        
            <span className='scale-75 hover:scale-90 transition duration-150 ml-10 mr-1 cursor-pointer'><LinkedIn/></span>
            <span className='scale-75 hover:scale-90 transition duration-150 cursor-pointer'><GitHub/></span> 
        </div>
    </div>
  )
}

export default Header