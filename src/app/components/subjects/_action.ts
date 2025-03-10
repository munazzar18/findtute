"use server"
import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_API_URL as string

const getCookies = cookies()

const token = getCookies.get('access_token')?.value

if (!token) {
    throw new Error('Token not found')
}

export const CreateSubjectAction = async (formData: FormData) => {
    const subject = formData.get('subject')
    const res = await fetch(`${url}subjects`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject }),
    })
    const data = await res.json()
    return data
}

export const EditSubjectAction = async (id: string, formData: FormData) => {
    const res = await fetch(`${url}subjects/${id}`, {
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

export const GetSubjectByIdAction = async (id: string) => {
    const res = await fetch(`${url}subjects/id/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    return data
}

export const DeleteSubjectAction = async (id: string) => {
    const res = await fetch(`${url}subjects/id/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    return data
}