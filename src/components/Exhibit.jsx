import React from 'react'
import Photo from './Photo'
import PhotoName from './PhotoName'
import SideBar from './SideBar'
import { useState, useEffect } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import Navbar from './Navbar'

export default function Exhibit() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)

  
    function handleToggleModal(){
        setShowModal(!showModal)
    }

    useEffect(() => {
        async function fetchAPIData(){
            const NASA_KEY = import.meta.env.VITE_APP_NASA_API_KEY
            const url ='https://api.nasa.gov/planetary/apod' +
            `?api_key=${NASA_KEY}`
            try {
                const res = await fetch(url)
                const apiData = await res.json()
                setData(apiData)
                console.log('Data\n', apiData)
            } catch (err) {
                console.log(err.message)
            }
        }
        fetchAPIData()
    }, [])

    return (
    <>
    {!data && (<div className='loadingState'>
        <h1>Loading Data</h1>
        <SettingsIcon fontSize='large'className='settingsIcon' />
    </div>)}
    {data && (<Navbar />)}
    <div className='exhibit'>
        {data && (<Photo data={data}/>)}
        {showModal && 
        (<SideBar data={data} handleToggleModal={handleToggleModal} />
        )}
        {data && (<PhotoName data={data} handleToggleModal={handleToggleModal} />)}
    </div>
    </>
  )
}
