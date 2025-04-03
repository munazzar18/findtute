
interface Location {
    geoLat: number
    geoLong: number
}
import { cookies } from 'next/headers'

export const getApplication = async (userId: string) => {
    const url = process.env.NEXT_PUBLIC_API_URL as string
    const token = cookies().get('access_token')?.value

    try {
        const response = await fetch(`${url}application/user-applications`, {
            next: { revalidate: 100 },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json()
        return data.data
    } catch (error) {
        console.log(error)
        return error
    }
}


export const getAllApplications = async (page: number, rating?: number, location?: Location, subject?: string, grade?: string) => {
    const url = process.env.NEXT_PUBLIC_API_URL as string
    const token = cookies().get('access_token')?.value

    try {
        const response = await fetch(`${url}application/all-applications?page=${page}&rating=${rating}&location=${location}&subject=${subject ?? ""}&grade=${grade ?? ""}`, {
            cache: 'no-store',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json()
        return data.data
    } catch (error) {
        console.log(error)
        return error
    }
}