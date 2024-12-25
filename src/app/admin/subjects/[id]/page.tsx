import EditSubjectForm from '@/app/components/subjects/EditSubjectForm'
import Link from 'next/link'
import React from 'react'

const EditSubject = ({ params }: { params: { id: string } }) => {
  const { id } = params
  return (
    <div>
      <div className="flex justify-between w-full items-center gap-2 p-2 mb-4">
        <div>
          <h1 className="text-3xl font-bold">Edit Subject</h1>
        </div>
        <div className="text-lg bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.2] customBtn">
          <Link href={'/admin/subjects?page=1'}>Back</Link>
        </div>
      </div>
      <div>
        <EditSubjectForm id={id} />
      </div>
    </div>
  )
}

export default EditSubject
