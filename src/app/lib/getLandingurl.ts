'use server'
import { cookies } from "next/headers";

export const GetLandingurl = async () => {
    const token = cookies().get('access_token')?.value
    const url = process.env.NEXT_PUBLIC_API_URL as string

    try {
        const response = await fetch(`${url}payment/url`, {
            cache: 'no-store',
            method: 'GET'
            
        })
        console.log(response)
        const data = await response.json()
        console.log(data);

    return data

    } catch (error) {
        console.log(error)
        return []
    }
}
