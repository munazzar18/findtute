import BrowseFilters from '@/app/components/BrowseFilters'
import { getAllApplications } from '@/app/lib/getApplication'
import { getMatchingUsers } from '@/app/lib/getMatching'
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
  subjects: any[]
}

const Browse = async ({
  searchParams,
}: {
  searchParams: { page?: string }
}) => {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1
  // const matchingUsers = await getMatchingUsers(currentPage)
  const matchingUsers = await getAllApplications(currentPage)
  const totalPages = matchingUsers?.pageData?.totalPages || 1

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
        {matchingUsers?.data.length === 0 && <p>No matching users found.</p>}
        {matchingUsers?.data.map((data: Application) => {
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
                  alt={data.student.first_name || 'user image'} // Convert null to empty string
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {data.student.first_name + ' ' + data.student.last_name}
                </h2>
                <div className="card-actions justify-end">
                  <p>Preference: {data.preference || 'Not specified'}</p>
                </div>
                <div className="card-actions justify-end">
                  <p>
                    Address:{' '}
                    {data.lattitude !== null && data.longitude !== null
                      ? getLocationFromCoordinates(
                          data.lattitude,
                          data.longitude
                        )
                      : 'Address not available'}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      ;{/* DaisyUI Pagination */}
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
