

import { cookies } from 'next/headers'

export const PaymentStatusAction = async (id: string, formData: FormData) => {

    const status = formData.get('status')
    const transaction_id = formData.get('transaction_id')
    const amount = Number(formData.get('amount'))
    const appPackage = formData.get('package')
    const url = process.env.NEXT_PUBLIC_API_URL as string
    const token = cookies().get('access_token')?.value

    try {
        const res = await fetch(`${url}payment/payment-status/paymentId/${id}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ status, transaction_id, amount, package: appPackage }),
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error("payment update failed", error)
    }
}


export const InquirePaymentStatus = async (transactionId: string) => {

    const url = process.env.NEXT_PUBLIC_API_URL as string
    const token = cookies().get('access_token')?.value
    console.log("Transaction Id: ", transactionId)
    try {
        const res = await fetch(`${url}payment/inquire-transaction`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ transaction_id: transactionId }),
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error("payment update failed", error)
        return error
    }
}

