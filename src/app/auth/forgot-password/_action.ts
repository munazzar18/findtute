'use server'
import { cookies } from "next/headers"


const saveCookies = cookies()
const ForgotPasswordAction = async (formData: FormData) => {


    const email = formData.get('email') as string
    const url = process.env.NEXT_PUBLIC_API_URL as string

    try {
        const res = await fetch(`${url}auth/forgot-password`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error("Error to send forgot password:", error)
    }



}

export default ForgotPasswordAction


const ResetPasswordAction = async (formData: FormData) => {
    const password = formData.get('password') as string
    const otp = formData.get('otp') as string
    const email = formData.get('email') as string

    const url = process.env.NEXT_PUBLIC_API_URL as string

    try {
        const res = await fetch(`${url}auth/reset-password`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, otp }),
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error("Error to send reset password:", error)
    }
}

const ResendOTPAction = async (formData: FormData) => {

    const email = formData.get('email') as string
    console.log(email)
    const url = process.env.NEXT_PUBLIC_API_URL as string

    try {
        const res = await fetch(`${url}auth/resend-otp`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error("Error to send resend otp:", error)
    }
}

export { ResetPasswordAction, ResendOTPAction }