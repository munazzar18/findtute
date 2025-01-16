'use client'
import React from 'react'
import { GetLandingurl } from '../lib/getLandingurl'

const LandingGUI = ({
  btnClass,
  amount,
  description,
}: {
  btnClass: string
  amount: number
  description: string
}) => {
  const handleClick = async () => {
    const formData = new FormData()
    formData.append('amount', amount.toString())
    formData.append('description', description)
    const res = await GetLandingurl(formData)
    window.location.href = res.data
  }

  return (
    <div>
      <button className={btnClass} onClick={handleClick}>
        Buy Now
      </button>
    </div>
  )
}

export default LandingGUI
