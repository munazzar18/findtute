'use client'

import React from 'react'
import { StudentApplyAction } from '../dashboard/application/actions/_actions'
import { toast } from 'react-hot-toast'

const StudentApplyBtn = ({ appId }: { appId: string }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('applicationId', appId)

    const response = await StudentApplyAction(appId)
    console.log(response)
    if (response.statusCode === 200) {
      toast.success(response.message)
    } else {
      toast.error(response.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-primary w-full">
          Apply
        </button>
      </form>
    </div>
  )
}

export default StudentApplyBtn
