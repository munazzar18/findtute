'use server'

import { cookies } from "next/headers"

interface User {
    id: string
    email: string
    role: string
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
        const res = await fetch(`${url}grade`, { next: { revalidate: 10 } })
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const GetSubjects = async () => {
    try {
        const res = await fetch(`${url}subjects`, { next: { revalidate: 10 } })
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
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

export const UpdateProfileAction = async (formData: FormData) => {
    const first_name = formData.get('first_name')
    const last_name = formData.get('last_name')
    const cnic = formData.get('cnic')
    const mobile = formData.get('mobile')
    const address = formData.get('address')
    const latitude = Number(formData.get('latitude'))
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
            body: JSON.stringify({ first_name, last_name, cnic, mobile, address, latitude, longitude, avatar, preference, education, experience, grades_ids, subjects_ids }),

        })
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}