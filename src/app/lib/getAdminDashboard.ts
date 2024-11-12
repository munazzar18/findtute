import { cookies } from "next/headers";


const token = cookies().get('access_token')?.value

export const GetAdminDashboard = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL as string

    try {
        const response = await fetch(`${url}dashboard`, {
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
