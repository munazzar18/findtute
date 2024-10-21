import StartChat from '@/app/chat/StartChat'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

interface Rooms {
  status: boolean
  message: string
  data: [
    {
      id: string
      name: string
      created_at: string
      updated_at: string
      ownerId: string
      reciverId: string
      owner: any
      other_user: any
      chat: {
        id: string
        created_at: string
        application: {
          id: string
        }
      }
    }
  ]
}

export const getRooms = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL as string
  const token = cookies().get('access_token')?.value

  const response = await fetch(`${url}chat/rooms`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  return data
}

const Messages = async () => {
  const user = JSON.parse(cookies().get('user')?.value || '{}')
  const rooms: Rooms = await getRooms()

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {rooms.data?.map((room, index) => (
              <tr key={room.id}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    href={`/dashboard/messages/${room.chat.id}?applicationId=${room.chat.application.id}`}
                  >
                    {user.id === room.owner.id
                      ? room.other_user.username
                      : room.owner.username}
                  </Link>
                </td>
                <td>
                  {room.created_at
                    ? new Date(room.created_at).toDateString()
                    : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Messages
