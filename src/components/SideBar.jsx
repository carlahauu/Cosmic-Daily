import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Main.css'

export default function SideBar() {
  return (
    <div className='sideBar'>
        <div className='bgOverlay'>
        <button className='arrowBack'><ArrowBackIosIcon /></button>
            <div className='sideBarContent'>
                <h2>Brutal Marsian Landscape</h2>
                <p>Description</p>
                <p>Texttttt</p>
            </div>
        </div>
    </div>
  )
}
