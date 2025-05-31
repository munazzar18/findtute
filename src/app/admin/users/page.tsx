import Pagination from '@/app/components/Pagination'
import { getAllUsers } from '@/app/lib/getAllUsers'
import Link from 'next/link'
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
  created_at: string
  updated_at: string
}

interface userData {
  status: boolean
  message: string
  data: {
    allUsers: User[]
    pageData: {
      total: number
      perPage: number
      currentPage: number
      lastPage: number
    }
  }
}

const Users = async ({ searchParams }: { searchParams: { page: string } }) => {
  const page = searchParams?.page
  const users: userData = await getAllUsers(+page)
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Sr#</th>
            <th>Name</th>
            <th>CNIC</th>
            <th>Email</th>
            <th>Role</th>
            <th>Mobile</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users?.data?.allUsers?.map((user: User, index: number) => {
            return (
              <tr key={user.id}>
                <th>
                  {(users?.data?.pageData?.currentPage - 1) *
                    users?.data?.pageData.perPage +
                    index +
                    1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12 bg-neutral text-neutral-content">
                        {user?.avatar ? (
                          <img
                            src={
                              process.env.NEXT_PUBLIC_IMAGE_URL + user?.avatar
                            }
                            alt={user?.first_name?.slice(0, 2).toUpperCase()}
                          />
                        ) : (
                          <span className="flex h-12 w-12 justify-center items-center text-xl font-bold text-white">
                            {(user?.first_name || user?.email)
                              ?.slice(0, 2)
                              .toUpperCase()}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        <Link href={`/admin/users/${user.id}`}>
                          {user.first_name} {user.last_name}
                        </Link>
                      </div>
                      <div className="text-sm opacity-50">{user.city}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <Link href={`/admin/users/${user.id}`}>{user.cnic}</Link>
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    <Link href={`/admin/users/${user.id}`}>
                      {user?.address?.substring(0, 30)}
                    </Link>
                  </span>
                </td>
                <td>
                  <Link href={`/admin/users/${user.id}`}>{user?.email}</Link>
                </td>
                <td>
                  <Link href={`/admin/users/${user.id}`}>{user?.roles}</Link>
                </td>
                <td>
                  <Link href={`/admin/users/${user.id}`}>{user?.mobile}</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="mt-4 flex items-center">
        <Pagination pageData={users.data.pageData} link="/admin/users" />
      </div>
    </div>
  )
}

export default Users
