'use client'
import React from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { DeleteGradeAction } from './_action'
import toast from 'react-hot-toast'

const DeleteGrade = ({ id }: { id: string }) => {
  const deleteGrade = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await DeleteGradeAction(id)
    if (res.status && res.status === true) {
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
  }

  return (
    <form onSubmit={deleteGrade}>
      <button className="cursor-pointer" type="submit">
        <FaRegTrashCan />
      </button>
    </form>
  )
}

export default DeleteGrade
