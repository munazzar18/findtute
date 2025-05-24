'use server'

import { cookies } from 'next/headers'

const url = process.env.NEXT_PUBLIC_API_URL as string


export const StudentApplyAction = async (applicationId: string) => {
    const token = cookies().get('access_token')?.value
    try {
        const res = await fetch(`${url}application/student-apply`, {
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
        console.error("student cannot start discussion", error)
    }
}


export const StudentCancelAction = async (applicationId: string) => {
    const token = cookies().get('access_token')?.value

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