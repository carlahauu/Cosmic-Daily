import React from 'react'
import PhotoName from './PhotoName'
import './Main.css'

export default function Photo() {
  return (
    <div className='imgContainer'>
        <img className='bgImage' src='/public/mars.png' alt=''></img>
        <div className='topBlur'></div>
        <div className='bottomBlur'></div>
    </div>
  )
}
