import Pagination from '@/app/components/Pagination'
import StudentApplyBtn from '@/app/components/StudentApplyBtn'
import { findStudents } from '@/app/lib/getMatching'
import { cookies } from 'next/headers'
import Link from 'next/link'

interface Grade {
  id: string
  grade: string
}

interface Subject {
  id: string
  subject: string
}

interface Location {
  geoLat: number
  geoLong: number
}

interface User {
  id: string
  username: string
  email: string
  privacy_terms_conditions: boolean
  roles: string
  email_verified: boolean
  first_name: string | null
  last_name: string | null
  cnic: string | null
  mobile: string | null
  lattitude: number | null
  longitude: number | null
  address: string | null
  city: string | null
  state: string | null
  country: string | null
  hourly_rate: number | null
  monthly_rate: number | null
  avatar: string | null
  preference: string | null
  education: string | null
  experience: string | null
  is_active: boolean
  is_deleted: boolean
  is_verified: boolean
  is_online: boolean
  is_authorized: boolean | null
  socketId: string | null
  created_at: string
  updated_at: string
  grades: Grade[]
  subjects: Subject[]
}

interface Browse {
  status: string
  message: string
  data: {
    users: User[]
    pageData: {
      total: number
      perPage: number
      currentPage: number
      lastPage: number
    }
  }
}

const Browse = async ({
  searchParams,
}: {
  searchParams: {
    page?: string
  }
}) => {
  const authUser = JSON.parse(cookies().get('user')?.value || '{}')
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1
  const applications: Browse = await findStudents(currentPage)

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-8">
        {applications?.data?.users?.map((data) => {
          const initials = data.username.slice(0, 2).toUpperCase()
          const avatarUrl = data.avatar
            ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.avatar}`
            : null

          return (
            <div
              key={data.id}
              className="w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Header Banner */}
              <div className="h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

              {/* Avatar */}
              <div className="relative flex justify-center -mt-12">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={data.first_name || data.username}
                    className="w-24 h-24 rounded-full border-4 border-white object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-semibold text-white border-4 border-white">
                    {initials}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="px-6 py-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {data.first_name
                    ? `${data.first_name} ${data.last_name || ''}`.trim()
                    : data.username}
                </h3>
                <p className="mt-1 text-gray-500">
                  {data.preference || 'No preference'}
                </p>

                <div className="mt-3 text-left text-gray-600 text-sm space-y-1">
                  <p>
                    <span className="font-medium">Subjects:</span>{' '}
                    {data.subjects.length > 0
                      ? data.subjects.map((s) => s.subject).join(', ')
                      : 'Not specified'}
                  </p>
                  <p>
                    <span className="font-medium">Grades:</span>{' '}
                    {data.grades.length > 0
                      ? data.grades.map((g) => g.grade).join(', ')
                      : 'Not specified'}
                  </p>
                </div>
              </div>

              {/* Actions */}
              {/* <div className="px-6 pb-6 flex justify-between">
              <Link href={`/students/${data.id}`}>
                <button className="btn btn-outline btn-sm">View Profile</button>
              </Link>
            </div> */}
            </div>
          )
        })}
      </div>
      <div className="mt-8">
        <Pagination
          pageData={applications?.data?.pageData}
          link="/dashboard/browse"
        />
      </div>
    </div>
  )
}

export default Browse
