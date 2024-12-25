import CreateSubject from '@/app/components/subjects/CreateSubject'
import Link from 'next/link'
import React from 'react'

const AddSubject = () => {
  return (
    <div className="">
      <div className="flex justify-between w-full items-center gap-2 p-2 mb-4">
        <div>
          <h1 className="text-3xl font-bold">Add Subject</h1>
        </div>
        <div className="text-lg bg-green text-cream-foreground rounded-md max-h-1  !leading-[0.2] btn">
          <Link href={'/admin/subjects?page=1'}>Back</Link>
        </div>
      </div>
      <div>
        <CreateSubject />
      </div>
    </div>
  )
}

export default AddSubject
