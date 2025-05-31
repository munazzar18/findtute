'use client'
import React from 'react'
import { AdminApproveApplication } from '../lib/approveApplication'
import toast from 'react-hot-toast'

const ApproveApp = ({ userId }: { userId: string }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await AdminApproveApplication(userId)
    if (res.status && res.status === true) {
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <button type="submit" className="btn btn-primary">
            Approve Application
          </button>
        </div>
      </form>
    </div>
  )
}

export default ApproveApp
