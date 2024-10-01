'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { PageRedirectionAction } from '../admin/payments/actions/_action'

const InitiatePageRedirection = () => {
  const [formHtml, setFormHtml] = useState('')
  const params = useSearchParams()
  const AuthToken = params.get('AuthToken') || ''
  const ReturnURL = params.get('ReturnURL') || ''
  const OrderId = params.get('OrderId') || ''
  const requestHash = params.get('RequestHash') || ''

  const pageRedirection = async () => {
    const formData = new FormData()

    formData.append('orderId', OrderId)
    formData.append('token', AuthToken)
    formData.append('returnUrl', ReturnURL)
    formData.append('requestHash', requestHash)

    const res = await PageRedirectionAction(formData)
    console.log(res)
  }

  useEffect(() => {
    pageRedirection()
  }, [])

  return (
    <div>
      <h1>Redirecting...</h1>
      <p>Please wait....</p>
    </div>
  )
}

export default InitiatePageRedirection
