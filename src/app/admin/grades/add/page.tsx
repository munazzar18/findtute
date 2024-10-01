import CreateGrade from '@/app/components/grades/CreateGrade'
import EditGradeForm from '@/app/components/grades/EditGradeForm'
import Link from 'next/link'
import React from 'react'

const AddGrade = () => {
  return (
    <div className="">
      <div className="flex justify-between w-full items-center gap-2 p-2 mb-4">
        <div>
          <h1 className="text-3xl font-bold">Add Grade</h1>
        </div>
        <div className="text-lg bg-green text-cream-foreground rounded-md max-h-1  !leading-[0.2] btn">
          <Link href={'/admin/grades?page=1'}>Back</Link>
        </div>
      </div>
      <div>
        <CreateGrade />
      </div>
    </div>
  )
}

export default AddGrade
