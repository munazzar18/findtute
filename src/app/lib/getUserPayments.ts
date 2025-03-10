
import { cookies } from 'next/headers'

export const getUserPaymentId = async () => {

    const url = process.env.NEXT_PUBLIC_API_URL as string
    const token = cookies().get('access_token')?.value

    try {
        const res = await fetch(`${url}payment/user-payments`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error("Failed to fetch user payment", error)
        return error
    }

}