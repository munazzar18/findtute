'use client'
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ForgotPasswordAction from '../auth/forgot-password/_action'

const ForgetPasswordForm = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
        .label('Email'),
    }),
    onSubmit: async (values) => {
      setLoading(true)
      const formData = new FormData()
      formData.append('email', values.email)
      let res = await ForgotPasswordAction(formData)
      if (res.status && res.status === true) {
        toast.success(res.message)
        setTimeout(() => {
          router.push('/auth/login')
        }, 5000)
      } else {
        toast.error(res.message)
      }
      setLoading(false)
    },
  })

  return (
    <div className="flex justify-center items-center align-middle min-h-screen">
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
                placeholder="Enter you email here"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </label>
          </div>
          <span>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
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
        </div>
      </form>
    </div>
  )
}

export default ForgetPasswordForm
