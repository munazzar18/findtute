'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Input } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

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
        <div className="flex flex-col items-center gap-8 justify-center">
          <div>
            <Input
              type="email"
              label="Email"
              labelPlacement="inside"
              variant="bordered"
              placeholder="Enter your email"
              isInvalid={formik.errors.email ? true : false}
              color={formik.errors.email ? 'danger' : 'default'}
              onChange={(e) => formik.setFieldValue('email', e.target.value)}
              value={formik.values.email}
              className="w-72 text-xl"
              errorMessage={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ''
              }
            />
            <span>
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </span>
          </div>
          <div>
            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              color={formik.errors.password ? 'danger' : 'default'}
              onChange={(e) => formik.setFieldValue('password', e.target.value)}
              value={formik.values.password}
              isInvalid={formik.errors.password ? true : false}
              errorMessage={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ''
              }
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-2xl text-default-400 pointer-events-none"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="text-2xl text-default-400 pointer-events-none"
                    />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              className="w-72"
            />
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
            <Button
              type="submit"
              isLoading={isLoading}
              aria-label="Submit"
              className="w-72 text-lg bg-green text-cream-foreground rounded-md max-h-1 leading-[0.2] btn"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
