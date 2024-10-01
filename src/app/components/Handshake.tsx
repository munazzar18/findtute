'use client'
import React, { useState } from 'react'
import { createhandshake } from '../admin/payments/actions/_action'
import { useRouter } from 'next/navigation'

const Handshake = () => {
  const [isLoading, isSetLoading] = useState(false)
  const [orderId, setOrderId] = useState<string>(
    Math.floor(Math.random() * 100000).toString()
  )
  const router = useRouter()

  const handshake = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('orderId', orderId)
    try {
      const res = await createhandshake(formData)
      const requestHash = res.requestHash
      const response = JSON.parse(res.returnedData)
      const queryParams = new URLSearchParams({
        AuthToken: response.AuthToken,
        ReturnURL: response.ReturnURL,
        RequestHash: requestHash,
        OrderId: orderId,
      })
      const url = `/dashboard/payment-request?${queryParams}`
      router.push(url)
    } catch (error) {
      console.error('Error', error)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Proceed to Payment to get started and start teaching!
      </h1>
      <form onSubmit={handshake}>
        <input type="hidden" name="orderId" id="orderId" value={orderId} />
        <button
          type="submit"
          className="text-lg bg-green text-cream-foreground rounded-md max-h-1  !leading-[0.2] customBtn"
        >
          Proceed
        </button>
      </form>
    </div>
  )
}

export default Handshake
