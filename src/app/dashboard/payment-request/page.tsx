import React from 'react'

const PaymentRequest = ({
  searchParams,
}: {
  searchParams: { plan: string }
}) => {
  const { plan } = searchParams
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          You are requesting for {plan} plan
        </h1>
      </div>
      <div>Here will Third party payment gateway will be implmented...</div>
    </>
  )
}

export default PaymentRequest
