import VerifyOTPForm from '@/app/components/VerifyOTPForm'
import { cookies } from 'next/headers'

interface Response {
  error: string
  message: string
  statusCode: number
  status: boolean
  data: {
    access_token: string
    user: {
      email: string
      id: string
      username: string
      role: string
    }
  }
}

const VerifyOtp = ({ params }: { params: { slug: string } }) => {
  const email = params.slug
  const decodedEmail = decodeURIComponent(email)

  const verifyOtpData = async (formData: {
    email: string
    otp: string
  }): Promise<Response> => {
    'use server'

    const email = formData.email
    const otp = formData.otp
    const saveCookes = cookies()
    const url = process.env.NEXT_PUBLIC_API_URL as string

    const res = await fetch(`${url}auth/verify-otp`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    })
    const auth = await res.json()
    if (auth.statusCode && auth.statusCode !== 200) {
      return auth
    } else if (auth.status && auth.status === false) {
      return auth
    } else {
      const token = auth?.data?.access_token

      saveCookes.set('access_token', token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 30,
      })
      return auth
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen align-middle">
      <div className="text-center">
        <h1 className="text-3xl">
          Please enter the One-Time Password to verify your email
        </h1>
        <h3 className="text-xl">
          A One-time Password has been sent to your email
        </h3>
        <div>
          <VerifyOTPForm
            verifyOtpData={verifyOtpData}
            getEmail={decodedEmail}
          />
        </div>
      </div>
    </div>
  )
}

export default VerifyOtp
