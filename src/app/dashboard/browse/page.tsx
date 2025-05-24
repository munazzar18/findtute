import BrowseFilters from '@/app/components/BrowseFilters'
import StudentApplyBtn from '@/app/components/StudentApplyBtn'
import { getAllApplications } from '@/app/lib/getApplication'
import { getMatchingUsers } from '@/app/lib/getMatching'
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

interface Application {
  id: string
  name: string
  hourly_rate: number
  monthly_rate: number
  rating: number
  lattitude: number
  longitude: number
  avatar: string
  preference: string
  expiry_date: string
  user_id: string
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
  create_application: Application[]
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
      totalPages: number
    }
  }
}

const Browse = async ({
  searchParams,
}: {
  searchParams: {
    page?: string
    subject?: string
    grade?: string
    rating?: string
    location?: string
  }
}) => {
  const authUser = JSON.parse(cookies().get('user')?.value || '{}')

  const subject =
    searchParams.subject && searchParams.subject !== 'undefined'
      ? searchParams.subject
      : undefined
  const grade =
    searchParams.grade && searchParams.grade !== 'undefined'
      ? searchParams.grade
      : undefined
  const rating =
    searchParams.rating && searchParams.rating !== 'undefined'
      ? parseFloat(searchParams.rating)
      : undefined
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1
  const applications: Browse = await getMatchingUsers(
    currentPage,
    subject,
    grade,
    rating
  )

  const totalPages = applications?.data?.pageData?.totalPages || 1

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">
        Browse {authUser.role === 'student' ? 'Tutors' : 'Students'}
      </h1>
      <BrowseFilters />
      <div className="flex flex-wrap gap-4">
        {applications?.data?.users?.length === 0 && (
          <p>No matching applications found.</p>
        )}
        {applications &&
          applications?.data?.users?.map((data) => {
            const avatarUrl = data.avatar
              ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.avatar}`
              : '/images/default-avatar.png' // Placeholder image

            return (
              <div
                className="card bg-base-100 w-64 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                key={data.id}
              >
                <figure className="w-64 aspect-square">
                  <img
                    src={avatarUrl}
                    alt={data.first_name || 'user image'} // Convert null to empty string
                    className="object-cover w-full h-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {data.first_name + ' ' + data.last_name}
                  </h2>
                  <div className="card-actions justify-end">
                    <p>Preference: {data.preference || 'Not specified'}</p>
                  </div>
                  <div className="card-actions justify-end">
                    <p>
                      Subject:{' '}
                      {data.subjects.length > 0
                        ? data.subjects
                            .map((subject) => subject.subject)
                            .join(', ')
                        : 'Not specified'}
                    </p>
                  </div>
                  <div className="card-actions justify-end">
                    <p>
                      Grades:{' '}
                      {data.grades.length > 0
                        ? data.grades.map((grade) => grade.grade).join(', ')
                        : 'Not specified'}
                    </p>
                  </div>
                  {authUser.role === 'student' && (
                    <div>
                      <StudentApplyBtn appId={data.create_application[0].id} />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
      </div>

      <div className="flex justify-center mt-8">
        <div className="join">
          {currentPage > 1 && (
            <Link href={`?page=${currentPage - 1}`} className="join-item btn">
              «
            </Link>
          )}

          {/* Generate page buttons */}
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = currentPage <= 3 ? i + 1 : currentPage + i - 2

            if (pageNum > 0 && pageNum <= totalPages) {
              return (
                <Link
                  key={pageNum}
                  href={`?page=${pageNum}`}
                  className={`join-item btn ${
                    currentPage === pageNum ? 'btn-active' : ''
                  }`}
                >
                  {pageNum}
                </Link>
              )
            }
            return null
          })}

          {currentPage < totalPages && (
            <Link href={`?page=${currentPage + 1}`} className="join-item btn">
              »
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Browse
