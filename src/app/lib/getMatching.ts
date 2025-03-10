import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_API_URL as string

export const getMatchingUsers = async (page: number) => {
    const token = cookies().get('access_token')?.value

    try {
        const response = await fetch(`${url}user/browse?page=${page}`, {
            cache: 'no-store',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json()
        return data?.data
    } catch (error) {
        console.log(error)
        return {
            users: [],
            pageData: {
                total: 0,
                perPage: 10,
                currentPage: page,
                totalPages: page
            }
        }
    }
}