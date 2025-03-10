import { cookies } from "next/headers";

export const getAllUsers = async () => {
    const token = cookies().get('access_token')?.value
    const url = process.env.NEXT_PUBLIC_API_URL as string

    try {
        const response = await fetch(`${url}user`, {
            cache: 'no-store',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json()
        return data?.data
    } catch (error) {
        console.log(error)
        return []
    }
}
