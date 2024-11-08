import CheckoutForm from '@/app/components/CheckoutForm'
import EasyCheckOut from '@/app/components/EasyCheckOut'
import React from 'react'

const PaymentRequest = () => {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Payment Request</h1>
      </div>
      <div>
        {/* <CheckoutForm
          amount={100.0}
          orderRefNum="MHNS1354"
          postBackURL="http://localhost:3000/dashboard/payment-completed"
          storeId={664939}
        /> */}
        <EasyCheckOut />
      </div>
    </>
  )
}

export default PaymentRequest
