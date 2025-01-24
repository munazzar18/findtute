'use server'
import { cookies } from "next/headers";

export const GetLandingurl = async (formData: FormData) => {
    const token = cookies().get('access_token')?.value
    const url = process.env.NEXT_PUBLIC_API_URL as string

    const amount = Number(formData.get('amount'))
    const description = formData.get('description')
    const applicationPackage = formData.get('package')

    if (!amount && !token && !description) {
        return []
    }

    try {
        const response = await fetch(`${url}payment/create-transaction`, {
            cache: 'no-store',
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                amount,
                description,
                package: applicationPackage

            })
        })
        const data = await response.json()

        return data

    } catch (error) {
        console.log(error)
        return []
    }
}
