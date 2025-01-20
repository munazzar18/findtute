

import { cookies } from 'next/headers'

const paymentStatusAction = async (formData: FormData,id: string) => {

    const status = formData.get('status') as string
    const url = process.env.NEXT_PUBLIC_API_URL as string
    const token = cookies().get('auth_token')?.value

    try {
        const res = await fetch(`${url}payment/payment-status/paymentId/${id}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ status }),
        })
        const data = await res.json()
        return data
       } catch (error) {
        console.error("payment update failed", error)
       }
}

export { paymentStatusAction }