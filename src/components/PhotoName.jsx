import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function PhotoName(props) {

    const {showModal, handleToggleModal, data} = props

  return (
    <footer>
        <div>
            <h2>{data?.title}</h2>
            <h1>{data?.copyright} - {data?.date}</h1>
        </div>
        <div>
        <button onClick={handleToggleModal}><HelpOutlineIcon /></button>
        </div>
    </footer>
  )
}
