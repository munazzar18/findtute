'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

interface LoginFormProps {
  getLoginData: (values: {
    email: string
    password: string
  }) => Promise<Response>
}

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

const LoginForm: React.FC<LoginFormProps> = ({ getLoginData }) => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, isSetLoading] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
        .label('Email'),
      password: Yup.string()
        .min(8, 'Password must be 8 characters or more')
        .required('Password is required')
        .label('Password'),
    }),
    onSubmit: async (values) => {
      isSetLoading(true)
      let res = await getLoginData(values)
      try {
        if (res.statusCode !== 200 && res.error === 'Unauthorized') {
          toast.error(res.message)
          //how to navigate to home here
        } else if (res.status === false) {
          toast.error(res.message)
        } else {
          toast.success(res.message)
          router.push('/')
        }
      } catch (error) {
        console.error(error)
      }
      isSetLoading(false)
    },
  })

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-center gap-3 justify-center">
          <div>
            <label className="input input-bordered input-primary flex items-center gap-2 w-80">
              Email
              <input
                name="email"
                tabIndex={0}
                type="email"
                className="grow"
                placeholder="Enter you email"
                color={formik.errors.email ? 'danger' : 'default'}
                onChange={(e) => formik.setFieldValue('email', e.target.value)}
                value={formik.values.email}
              />
            </label>
            <span className="flex justify-start">
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </span>
          </div>
          <div>
            <div className="flex justify-end">
              <Link
                className="text-destructive-foreground font-bold"
                href="/auth/forgot-password"
              >
                Forgot Password
              </Link>
            </div>
            <div>
              <label className="input input-bordered input-primary flex items-center gap-2 w-80">
                Password
                <input
                  name="password"
                  tabIndex={1}
                  type={isVisible ? 'text' : 'password'}
                  className="grow"
                  placeholder="Enter your password"
                  color={formik.errors.password ? 'danger' : 'default'}
                  onChange={(e) =>
                    formik.setFieldValue('password', e.target.value)
                  }
                  value={formik.values.password}
                />
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FaEye className="text-md text-default-400 pointer-events-none" />
                  ) : (
                    <FaEyeSlash className="text-md text-default-400 pointer-events-none" />
                  )}
                </button>
              </label>
              <span className="flex justify-start">
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </span>
            </div>
            <span className="flex justify-start">
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </span>
          </div>
          <div>
            <p className="text-destructive-foreground">
              Don't have an account?{' '}
              <Link className="text-secondary font-bold" href="/auth/register">
                Register
              </Link>
            </p>
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
                Login
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
