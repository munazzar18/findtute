import StudentProfileData from '@/app/components/StudentProfileData'
import { cookies } from 'next/headers'

interface Education {
  institute: string
  degree: string
  year: string
}
interface StudentFormResponse {
  error: string
  message: string
  statusCode: number
  status: boolean
  data: {
    first_name: string
    last_name: string
    cnic: string
    mobile: string
    latitude: number
    longitude: number
    address: string
    avatar: string
    preference: string
    education: [
      {
        institute: string
        degree: string
        year: string
      }
    ]
    user_id: string
    is_active: boolean
    is_deleted: boolean
    is_verified: boolean
    id: string
    created_at: string
    updated_at: string
  }
}

const StudentProfile = () => {
  const getStudentData = async (formData: {
    first_name: string
    last_name: string
    cnic: string
    mobile: string
    grades: string
    subjects: string
    latitude: number
    longitude: number
    address: string
    avatar: string
    preference: string
    education: Education[]
  }): Promise<StudentFormResponse> => {
    'use server'
    const access_token = cookies().get('access_token')?.value
    const url = process.env.NEXT_API_URL as string

    try {
      const res = await fetch(`${url}profile/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(formData),
      })
      const response = await res.json()
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
      return {
        error: 'error',
        message: 'Something went wrong!',
        statusCode: 500,
        status: false,
        data: {
          first_name: '',
          last_name: '',
          cnic: '',
          mobile: '',
          latitude: 0,
          longitude: 0,
          address: '',
          avatar: '',
          preference: '',
          education: [{ institute: '', degree: '', year: '' }],
          user_id: '',
          is_active: false,
          is_deleted: false,
          is_verified: false,
          id: '',
          created_at: '',
          updated_at: '',
        },
      }
    }
  }

  const getGrades = async () => {
    'use server'
    const url = process.env.NEXT_API_URL as string
    const res = await fetch(`${url}grade`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const response = await res.json()
    console.log(response)
    return response
  }

  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-4 sm:px-4 md:px-16 lg:px-24 items-center justify-between mt-4 sm:mt-4 md:mt-8 lg:mt-16 mb-8 sm:mb-8 md:mb-16 lg:mb-24">
      <StudentProfileData
        getStudentData={getStudentData}
        getGrades={getGrades}
      />
    </div>
  )
}

export default StudentProfile
