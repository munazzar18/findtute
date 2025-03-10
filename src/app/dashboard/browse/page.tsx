import { getMatchingUsers } from '@/app/lib/getMatching'
import Link from 'next/link'

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
  const matchingUsers = await getMatchingUsers(currentPage)
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
      {/* <div className="flex flex-wrap gap-4">
        {matchingUsers?.users?.length === 0 && <p>No matching users found.</p>}
        {matchingUsers?.users?.map((user: User) => (
          <div
            className="card bg-base-100 w-64 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            key={user.id}
          >
            <figure className="w-64 aspect-square object-contain">
              <img
                src={`http://localhost:3500` + user.avatar}
                alt={user.first_name || ''} // Convert null to empty string
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {user.first_name} {user.last_name}
              </h2>
              <p>{user.avatar}</p>
              <div className="card-actions justify-end">
                <p>Preference: {user.preference}</p>
              </div>
              <div className="card-actions justify-end">
                <p>
                  Address:{' '}
                  {user.lattitude !== null && user.longitude !== null
                    ? getLocationFromCoordinates(user.lattitude, user.longitude)
                    : 'Location not found'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div className="flex flex-wrap gap-4">
        {matchingUsers?.users?.length === 0 && <p>No matching users found.</p>}
        {matchingUsers?.users?.map((user: User) => {
          const avatarUrl = user.avatar
            ? `http://localhost:3500${user.avatar}`
            : '/images/default-avatar.png' // Placeholder image

          return (
            <div
              className="card bg-base-100 w-64 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              key={user.id}
            >
              <figure className="w-64 aspect-square">
                <img
                  src={avatarUrl}
                  alt={user.first_name || 'user image'} // Convert null to empty string
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {user.first_name + ' ' + user.last_name}
                </h2>
                <div className="card-actions justify-end">
                  <p>Preference: {user.preference || 'Not specified'}</p>
                </div>
                <div className="card-actions justify-end">
                  <p>
                    Address:{' '}
                    {user.lattitude !== null && user.longitude !== null
                      ? getLocationFromCoordinates(
                          user.lattitude,
                          user.longitude
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
