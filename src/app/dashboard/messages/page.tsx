import { getRooms } from '@/app/lib/getRooms'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

interface Rooms {
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

const Messages = async () => {
  const user = JSON.parse(cookies().get('user')?.value || '{}')
  const rooms: Rooms[] = await getRooms()
  return (
    <div className="overflow-x-auto">
      <h4 className="text-xl font-bold">Start discussion with</h4>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {rooms?.length > 0 ? (
            rooms.map((room, index) => (
              <tr key={room.id}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    href={`/dashboard/messages/${room.chat.id}?applicationId=${room.chat.application.id}?roomId=${room.id}`}
                  >
                    {user.id === room.owner.id
                      ? room.other_user.username
                      : room.owner.username}
                  </Link>
                </td>
                <td>
                  {room.other_user.is_online === true ? 'Online' : 'Offline'}
                </td>
                <td>
                  {room.created_at
                    ? new Date(room.created_at).toDateString()
                    : ''}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center">
                No chats found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Messages
