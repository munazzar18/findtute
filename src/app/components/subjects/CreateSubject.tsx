'use client'
import React, { useEffect, useState } from 'react'
import { CreateSubjectAction } from './_action'
import toast from 'react-hot-toast'

const CreateSubject = () => {
  const [isLoading, isSetLoading] = useState(false)
  const [subject, setSubject] = useState('')

  const createSubjectForm = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('subject', subject)
    isSetLoading(true)
    const res = await CreateSubjectAction(formData)

    if (res.status && res.status === true) {
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
    setSubject('')
    isSetLoading(false)
  }

  return (
    <div>
      <form onSubmit={createSubjectForm}>
        <label className="form-control w-full mb-8 max-w-80">
          <div className="label">
            <span className="label-text">Enter Subject</span>
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
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default CreateSubject
