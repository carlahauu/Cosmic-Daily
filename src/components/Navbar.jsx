import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import './Main.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <a href='' className='navbarTitle'>Cosmic <span>Daily</span></a>
        <ul className='navbarMenu'>
            <li className='githubIcon'><a href='https://github.com/carlahauu/Cosmic-Exhibit'><GitHubIcon /></a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>
    </div>
  )
}
