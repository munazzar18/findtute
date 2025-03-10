'use client'
import React, { useEffect, useState } from 'react'
import { EditGradeAction, GetGradeByIdAction } from './_action'
import toast from 'react-hot-toast'

const EditGradeForm = ({ id }: { id: string }) => {
  const [isLoading, isSetLoading] = useState(false)
  const [grade, setGrade] = useState('')

  const editGrade = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('grade', grade)
    isSetLoading(true)
    const res = await EditGradeAction(id, formData)

    if (res.status && res.status === true) {
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
    isSetLoading(false)
  }

  const getGrade = async (id: string) => {
    const res = await GetGradeByIdAction(id)
    if (res.status && res.status === true) {
      setGrade(res.data.grade)
    } else {
      toast.error(res.message)
    }
  }

  useEffect(() => {
    getGrade(id)
  }, [])

  return (
    <div>
      <form onSubmit={editGrade}>
        <label className="form-control w-full mb-8 max-w-80">
          <div className="label">
            <span className="label-text">Enter Grade to edit</span>
          </div>
          <input
            type="text"
            className="input input-primary input-bordered w-full"
            onChange={(e) => setGrade(e.target.value)}
            value={grade}
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

export default EditGradeForm
