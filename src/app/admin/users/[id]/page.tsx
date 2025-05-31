import ApproveApp from '@/app/components/ApproveApp'
import { getOneUserForAdmin } from '@/app/lib/getAllUsers'
import React from 'react'

interface User {
  id: string
  first_name: string
  last_name: string
  privacy_terms_conditions: boolean
  cnic: string
  email: string
  roles: string
  avatar: string
  mobile: string
  lattitude: number
  longitude: number
  address: string
  city: string
  state: string
  country: string
  hourly_rate: number
  monthy_rate: number
  education: []
  experience: []
  is_online: boolean
  is_authorized: boolean
  is_active: boolean
  is_deleted: boolean
  chats: []
  create_application: []
  payments: []
  subjects: []
  grades: []
  created_at: string
  updated_at: string
}

interface userData {
  status: boolean
  message: string
  data: User
}

interface Education {
  institute: string
  degree: string
  start_year: string
  end_year: string
}

interface Experience {
  institute: string
  title: string
  startDate: string
  endDate: string
  present: boolean
}

const SingleUserForAdminPage = async ({
  params,
}: {
  params: { id: string }
}) => {
  const { id } = params

  const user: userData = await getOneUserForAdmin(id)

  const userEducation: any = user?.data?.education
  const userExperience: any = user?.data?.experience

  const parsedUserEducation: Education[] = JSON.parse(userEducation)
  const parsedUserExperience: Experience[] = JSON.parse(userExperience)

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col md:flex-row  md:items-start">
            <div className="avatar mb-4 md:mb-0 md:mr-6 items-center">
              <div className="mask mask-squircle h-24 w-24 bg-neutral text-neutral-content">
                {user?.data?.avatar ? (
                  <img
                    src={process.env.NEXT_PUBLIC_IMAGE_URL + user?.data?.avatar}
                    alt={user?.data?.first_name?.slice(0, 2).toUpperCase()}
                  />
                ) : (
                  <span className="flex h-24 w-24 justify-center items-center text-xl font-bold text-white">
                    {(user?.data?.first_name || user?.data?.email)
                      ?.slice(0, 2)
                      .toUpperCase()}
                  </span>
                )}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">
                {user?.data?.first_name} {user?.data?.last_name}
              </h2>
              <p className="text-sm text-gray-500">{user?.data?.email}</p>
              <p className="text-sm text-gray-500">{user?.data?.mobile}</p>
              <p className="text-sm text-gray-500">
                {user?.data?.city}, {user?.data?.state}, {user?.data?.country}
              </p>
              <p className="text-sm text-gray-500">CNIC: {user?.data?.cnic}</p>
              <p className="text-sm text-gray-500">Role: {user?.data?.roles}</p>
              <p className="text-sm text-gray-500">
                Hourly Rate: {user?.data?.hourly_rate}
              </p>
              <p className="text-sm text-gray-500">
                Monthly Rate: {user?.data?.monthy_rate}
              </p>
              <p className="text-sm text-gray-500">
                Address: {user?.data?.address}
              </p>
              <p className="text-sm text-gray-500">
                Latitude: {user?.data?.lattitude}, Longitude:{' '}
                {user?.data?.longitude}
              </p>
              <p className="text-sm text-gray-500">
                Online: {user?.data?.is_online ? 'Yes' : 'No'}
              </p>
              <p className="text-sm text-gray-500">
                Authorized: {user?.data?.is_authorized ? 'Yes' : 'No'}
              </p>
              <p className="text-sm text-gray-500">
                Active: {user?.data?.is_active ? 'Yes' : 'No'}
              </p>
              <p className="text-sm text-gray-500">
                Deleted: {user?.data?.is_deleted ? 'Yes' : 'No'}
              </p>
              <p className="text-sm text-gray-500">
                Created At: {new Date(user?.data?.created_at).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">
                Updated At: {new Date(user?.data?.updated_at).toLocaleString()}
              </p>
              {parsedUserEducation?.length > 0 && (
                <div className="divider">
                  <p className="text-lg font-bold">Education:</p>
                </div>
              )}
              {parsedUserEducation?.map((edu, idx: number) => (
                <div key={idx}>
                  <div className="divider">
                    <p className="text-sm text-gray-500">{edu?.institute}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {' '}
                    Degree: {edu?.degree}
                  </p>
                  <p className="text-sm text-gray-500">
                    Start Year: {edu?.start_year}
                  </p>
                  <p className="text-sm text-gray-500">
                    End Year: {edu?.end_year}
                  </p>
                </div>
              ))}

              {parsedUserExperience && parsedUserExperience.length > 0 && (
                <div className="divider">
                  <p className="text-lg font-bold">Experience:</p>
                </div>
              )}
              {parsedUserExperience.map((exp, idx: number) => (
                <div key={idx}>
                  <div className="divider">
                    <p className="text-sm text-gray-500">{exp?.title}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {' '}
                    Institute: {exp?.institute}
                  </p>
                  <p className="text-sm text-gray-500">
                    Start Date: {exp?.startDate}
                  </p>
                  {exp?.endDate ? (
                    <p className="text-sm text-gray-500">
                      End Date: {exp?.endDate}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-500">
                      Currently Working: {exp?.present === true ? 'Yes' : 'No'}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="items-start justify-start">
              <ApproveApp userId={user?.data?.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleUserForAdminPage
