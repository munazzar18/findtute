'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Input } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { RadioGroup, Radio } from '@nextui-org/react'

interface RegisterFormProps {
  getLoginData: (values: {
    email: string
    password: string
    role: string
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

const RegisterForm: React.FC<RegisterFormProps> = ({ getLoginData }) => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, isSetLoading] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      role: 'parents', // Default role value
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
      role: Yup.string().required('Role is required').label('Role'), // Role validation
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
          router.push('/')
        }
      } catch (error) {
        console.error(error)
      }
      isSetLoading(false)
    },
  })

  return (
    <div className="flex justify-center items-start min-h-screen">
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
            <div className="w-72 shadow-lg rounded-lg p-4">
              <label className="text-sm text-gray-700 block mb-2">Who Are You</label>
              <RadioGroup
  value={formik.values.role}
  onChange={(e) => formik.setFieldValue('role', e.target.value)}
>
    <Radio value="parents">Parents</Radio>
    <Radio value="teacher">Teacher</Radio>
    <Radio value="student">Student</Radio>
  
</RadioGroup>

              {formik.touched.role && formik.errors.role ? (
                <div className="text-red-500 text-sm mt-2">{formik.errors.role}</div>
              ) : null}
            </div>
          </div>
          <div>
            <Button
              type="submit"
              isLoading={isLoading}
              aria-label="Submit"
              className="w-72 text-lg bg-green text-cream-foreground rounded-md max-h-1 leading-[0.2] btn"
            >
              Register
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
