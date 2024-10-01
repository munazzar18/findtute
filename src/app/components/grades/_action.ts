"use server"
import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_API_URL as string

const getCookies = cookies()

const token = getCookies.get('access_token')?.value

if (!token) {
    throw new Error('Token not found')
}


export const CreateGradeAction = async (formData: FormData) => {
    const grade = formData.get('grade')
    console.log("FORMDATA:", grade)
    const res = await fetch(`${url}grade`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ grade }),
    })
    const data = await res.json()
    return data
}

export const DeleteGradeAction = async (id: string) => {
    const res = await fetch(`${url}grade/id/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    return data
}


export const EditGradeAction = async (id: string, formData: FormData) => {
    const res = await fetch(`${url}grade/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData }),
    })
    const data = await res.json()
    return data
}

export const GetGradeByIdAction = async (id: string) => {
    const res = await fetch(`${url}grade/id/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    return data
}