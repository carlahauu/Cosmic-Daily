import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Main.css'

export default function SideBar(props) {

    const {showModal, handleToggleModal, data} = props

  return (
    <div className='sideBar'>
        <div className='bgOverlay'>
        <button onClick={handleToggleModal} className='arrowBack'><ArrowBackIosIcon /></button>
            <div className='sideBarContent'>
                <h2>{data?.title}</h2>
                <p>Description</p>
                <p>{data?.explanation}</p>
            </div>
        </div>
    </div>
  )
}
