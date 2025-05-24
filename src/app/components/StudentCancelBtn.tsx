'use client'
import React from 'react'
import { toast } from 'react-hot-toast'
import { StudentCancelAction } from '../dashboard/application/actions/_actions'

const StudentCancelBtn = ({ appId }: { appId: string }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('applicationId', appId)

    const response = await StudentCancelAction(formData)

    if (response.statusCode === 200) {
      toast.success(response.message)
    } else {
      toast.error(response.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-ghost">
          Cancel Discussion
        </button>
      </form>
    </div>
  )
}

export default StudentCancelBtn
