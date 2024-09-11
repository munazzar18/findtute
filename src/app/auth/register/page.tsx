'use server'
import RegisterForm from '@/app/components/RegisterForm'
import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'

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

const Register = () => {
  const getLoginData = async (formData: {
    email: string
    password: string
    roles: string
  }): Promise<Response> => {
    'use server'

    const email = formData.email
    const password = formData.password
    const roles = formData.roles
    const saveCookes = cookies()
    const url = process.env.NEXT_PUBLIC_API_URL as string

    const res = await fetch(`${url}auth/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, roles }),
    })
    try {
      const auth = await res.json()
      console.log('Register:', auth)
      if (auth.statusCode && auth.statusCode !== 200) {
        return auth
      }
      if (auth.status && auth.status === false) {
        return auth
      }
      const token = auth.data?.email
      if (!token) {
        console.error('No email found in auth.data')
        return auth
      }
      const user = auth?.data
      saveCookes.set('user', JSON.stringify(user), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 30,
      })
      return auth
    } catch (error) {
      console.error('Failed to process response:', error)
      return {
        error: 'Failed to process response',
        message: '',
        statusCode: 500,
        status: false,
        data: {
          email: '',
          id: '',
          username: '',
          roles: '',
        },
      }
    }
  }

  return (
    <section className="bg-warm relative min-h-screen w-full">
      <div className="flex w-full items-center justify-center">
        <Link
          className="mt-2 text-secondary-foreground hover:text-primary"
          href="/"
        >
          Back to home
        </Link>
      </div>
      <div className="container relative">
        <div className="flex flex-col items-center text-center relative z-10 ">
          <h1 className="font-normal xl:text-[70px] lg:text-6xl md:text-5xl text-4xl xl:leading-[128%] lg:leading-[125%] md:leading-[120%] max-w-[776px]">
            <span className="relative">Welcome</span>
            <span className="font-bold"> to{'    '} </span>
            <span className="relative font-bold text-destructive-foreground">
              FindTute
            </span>
          </h1>
          <div className="bg-background rounded-lg shadow-md p-8 mt-10">
            <RegisterForm getLoginData={getLoginData} />
          </div>
          <div className="flex absolute right-[68px] top-14 animate-skw">
            <img
              src="/assets/images/shapes/shap.png"
              alt="shap-2"
              className="w-7.5 h-12.5 relative top-9"
            />
            <img src="/assets/images/shapes/shap.png" alt="shap-1" />
            <img
              src="/assets/images/shapes/shap.png"
              alt="shap-2"
              className="w-5 h-8 -mt-7"
            />
          </div>
        </div>
        <div className="absolute left-0 lg:top-0 top-10 lg:max-w-full max-w-[200px] sm:block hidden animate-up-down mt-10">
          <img src="/assets/images/banner/boy_img_1.png" alt="banner-img-1" />
          <span className="absolute -left-2.5 top-[9px] border-2 border-primary rounded-[125px] w-full h-full"></span>
        </div>

        <div className="absolute right-0 top-48 lg:block hidden animate-up-down">
          <img src="/assets/images/banner/boy_img_2.png" alt="banner-img-2" />
          <span className="absolute -left-2.5 top-[9px] border-2 border-secondary rounded-[125px] max-h-[369px] w-full h-full"></span>
        </div>

        <div className="lg:block hidden">
          <div className="absolute left-0 top-[60px] animate-left-right-2">
            <img src="/assets/images/banner/left-circle-1.png" alt="img" />
          </div>
          <div className="absolute left-[37px] top-[186px] animate-left-right-2">
            <img src="/assets/images/banner/left-circle-2.png" alt="img" />
          </div>
          <div className="absolute right-0 bottom-[165px] animate-up-down">
            <img src="/assets/images/banner/right-circle.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
