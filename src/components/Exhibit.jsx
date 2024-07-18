import React from 'react'
import Photo from './Photo'
import PhotoName from './PhotoName'
import SideBar from './SideBar'
import { useState } from 'react'

export default function Exhibit() {
    const [showModal, setShowModal] = useState(false)
  

    function handleToggleModal(){
        setShowModal(!showModal)
    }

    return (
    <>
    <div className='exhibit'>
        <Photo />
        {showModal && 
        (<SideBar handleToggleModal={handleToggleModal} />
        )}
        <PhotoName handleToggleModal={handleToggleModal} />
    </div>
    </>
  )
}
