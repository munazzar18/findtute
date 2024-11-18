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
  const merchantHash =
    'gXUgZdZ9gPlqAx16NGXRDQgCGpCvBzWEwIqMgTseab1lypugxH0l5N4BYM9Qae7XfW+jz//ThUkBaN2butyM01E0S1yM2KynwKSB08eHZcr4LjqU4q43j8jS9PN1b2j/1waKyVjC+3nHvgONY/YW9GwhZmgou0pE2to3iMmhTmy19KR4DudoEVfWDCMmaghW/BIo+m3FVNfoWXbPfz/Vh4R5mAGxl0237aHNkfyGYFV8LwIDRwTfo6NaS/WTICg6W0rPr6xLdPeKhjbAsppOMA=='

  return (
    <form
      action="https://easypay.easypaisa.com.pk/easypay/Index.jsf"
      method="POST"
    >
      <input name="storeId" value={storeId} type="hidden" />
      <input name="amount" value={amount} type="hidden" />
      <input name="postBackURL" value={postBackURL} type="hidden" />
      <input name="orderRefNum" value={orderRefNum} type="hidden" />
      <input name="autoRedirect" value={1} type="hidden" />
      <input name="merchantHashedReq" value={merchantHash} type="hidden" />

      {/* Optional fields */}
      <input name="expiryDate" value="20241231 235959" type="hidden" />
      <input name="paymentMethod" value="MA_PAYMENT_METHOD" type="hidden" />
      <input name="emailAddr" value="gex.18@hotmail.com" type="hidden" />
      <input name="mobileNum" value="03047279400" type="hidden" />
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
