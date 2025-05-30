import { cookies } from "next/headers";

export const getAllUsers = async (page: number) => {
    const token = cookies().get('access_token')?.value
    const url = process.env.NEXT_PUBLIC_API_URL as string

    try {
        const response = await fetch(`${url}user?page=${page}`, {
            cache: 'no-store',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getOneUserForAdmin = async (id: string) => {
    const token = cookies().get('access_token')?.value
    const url = process.env.NEXT_PUBLIC_API_URL as string

    try {
        const response = await fetch(`${url}user/admin/single-user?userId=${id}`, {
            cache: 'no-store',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}
