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

export const getChats = async (chatId: string) => {
  const url = process.env.NEXT_PUBLIC_API_URL as string
  const token = cookies().get('access_token')?.value
  const response = await fetch(`${url}chat/${chatId}/messages`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  return data
}

const MessageWithUser = async ({
  params,
  searchParams,
}: {
  params: { chatId: string }
  searchParams: { applicationId: string }
}) => {
  const token = cookies().get('access_token')?.value

  const user = JSON.parse(cookies().get('user')?.value || '{}')

  const { chatId } = params

  const { applicationId } = searchParams

  const chatData: Messages = await getChats(chatId)

  return (
    <div>
      <StartChat
        token={token ? token : ''}
        chatId={chatId}
        applicationId={applicationId}
        currentUserId={user.id}
      />
    </div>
  )
}

export default MessageWithUser
