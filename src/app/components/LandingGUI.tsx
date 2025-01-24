'use client'
import React, { useState } from 'react'
import { GetLandingurl } from '../lib/getLandingurl'
import Loader from './Loader'

const LandingGUI = ({
  btnClass,
  amount,
  description,
  ApplicationPackage,
}: {
  btnClass: string
  amount: number
  description: string
  ApplicationPackage: string
}) => {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const formData = new FormData()
    formData.append('amount', amount.toString())
    formData.append('description', description)
    formData.append('package', ApplicationPackage)
    const res = await GetLandingurl(formData)
    window.location.href = res.data
    setLoading(false)
  }

  return (
    <div>
      <button disabled={loading} className={btnClass} onClick={handleClick}>
        {loading && <Loader />}
        <span className="ml-3">Buy Now</span>
      </button>
    </div>
  )
}

export default LandingGUI
