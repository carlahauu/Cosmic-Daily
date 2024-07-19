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
        <div className='helpOut'>
        <button onClick={handleToggleModal}><HelpOutlineIcon fontSize='large' /><h3>Click for Info!</h3></button>
        </div>
    </footer>
  )
}
