'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ResendOTPAction,
  ResetPasswordAction,
} from '../auth/forgot-password/_action'
import { useFormStatus } from 'react-dom'

const ForgetPasswordForm = ({ getMail }: { getMail: string }) => {
  const [loading, setLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()
  const toggleVisibility = () => setIsVisible(!isVisible)

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
    const formData = new FormData()
    formData.append('email', getMail)
    const res = await ResendOTPAction(formData)

    if (res.status && res.status === true) {
      toast.success(res.message)
      setIsResendEnabled(false)
      setSecondsLeft(180)
      localStorage.setItem(
        'otpTimer',
        (new Date().getTime() + 180 * 1000).toString()
      )
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
      password: '',
      otp: '',
      email: getMail,
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .label('Password'),

      otp: Yup.string().required('OTP is required').label('OTP'),

      email: Yup.string().required('Email is required').label('Email'),
    }),

    onSubmit: async (values) => {
      setLoading(true)
      const formData = new FormData()
      formData.append('email', values.email)
      formData.append('password', values.password)
      formData.append('otp', values.otp)
      let res = await ResetPasswordAction(formData)
      if (res.status && res.status === true) {
        toast.success(res.message)
        router.push('/auth/login')
      } else {
        toast.error(res.message)
      }
      setLoading(false)
    },
  })

  return (
    <div className="flex justify-center items-center align-middle min-h-screen">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            hidden={true}
          />
        </div>
        <div className="flex flex-col items-center gap-3 justify-center">
          <div>
            <label className="input input-bordered input-primary flex items-center gap-2 w-80">
              Password
              <input
                name="password"
                tabIndex={0}
                type={isVisible ? 'text' : 'password'}
                className="grow"
                placeholder="Enter your new password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    className="text-md text-default-400 pointer-events-none"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="text-md text-default-400 pointer-events-none"
                  />
                )}
              </button>
            </label>
          </div>
          <span>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </span>

          <div>
            <label className="input input-bordered input-primary flex items-center gap-2 w-80">
              OTP
              <input
                name="otp"
                tabIndex={1}
                type="text"
                className="grow"
                placeholder="Enter one time password"
                onChange={formik.handleChange}
                value={formik.values.otp}
              />
            </label>
          </div>
          <span>
            {formik.touched.otp && formik.errors.otp ? (
              <div>{formik.errors.otp}</div>
            ) : null}
          </span>

          <div>
            {loading ? (
              <button
                disabled
                className="w-72 text-lg bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.2] btn"
              >
                <span className="loading loading-spinner loading-xs">
                  Please wait
                </span>
              </button>
            ) : (
              <button
                type="submit"
                aria-label="Submit"
                className="w-72 text-lg bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.2] btn"
              >
                Submit
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
                  className="font-bold text-green"
                  type="button"
                >
                  Resend OTP
                </button>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default ForgetPasswordForm
