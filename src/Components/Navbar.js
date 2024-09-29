import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../Images/Logo.jpeg"


function Navbar() {
  return (
     <div className='flex'>
      <div className='h-28 w-28 flex items-center'>
        <img src={Logo}/> 
      </div>
      <div>
        <Link to="/projects">Projects</Link>
        <button>Updates</button>
        <a target='_blank' href='https://drive.google.com/file/d/1luFzj2npcIQMtlmLuypZpZxDg2RFKwC9/view?usp=sharing'>Resume</a>
        <Link to="/about">About</Link>

      </div>
     </div>
);
};

export default Navbar