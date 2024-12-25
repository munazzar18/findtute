'use client'
import React from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { DeleteSubjectAction } from './_action'
import toast from 'react-hot-toast'

const DeleteSubject = ({ id }: { id: string }) => {
  const deleteSubjectForm = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await DeleteSubjectAction(id)
    if (res.status && res.status === true) {
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
  }

  return (
    <form onSubmit={deleteSubjectForm}>
      <button className="cursor-pointer" type="submit">
        <FaRegTrashCan />
      </button>
    </form>
  )
}

export default DeleteSubject
