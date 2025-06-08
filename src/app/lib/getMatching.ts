import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_API_URL as string

interface Location {
    geoLat: number;
    geoLong: number;
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
        const params = new URLSearchParams();
        params.append('page', page.toString());

        // Rating filter (using hourly_rate on backend)
        if (rating !== undefined && rating !== null && !isNaN(rating) && rating > 0) {
            params.append('rating', rating.toString());
        }

        // Location filter with proper validation
        if (location !== undefined && location !== null &&
            typeof location === 'object' &&
            typeof location.geoLat === 'number' && location.geoLat !== 0 &&
            typeof location.geoLong === 'number' && location.geoLong !== 0) {

            // Send as separate parameters for easier backend handling
            params.append('lat', location.geoLat.toString());
            params.append('lng', location.geoLong.toString());
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
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error Response:', errorText);
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching matching users:', error)
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


export const getMatchingTutors = async (page: number) => {
    const token = cookies().get('access_token')?.value
    try {
        const res = await fetch(`${url}application/all-applications?page=${page}`, {
            cache: 'no-store',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })

        const data = await res.json()
        return data

    } catch (error) {
        console.error('Error fetching matching users:', error)
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