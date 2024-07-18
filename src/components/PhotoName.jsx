import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function PhotoName(props) {

    const {showModal, handleToggleModal} = props

  return (
    <footer>
        <div>
            <h2>Brutal Marsian Landscape</h2>
            <h1>APOD Project</h1>
        </div>
        <div>
        <button onClick={handleToggleModal}><HelpOutlineIcon /></button>
        </div>
    </footer>
  )
}
