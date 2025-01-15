'use client'
import React from 'react'
import { GetLandingurl } from '../lib/getLandingurl'

const LandingGUI = () => {
  
  const handleClick = async () => {
    const res = await GetLandingurl()
    console.log(res)
    window.location.href = res.data
  }


  return (
    <div>
        <button onClick={handleClick}>Proceed</button>
    </div>
  )
}

export default LandingGUI