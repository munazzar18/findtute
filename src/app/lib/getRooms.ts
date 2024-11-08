import { cookies } from "next/headers"


export const getRooms = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL as string
    const token = cookies().get('access_token')?.value

    try {
        const response = await fetch(`${url}chat/rooms`, {
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