'use client'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { EditSubjectAction, GetSubjectByIdAction } from './_action'

const EditSubjectForm = ({ id }: { id: string }) => {
  const [isLoading, isSetLoading] = useState(false)
  const [subject, setSubject] = useState('')

  const editSubject = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('subject', subject)
    isSetLoading(true)
    const res = await EditSubjectAction(id, formData)

    if (res.status && res.status === true) {
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
    isSetLoading(false)
  }

  const getSubject = async (id: string) => {
    const res = await GetSubjectByIdAction(id)
    if (res.status && res.status === true) {
      setSubject(res.data.subject)
    } else {
      toast.error(res.message)
    }
  }

  useEffect(() => {
    getSubject(id)
  }, [])

  return (
    <div>
      <form onSubmit={editSubject}>
        <label className="form-control w-full mb-8 max-w-80">
          <div className="label">
            <span className="label-text">Enter Subject to edit</span>
          </div>
          <input
            type="text"
            className="input input-primary input-bordered w-full"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
        </label>
        <div>
          {isLoading ? (
            <button
              disabled
              className="w-36 text-lg bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.1] btn"
            >
              <span className="loading loading-spinner loading-xs"></span>
            </button>
          ) : (
            <button
              type="submit"
              aria-label="Submit"
              className="w-36 text-lg bg-green text-cream-foreground rounded-md max-h-1  !leading-[0.2] btn"
            >
              Update
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default EditSubjectForm
