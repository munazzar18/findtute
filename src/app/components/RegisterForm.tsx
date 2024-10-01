'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

interface RegisterFormProps {
  getLoginData: (values: {
    username: string
    email: string
    password: string
    roles: string
  }) => Promise<Response>
}

interface Response {
  error: string
  message: string
  statusCode: number
  status: boolean
  data: {
    email: string
    id: string
    username: string
    roles: string
  }
}

const RegisterForm: React.FC<RegisterFormProps> = ({ getLoginData }) => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, isSetLoading] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      roles: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Username must be 3 characters or more')
        .max(30, 'Username must be 30 characters or less')
        .required('Username is required')
        .label('Username'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
        .label('Email'),
      password: Yup.string()
        .min(8, 'Password must be 8 characters or more')
        .required('Password is required')
        .label('Password'),
      roles: Yup.string().required('Role is required').label('Role'), // Role validation
    }),
    onSubmit: async (values) => {
      isSetLoading(true)
      let res = await getLoginData(values)
      try {
        if (res.statusCode !== 200 && res.error === 'Unauthorized') {
          toast.error(res.message)
        } else if (res.status === false) {
          toast.error(res.message)
        } else {
          toast.success(res.message)
          const encodedEmail = encodeURIComponent(res.data.email)
          router.push(`/auth/verify-otp/${encodedEmail}`)
        }
      } catch (error) {
        console.error(error)
      }
      isSetLoading(false)
    },
  })

  return (
    <div className="flex justify-center items-start ">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-center gap-2 justify-center">
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-xl">Username</span>
              </div>
              <input
                type="text"
                autoComplete="on"
                className="input input-bordered input-primary w-80"
                placeholder="Enter you username"
                color={formik.errors.username ? 'danger' : 'default'}
                onChange={(e) =>
                  formik.setFieldValue('username', e.target.value)
                }
                value={formik.values.username}
              />
            </label>
            <span className="flex justify-start">
              {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
              ) : null}
            </span>
          </div>
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-xl">Email</span>
              </div>
              <input
                type="email"
                autoComplete="on"
                className="input input-bordered input-primary w-80"
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
            <label className="form-control">
              <div className="label">
                <span className="label-text text-xl">Password</span>
              </div>
              <div className="relative">
                <input
                  type={isVisible ? 'text' : 'password'}
                  className=" input input-bordered input-primary w-80"
                  placeholder="Enter you password"
                  color={formik.errors.password ? 'danger' : 'default'}
                  onChange={(e) =>
                    formik.setFieldValue('password', e.target.value)
                  }
                  value={formik.values.password}
                />
                <button
                  className="focus:outline-none absolute right-2 top-1/3 "
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FaEye className="text-md text-default-400 pointer-events-none" />
                  ) : (
                    <FaEyeSlash className="text-md text-default-400 pointer-events-none" />
                  )}
                </button>
              </div>
            </label>
            <span className="flex justify-start">
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </span>
          </div>
          <div>
            <div className=" shadow-md rounded-lg p-4 w-80">
              <label className="text-xl" htmlFor="roles">
                Who are you?
              </label>
              <div className="flex justify-between gap-2">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text me-2">Student</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-primary"
                      value="student"
                      onChange={(e) =>
                        formik.setFieldValue('roles', e.target.value)
                      }
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text me-2">Parent</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-primary"
                      value="parent"
                      onChange={(e) =>
                        formik.setFieldValue('roles', e.target.value)
                      }
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text me-2">Teacher</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-primary"
                      value="teacher"
                      onChange={(e) =>
                        formik.setFieldValue('roles', e.target.value)
                      }
                    />
                  </label>
                </div>
              </div>
              <span>
                {formik.touched.roles && formik.errors.roles ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.roles}
                  </div>
                ) : null}
              </span>
            </div>
          </div>
          <div>
            <p className="text-destructive-foreground">
              Already have an account?{' '}
              <Link className="text-secondary font-bold" href="/auth/login">
                Login
              </Link>
            </p>
          </div>
          <div>
            {isLoading ? (
              <button
                disabled
                className="w-72 text-lg bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.2] customBtn"
              >
                <span className="loading loading-spinner loading-xs"></span>
                Please wait
              </button>
            ) : (
              <button
                type="submit"
                aria-label="Submit"
                className="w-72 text-lg bg-green text-cream-foreground rounded-md max-h-1  !leading-[0.2] customBtn"
              >
                Register
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
