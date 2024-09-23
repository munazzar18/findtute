import StartChat from '@/app/chat/StartChat'

import { cookies } from 'next/headers'

interface User {
  id: string
  email: string
  role: string
}

interface ChatPageProps {
  params: {
    roomName: string
    id: string
  }
}

const Messages: React.FC<ChatPageProps> = ({ params }) => {
  const token = cookies().get('access_token')?.value

  const user: User = JSON.parse(cookies().get('user')?.value || '{}')

  const { roomName, id } = params

  if (!token) return

  return (
    <div>
      <h1>Chat Room: {roomName}</h1>
      <StartChat room={roomName} userId={id} token={token} user={user} />
    </div>
  )
}

export default Messages
