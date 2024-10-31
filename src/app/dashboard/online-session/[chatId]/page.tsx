import ScreenShare from '@/app/chat/ScreenShare'
import StartChat from '@/app/chat/StartChat'
import { cookies } from 'next/headers'

interface Messages {
  status: boolean
  message: string
  data: {
    owner: any
    otherUser: any
    messages: [
      {
        id: string
        content: string
        created_at: string
        chatId: string
        sender: any
        receiver: any
      }
    ]
  }
}

const OnlineSessionWithUser = async ({
  params,
  searchParams,
}: {
  params: { chatId: string }
  searchParams: { applicationId: string; roomId: string }
}) => {
  const token = cookies().get('access_token')?.value

  const user = JSON.parse(cookies().get('user')?.value || '{}')

  const { chatId } = params

  const { applicationId } = searchParams

  const { roomId } = searchParams

  return (
    <div>
      <ScreenShare
        token={token ? token : ''}
        chatId={chatId}
        roomId={roomId}
        applicationId={applicationId}
        currentUserId={user.id}
      />
    </div>
  )
}

export default OnlineSessionWithUser
