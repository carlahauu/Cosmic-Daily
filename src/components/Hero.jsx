import React from 'react'
import Navbar from './Navbar'
import './Main.css'
import './Hero.css'

export default function Hero() {
  return (
    <div className='heroContainer'>
        <Navbar />
        <div>Hero</div>
        <div className='topBlur'></div>
        <div className='bottomBlur'></div>
    </div>
  )
}
