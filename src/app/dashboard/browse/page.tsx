import BrowseFilters from '@/app/components/BrowseFilters'
import StudentApplyBtn from '@/app/components/StudentApplyBtn'
import { getAllApplications } from '@/app/lib/getApplication'
import Link from 'next/link'

interface Application {
  id: string
  name: string
  hourly_rate: number
  monthly_rate: number
  description: string
  rating: number
  lattitude: number
  longitude: number
  avatar: string
  preference: string
  grades: string[]
  subjects: string[]
  user_id: string
  expiry_date: string
  created_at: string
  updated_at: string
  teacher_accepted: boolean
  student_accepted: boolean
  teacher: User
  student: User
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
  grades: any[]
  subjects: string[]
}

const Browse = async ({
  searchParams,
}: {
  searchParams: { page?: string }
}) => {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1
  const applications = await getAllApplications(currentPage)

  const totalPages = applications?.pageData?.totalPages || 1

  const getLocationFromCoordinates = async (lat: number, lon: number) => {
    try {
      if (lat === null || lon === null) {
        return 'Location not found'
      }

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=en`
      )
      const data = await response.json()

      return data.display_name || 'Location not found'
    } catch (error) {
      console.error('Error fetching location:', error)
      return 'Error fetching location'
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Browse Students</h1>
      <BrowseFilters />
      <div className="flex flex-wrap gap-4">
        {applications?.data.length === 0 && (
          <p>No matching applications found.</p>
        )}
        {applications?.data.map((data: Application) => {
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
                  alt={data.teacher.first_name || 'user image'} // Convert null to empty string
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {data.teacher.first_name + ' ' + data.teacher.last_name}
                </h2>
                <div className="card-actions justify-end">
                  <p>Preference: {data.preference || 'Not specified'}</p>
                </div>
                <div className="card-actions justify-end">
                  <p>
                    Subject:{' '}
                    {data.subjects.length > 0
                      ? data.subjects.join(', ')
                      : 'Not specified'}
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <p>
                    Grades:{' '}
                    {data.grades.length > 0
                      ? data.grades.join(', ')
                      : 'Not specified'}
                  </p>
                </div>
                <div>
                  <StudentApplyBtn appId={data.id} />
                </div>
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
