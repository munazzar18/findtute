'use server'

import { cookies } from "next/headers"

interface User {
    id: string
    email: string
    role: string
    is_verified: boolean
}

const url = process.env.NEXT_PUBLIC_API_URL as string

const token = cookies().get('access_token')?.value
const userCookies = cookies().get('user')
let user: User | null = null

try {
    if (userCookies && userCookies.value) {
        user = JSON.parse(userCookies.value)
    }
} catch (error) {
    console.error('Error parsing user cookie:', error)
}

export const GetGrades = async () => {
    try {
        const res = await fetch(`${url}grade?page=1`, { next: { revalidate: 10 } })
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const GetSubjects = async () => {
    try {
        const res = await fetch(`${url}subjects/all`, {
            cache: 'no-cache',

        })

        const data = await res.json()
        return data.data
    } catch (error) {
        console.error(error)
    }
}

export const GetCountry = async () => {
    try {
        const res = await fetch(`${url}location/countries`, { next: { revalidate: 10 } })
        const data = await res.json()
        return data.data
    } catch (error) {
        console.error(error)
    }
}

export const GetState = async (countryCode: string) => {
    try {
        const res = await fetch(`${url}location/states/${countryCode}`, { next: { revalidate: 10 } })
        const data = await res.json()
        return data.data
    } catch (error) {
        console.error(error)
    }
}

export const GetCity = async (countryCode: string, stateCode: string) => {
    try {
        const res = await fetch(`${url}location/cities/${countryCode}/${stateCode}`, { next: { revalidate: 10 } })
        const data = await res.json()
        return data.data
    } catch (error) {
        console.error(error)
    }
}

export const UploadProfileImageAction = async (formData: FormData) => {
    try {
        const res = await fetch(`${url}user/upload`, {
            method: 'POST',
            body: formData,
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const GetProfileByIdAction = async () => {
    const res = await fetch(`${url}user/id/${user?.id}`, {
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    const data = await res.json()
    return data.data
}


export const UpdateProfileAction = async (formData: FormData) => {
    const first_name = formData.get('first_name')
    const last_name = formData.get('last_name')
    const cnic = formData.get('cnic')
    const mobile = formData.get('mobile')
    const country = formData.get('country')
    const state = formData.get('state')
    const city = formData.get('city')
    const address = formData.get('address')
    const lattitude = Number(formData.get('lattitude'))
    const longitude = Number(formData.get('longitude'))
    const avatar = formData.get('avatar')
    const preference = formData.get('preference')
    const education = formData.get('education')
    const experience = formData.get('experience')
    const grades_ids = formData.get('grades_ids')
    const subjects_ids = formData.get('subjects_ids')
    try {
        const res = await fetch(`${url}user/update-profile/${user?.id}`, {
            method: 'PUT',
            headers: {

                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ first_name, last_name, cnic, mobile, country, state, city, address, lattitude, longitude, avatar, preference, education, experience, grades_ids, subjects_ids }),

        })
        const data = await res.json()
        cookies().set('user', JSON.stringify({
            ...user,
            is_verified: data?.data.is_verified
        }), {
            secure: true,
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 30,
        })
        return data
    } catch (error) {
        console.error(error)
    }
}