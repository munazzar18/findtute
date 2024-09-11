'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface RegisterFormProps {
  getLoginData: (values: {
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
      email: '',
      password: '',
      roles: '',
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
        <div className="flex flex-col items-center gap-4 justify-center">
          <div>
            <label className="input input-bordered input-primary flex items-center gap-2 w-80">
              Email
              <input
                type="email"
                className="grow"
                placeholder="info@findtute.com"
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
            <label className="input input-bordered input-primary flex items-center gap-2 w-80">
              Password
              <input
                type={isVisible ? 'text' : 'password'}
                className="grow"
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
                className="w-72 text-lg bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.2] btn"
              >
                <span className="loading loading-spinner loading-xs"></span>
                Please wait
              </button>
            ) : (
              <button
                type="submit"
                aria-label="Submit"
                className="w-72 text-lg bg-green text-cream-foreground rounded-md max-h-1  !leading-[0.2] btn"
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
