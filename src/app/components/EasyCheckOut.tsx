'use client' // Ensures this component is treated as a client-side component

import React from 'react'
import aesjs from 'aes-js'
import { Buffer } from 'buffer' // Import Buffer for browser compatibility

const Checkout: React.FC = () => {
  const generateMerchantHash = (
    data: Record<string, string | undefined>
  ): string => {
    // Step 1: Create the sample string
    const sampleString = Object.entries(data)
      .filter(([, value]) => value !== undefined) // Exclude optional fields if not provided
      .map(([key, value]) => `${key}=${value}`)
      .join('&')

    const hashKey = 'MJEO4S24659ASL8I' // Your actual hash key

    // Convert the hash key to a byte buffer
    const keyBuffer = aesjs.utils.utf8.toBytes(hashKey)

    // Pad and convert the sample string to a byte buffer
    const inputBuffer = aesjs.padding.pkcs7.pad(
      aesjs.utils.utf8.toBytes(sampleString)
    )

    // Encrypt the input buffer
    const escEcb = new aesjs.ModeOfOperation.ecb(keyBuffer)
    const encryptedBytes = escEcb.encrypt(inputBuffer)

    // Convert encrypted bytes to base64
    const encryptedData = Buffer.from(encryptedBytes).toString('base64')

    return encryptedData
  }

  const loadIframe = (iframeName: string, url: string) => {
    // Gather input values with type assertion
    const storeID = (document.getElementById('storeId') as HTMLInputElement)
      ?.value
    const amount = (document.getElementById('amount') as HTMLInputElement)
      ?.value
    const orderID = (document.getElementById('orderId') as HTMLInputElement)
      ?.value

    const token = (document.getElementById('token') as HTMLInputElement)?.value
    const postBackURL = (
      document.getElementById('postBackURL') as HTMLInputElement
    )?.value
    const merchantPaymentMethod = (
      document.getElementById('merchantPaymentMethod') as HTMLInputElement
    )?.value

    const hash = generateMerchantHash({
      amount,
      expiryDate: token,
      merchantPaymentMethod,
      orderRefNum: orderID,
      paymentMethod: 'MA_PAYMENT_METHOD',
      postBackURL,
      storeId: storeID,
      timeStamp: new Date().toISOString().split('Z')[0],
    })

    // Prepare parameters for URL
    const params = new URLSearchParams({
      storeId: storeID, // Default to an empty string if null
      orderId: orderID,
      transactionAmount: amount,
      transactionType: 'MA_PAYMENT_METHOD',
      tokenExpiry: token,
      postBackURL: postBackURL,
      merchantPaymentMethod: merchantPaymentMethod,
      encryptedHashRequest: hash,
      timeStamp: new Date().toISOString().split('Z')[0],
    })

    // Get iframe element
    const iframe = document.getElementById(
      iframeName
    ) as HTMLIFrameElement | null
    if (iframe && storeID && orderID) {
      // Set iframe src with parameters
      iframe.src = `${url}?${params.toString()}`
      iframe.style.display = 'block' // Show iframe
    }
  }

  // https://easypaystg.easypaisa.com.pk/tpg/?storeId=664939&orderId=MANT12345&transactionAmount=500.0&transactionType=InitialRequest&tokenExpiry=20241231%20111111&bankIdentificationNumber=&encryptedHashRequest=WLzF+DuDSzz5Upu8BX8MVzJPWRpJKHR9uTamvDmjgBe6kNKXe5FSheaw0hTw5bwv5ql2A0atT1nVhHVmzDKWelKLAUARCyCxZCV5iCJySGcOHq2yYGxCpAVCVgl8v3wLBYEbNAVh80OHcTIsakLUQxW46y0FdJfwR3J39eY5nTVvpP9ipphcQZLbJRf3QYsJb2bskU0FQtW7tRzOWC2PysdrXfBmQMk/IUdkWHI01O4PrwJhOyGhkCLl6RsRj+9DPsxKYJ5odeUXlyE3Zq+/Gx//ZXC7EpMK6FwIzXrEdOi8z1mqmWiohKwl9F0SmBcf

  return (
    <div>
      {/* Required hidden inputs */}
      <input type="hidden" id="storeId" value="664939" />
      <input type="hidden" id="amount" value="10" />
      <input type="hidden" id="orderId" value="MANT12345" />
      <input type="hidden" id="token" value="20241231 111111" />
      {/* <input type="hidden" id="bankId" value="" /> */}
      <input
        type="hidden"
        id="postBackURL"
        value="http://localhost:3000/payment-completed"
      />
      <input
        type="hidden"
        id="merchantPaymentMethod"
        value="MA_PAYMENT_METHOD"
      />

      {/* Payment button */}
      <button
        type="button"
        id="submitPaymentMethod"
        onClick={() =>
          loadIframe(
            'easypay-iframe',
            'https://easypaystg.easypaisa.com.pk/tpg'
          )
        }
      >
        Continue to Easypay Portal
      </button>

      {/* Easypaisa iframe */}
      <iframe
        id="easypay-iframe"
        name="easypay-iframe"
        src="about:blank"
        width="100%"
        height="500px"
        style={{ display: 'none' }} // Initially hidden until iframe loads
      ></iframe>
    </div>
  )
}

export default Checkout
