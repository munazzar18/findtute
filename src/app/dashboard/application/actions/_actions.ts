'use server'

import { cookies } from 'next/headers'

const url = process.env.NEXT_PUBLIC_API_URL as string


export const StudentApplyAction = async (formData: FormData) => {
    console.log("I am called")
    const applicationId = formData.get('applicationId')

    if (!applicationId) return

    const token = cookies().get('access_token')?.value
    try {
        const res = await fetch(`${url}accepted-application/create`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ applicationId }),
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log("Error", error)

    }
}


export const StudentCancelAction = async (formData: FormData) => {
    const token = cookies().get('access_token')?.value

    const applicationId = formData.get('applicationId')
    if (!applicationId) return

    try {
        const res = await fetch(`${url}application/student-cancel`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ application_id: applicationId }),
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error("something went wrong to cancel", error)

    }

}