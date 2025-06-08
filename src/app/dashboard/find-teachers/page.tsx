import BrowseFilters from '@/app/components/BrowseFilters'
import { getMatchingTutors } from '@/app/lib/getMatching'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Location {
  geoLat: number
  geoLong: number
}

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
  expiry_date: string
  user_id: string
  teacherId: string
  grades: string[]
  subjects: string[]
  teacher: User
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
  is_authorized: string | null
  socketId: string | null
  created_at: string
  updated_at: string
}

interface Application {
  status: string
  message: string
  data: {
    data: Application[]
    pageData: {
      total: number
      perPage: number
      currentPage: number
      totalPages: number
    }
  }
}

const FindTeachersPage = async ({
  searchParams,
}: {
  searchParams: {
    page?: string
    subject?: string
    preference?: string
    grade?: string
    rating?: string
    location?: string
  }
}) => {
  const authUser = JSON.parse(cookies().get('user')?.value || '{}')

  const userLat = authUser.lattitude
  const userLon = authUser.longitude

  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1
  const applications: Application = await getMatchingTutors(currentPage)
  const totalPages = applications?.data?.pageData?.totalPages || 1

  const haversineDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const toRad = (deg: number) => (deg * Math.PI) / 180
    const R = 6371 // Earth radius in km
    const dLat = toRad(lat2 - lat1)
    const dLon = toRad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse gap-6">
      <BrowseFilters />

      <div className="flex-1">
        {applications && applications.data.data.length > 0 ? (
          applications.data.data.map((app) => {
            const fullName = app.teacher.first_name
              ? `${app.teacher.first_name} ${app.teacher.last_name}`
              : 'Anonymous'
            const distance = haversineDistance(
              userLat,
              userLon,
              app.lattitude,
              app.longitude
            ).toFixed(1)

            return (
              <div
                key={app.id}
                className="card card-compact w-80 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 m-4"
              >
                <div className="card-body">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image
                          src={process.env.NEXT_PUBLIC_IMAGE_URL + app.avatar}
                          alt={fullName}
                          width={56}
                          height={56}
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="card-title text-lg">{fullName}</h2>
                      <div className="flex items-center text-yellow-500">
                        <svg
                          className="w-5 h-5 fill-current mr-1"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.566-.955L10 0l2.944 5.955 6.566.955-4.755 4.635 1.123 6.545z" />
                        </svg>
                        <span className="font-medium">
                          {app.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1">
                    <p>
                      <strong>Hourly:</strong> Rs{app.hourly_rate}/hr
                    </p>
                    <p>
                      <strong>Monthly:</strong> Rs{app.monthly_rate}/mo
                    </p>
                  </div>

                  <p className="mt-2">
                    <strong>Preference:</strong> {app.preference}
                  </p>
                  <p className="mb-2">
                    <strong>Distance:</strong> {distance} km
                  </p>

                  <div className="mt-3">
                    <div className="mb-1 font-semibold">Subjects:</div>
                    <div className="flex flex-wrap gap-1">
                      {app.subjects.map((s, i) => (
                        <span key={i} className="badge badge-sm badge-accent">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="mb-1 font-semibold">Grades:</div>
                    <div className="flex flex-wrap gap-1">
                      {app.grades.map((g, i) => (
                        <span key={i} className="badge badge-sm badge-info">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                  {app.teacher.is_authorized ? (
                    <div className="card-actions justify-end mt-4">
                      <button className="btn btn-outline btn-sm">
                        Start Chat
                      </button>
                    </div>
                  ) : (
                    <div className="card-actions justify-end mt-4">
                      <button className="btn btn-error btn-sm">Inactive</button>
                    </div>
                  )}
                </div>
              </div>
            )
          })
        ) : (
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-4xl p-12 mx-4 text-center bg-white shadow-lg rounded-md hover:shadow-xl">
              <h1 className="mb-6 text-4xl font-extrabold text-gray-600">
                No Teachers Found
              </h1>
            </div>
          </div>
        )}

        {/* Pagination */}
        <div className="w-full flex justify-center mt-8">
          <div className="join">
            {currentPage > 1 && (
              <Link href={`?page=${currentPage - 1}`} className="join-item btn">
                «
              </Link>
            )}

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
    </div>
  )
}

export default FindTeachersPage
