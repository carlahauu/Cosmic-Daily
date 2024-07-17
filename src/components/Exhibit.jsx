import React from 'react'
import Photo from './Photo'
import PhotoName from './PhotoName'
import SideBar from './SideBar'

export default function Exhibit() {
  return (
    <>
    <div className='exhibit'>
        <Photo />
        <SideBar />
        <PhotoName />
    </div>
    </>
  )
}
