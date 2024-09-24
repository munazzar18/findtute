'use client'

import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { ResendOTPAction } from '../auth/forgot-password/_action'

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

interface VerifyOTPFormProps {
  verifyOtpData: (values: { email: string; otp: string }) => Promise<Response>
}

interface VerifyOTPInputProps {
  getStudentData: VerifyOTPFormProps['verifyOtpData']
  getEmail: string
}

const VerifyOTPForm = ({ verifyOtpData, getEmail }: any) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isResendEnabled, setIsResendEnabled] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(180)

  useEffect(() => {
    const savedTime = localStorage.getItem('otpTimer')
    const now = new Date().getTime()

    if (savedTime) {
      const remainingTime = parseInt(savedTime, 10) - now
      if (remainingTime > 0) {
        setSecondsLeft(Math.floor(remainingTime / 1000))
      } else {
        setIsResendEnabled(true)
        localStorage.removeItem('otpTimer')
      }
    } else {
      localStorage.setItem('otpTimer', (now + secondsLeft * 1000).toString())
    }

    const timerId = setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        const newSeconds = prevSeconds - 1
        localStorage.setItem(
          'otpTimer',
          (new Date().getTime() + newSeconds * 1000).toString()
        )
        return newSeconds
      })
    }, 1000)

    return () => clearInterval(timerId)
  }, [secondsLeft])

  useEffect(() => {
    if (secondsLeft <= 0) {
      setIsResendEnabled(true)
      localStorage.removeItem('otpTimer')
    }
  }, [secondsLeft])

  const handleResendOTP = async () => {
    setIsResendEnabled(false)
    setSecondsLeft(180)
    localStorage.setItem(
      'otpTimer',
      (new Date().getTime() + 180 * 1000).toString()
    )
    const formData = new FormData()
    formData.append('email', getEmail)
    const res = await ResendOTPAction(formData)
    if (res.status && res.status === true) {
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
  }
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`
  }

  const formik = useFormik({
    initialValues: {
      email: getEmail,
      otp: '',
    },
    validationSchema: Yup.object({
      otp: Yup.string()
        .required('One time password is required')
        .min(6, 'OTP must be 6 digits')
        .max(6, 'OTP must be 6 digits')
        .label('One time password'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      let res = await verifyOtpData(values)
      try {
        if (res.statusCode && res.statusCode !== 200) {
          toast.error(res.message)
        } else if (res.status && res.status === false) {
          toast.error(res.message)
        } else {
          toast.success(res.message)
          router.push('/')
        }
      } catch (error) {
        console.error(error)
      }
      setIsLoading(false)
    },
  })

  const handleOTPChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target
    if (/^\d$/.test(value) || value === '') {
      let otpArray = formik.values.otp.split('')
      otpArray[index] = value
      formik.setFieldValue('otp', otpArray.join(''))

      if (value && e.target.nextSibling) {
        ;(e.target.nextSibling as HTMLInputElement).focus()
      }
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const target = e.target as HTMLInputElement
    if (e.key === 'Backspace') {
      if (!formik.values.otp[index] && target.previousElementSibling) {
        ;(target.previousElementSibling as HTMLInputElement).focus()
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-7">
          <input
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            hidden={true}
          />
        </div>
        <div className="mb-7 gap-2">
          {/* OTP Input */}
          <div className="flex gap-2 justify-center">
            {Array(6)
              .fill('')
              .map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="input input-bordered w-12 h-12 text-center text-xl focus:outline-none"
                  value={formik.values.otp[index] || ''}
                  onChange={(e) => handleOTPChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={(e) => {
                    const paste = e.clipboardData.getData('text')
                    const otp = paste.slice(0, 6).split('')
                    otp.forEach((num, idx) => {
                      if (idx < 6) {
                        formik.setFieldValue(`otp[${idx}]`, num)
                      }
                    })
                  }}
                />
              ))}
          </div>
          {formik.errors.otp && formik.touched.otp ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.otp}</p>
          ) : null}
        </div>

        <div>
          {isLoading ? (
            <button
              disabled
              className="w-72 text-lg bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.2] btn"
            >
              <span className="loading loading-spinner loading-xs"></span>
              Please wait
            </button>
          ) : (
            <button
              type="submit"
              aria-label="Submit"
              className="w-72 text-lg bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.2] btn"
            >
              Verify
            </button>
          )}
        </div>

        <div className="mt-4">
          {secondsLeft > 0 ? (
            <p className="text-sm">
              One time password will expire in {formatTime(secondsLeft)}
            </p>
          ) : (
            <>
              <span className="me-1">One time password is expired</span>
              <button
                onClick={handleResendOTP}
                disabled={!isResendEnabled}
                className="font-bold"
              >
                Resend OTP
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  )
}

export default VerifyOTPForm
