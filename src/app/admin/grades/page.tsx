import DeleteGrade from '@/app/components/grades/DeleteGrade'
import GradePagination from '@/app/components/grades/GradePagination'
import { getGrades } from '@/app/lib/getGrades'
import Link from 'next/link'
import React from 'react'
import { FaPenToSquare, FaRegTrashCan } from 'react-icons/fa6'

interface Grade {
  data: [
    {
      id: string
      grade: string
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

const Grades = async ({ searchParams }: { searchParams: { page: number } }) => {
  const page = searchParams?.page
  const allGrades: Grade = await getGrades(page)
  return (
    <div>
      <div className="flex justify-between w-full items-center gap-2 p-2 mb-4">
        <div>
          <h1 className="text-3xl font-bold">All Grades</h1>
        </div>
        <div>
          <Link
            className="text-lg bg-green text-cream-foreground rounded-md max-h-1 !leading-[0.2] customBtn"
            href={'/admin/grades/add'}
          >
            Add Grade
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-base-200 text-black font-bold text-lg">
              <th>Sr#</th>
              <th>Grade</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allGrades.data?.map((grade, index) => (
              <tr className="" key={grade.id}>
                <th>
                  {(allGrades.pageData.currentPage - 1) *
                    allGrades.pageData.perPage +
                    index +
                    1}
                </th>
                <td>{grade.grade}</td>
                <td>
                  {grade.created_at
                    ? new Date(grade.created_at)
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
                      <Link href={`/admin/grades/${grade.id}`}>
                        <FaPenToSquare />
                      </Link>
                    </div>
                    <div>
                      <DeleteGrade id={grade.id} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center">
        <GradePagination pageData={allGrades.pageData} />
      </div>
    </div>
  )
}

export default Grades
