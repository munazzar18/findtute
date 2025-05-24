import Pagination from '@/app/components/Pagination'
import { getAllUsers } from '@/app/lib/getAllUsers'
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
            <th>Name</th>
            <th>CNIC</th>
            <th>Email</th>
            <th>Role</th>
            <th>Mobile</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users?.data?.allUsers?.map((user: User) => {
            return (
              <tr key={user.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.avatar} alt={user.first_name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {user.first_name} {user.last_name}
                      </div>
                      <div className="text-sm opacity-50">{user.city}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.cnic}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {user?.address?.substring(0, 30)}
                  </span>
                </td>
                <td>{user.email}</td>
                <td>{user.roles}</td>
                <td>{user.mobile}</td>
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
