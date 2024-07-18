import React from 'react'
import Photo from './Photo'
import PhotoName from './PhotoName'
import SideBar from './SideBar'
import { useState, useEffect } from 'react'

export default function Exhibit() {

    const [showModal, setShowModal] = useState(false)
  
    function handleToggleModal(){
        setShowModal(!showModal)
    }

    useEffect(() => {
        async function fetchAPIData(){
            const NASA_KEY = import.meta.env.VITE_NASA_API_KEY 
            const url ='https://api.nasa.gov/planetary/apod' +
            `?api_key=${NASA_KEY}`

            try {
                const res = await fetch(url)
                const data = await res.json()
                console.log('Data\n', data)
            } catch (err) {
                console.log(err.message)
            }
        }
    }, [])

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
