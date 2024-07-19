import React from 'react'
import PhotoName from './PhotoName'
import './Main.css'

export default function Photo(props) {
  const {data} = props
  return (
    <div className='imgContainer'>
        <img className='bgImage' src={data?.hdurl} alt={data?.title}></img>
        <div className='topBlur'></div>
        <div className='bottomBlur'></div>
    </div>
  )
}
