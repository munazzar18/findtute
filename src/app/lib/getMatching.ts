import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_API_URL as string

interface Location {
    geoLat: number
    geoLong: number
}


export const getMatchingUsers = async (
    page: number,
    subject?: string,
    grade?: string,
    rating?: number,
    location?: Location
) => {
    const token = cookies().get('access_token')?.value

    try {
        // Build query parameters properly
        const params = new URLSearchParams();
        params.append('page', page.toString());

        // Only append parameters if they have valid values
        if (rating !== undefined && rating !== null && !isNaN(rating)) {
            params.append('rating', rating.toString());
        }

        if (location !== undefined && location !== null && location.geoLat !== 0 && location.geoLong !== 0) {
            params.append('location', location.toString());
        }

        if (subject !== undefined && subject !== null && subject !== '' && subject !== 'undefined') {
            params.append('subject', subject);
        }

        if (grade !== undefined && grade !== null && grade !== '' && grade !== 'undefined') {
            params.append('grade', grade);
        }

        const response = await fetch(`${url}user/match?${params.toString()}`, {
            cache: 'no-store',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.log('Error fetching matching users:', error)
        return {
            data: [],
            pageData: {
                page,
                take: 10,
                itemCount: 0,
                pageCount: 0,
                totalCount: 0
            }
        }
    }
}