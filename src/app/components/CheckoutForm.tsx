'use client'

import React from 'react'

const CheckoutForm = ({
  amount,
  orderRefNum,
  postBackURL,
  storeId,
}: {
  amount: number
  orderRefNum: string
  postBackURL: string
  storeId: number
}) => {
  return (
    <form
      action="https://easypay.easypaisa.com.pk/easypay/Index.jsf"
      method="POST"
      target="_blank"
    >
      <input id="storeId" name="storeId" value={storeId} type="hidden" />
      <input id="amount" name="amount" value={amount} type="hidden" />
      <input
        id="postBackURL"
        name="postBackURL"
        value={postBackURL}
        type="hidden"
      />
      <input
        id="orderRefNum"
        name="orderRefNum"
        value={orderRefNum}
        type="hidden"
      />
      <input id="autoRedirect" name="autoRedirect" value="1" type="hidden" />

      {/* Optional fields */}
      <input
        id="expiryDate"
        name="expiryDate"
        value="20241231 235959"
        type="hidden"
      />
      <input
        id="paymentMethod"
        name="paymentMethod"
        value="MA_PAYMENT_METHOD"
        type="hidden"
      />
      <input
        id="emailAddr"
        name="emailAddr"
        value="customer@example.com"
        type="hidden"
      />
      <input
        id="mobileNum"
        name="mobileNum"
        value="03325241789"
        type="hidden"
      />
      {/* <input
        id="bankIdentifier"
        name="bankIdentifier"
        value="BAFL"
        type="hidden"
      /> */}

      <button className="btn btn-primary" type="submit">
        {/* <img src="/checkout-button-with-logo.png" alt="Pay with EasyPaisa" /> */}
        <input type="image" src="checkout-button-with-logo.png" name="pay" />
      </button>
    </form>
  )
}

export default CheckoutForm
