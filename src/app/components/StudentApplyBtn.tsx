'use client'

import React from 'react'
import {
  getRoomsFromChatId,
  StudentApplyAction,
} from '../dashboard/application/actions/_actions'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const StudentApplyBtn = ({ appId }: { appId: string }) => {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData()
    formData.append('applicationId', appId)

    const response = await StudentApplyAction(formData)

    if (response?.status === true) {
      toast.success(response?.message)

      const getRoom = await getRoomsFromChatId(response?.data?.chat?.id)

      const room = getRoom?.data
      const url = `/dashboard/messages/${room?.chat?.id}?applicationId=${room?.chat?.accepted_application?.id}?roomId=${room?.id}`

      router.push(url)
      setLoading(false)
    } else {
      toast.error(response?.message)
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          Start Discussion
        </button>
      </form>
    </div>
  )
}

export default StudentApplyBtn
