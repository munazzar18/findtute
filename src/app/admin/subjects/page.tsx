import DeleteSubject from '@/app/components/subjects/DeleteSubject'
import SubjectPagination from '@/app/components/subjects/SubjectPagination'
import { getSubjects } from '@/app/lib/getSubjects'
import Link from 'next/link'
import React from 'react'
import { FaPenToSquare, FaRegTrashCan } from 'react-icons/fa6'

interface Subjects {
  data: [
    {
      id: string
      subject: string
      created_at: string
    }
  ]
  pageData: {
    total: number
    perPage: number
    currentPage: number
    lastPage: number
  }
}

const Subjects = async ({
  searchParams,
}: {
  searchParams: { page: number }
}) => {
  const page = searchParams?.page
  const allSubjects: Subjects = await getSubjects(page)
  return (
    <div>
      <div className="flex justify-between w-full items-center gap-2 p-2 mb-4">
        <div>
          <h1 className="text-3xl font-bold">All Subjects</h1>
        </div>
        <div>
          <Link
            className="text-lg bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.2] customBtn"
            href={'/admin/subjects/add'}
          >
            Add Subject
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-base-200 text-black font-bold text-lg">
              <th>Sr#</th>
              <th>Subject</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allSubjects.data?.map((subject, index) => (
              <tr className="" key={subject.id}>
                <th>
                  {(allSubjects.pageData.currentPage - 1) *
                    allSubjects.pageData.perPage +
                    index +
                    1}
                </th>
                <td>{subject.subject}</td>
                <td>
                  {subject.created_at
                    ? new Date(subject.created_at)
                        .toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        })
                        .replace(/\/+/g, '/')
                    : ''}
                </td>
                <td>
                  <div className="flex gap-2">
                    <div>
                      <Link href={`/admin/subjects/${subject.id}`}>
                        <FaPenToSquare />
                      </Link>
                    </div>
                    <div>
                      <DeleteSubject id={subject.id} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center">
        <SubjectPagination pageData={allSubjects.pageData} />
      </div>
    </div>
  )
}

export default Subjects
