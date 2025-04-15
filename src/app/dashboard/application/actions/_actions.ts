'use server'

import { cookies } from 'next/headers'

const url = process.env.NEXT_PUBLIC_API_URL as string


export const StudentApplyAction = async (applicationId: string) => {
    const token = cookies().get('access_token')?.value

    try {
        const res = await fetch(`${url}application/student-apply/${applicationId}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error("payment update failed", error)
    }
}
