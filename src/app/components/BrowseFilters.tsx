'use client'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { fetchAllSubjects, getSubjects } from '../lib/getSubjects'
import { getAllGrades } from '../lib/getGrades'

interface AllSubjects {
  status: boolean
  message: string
  data: [
    {
      id: string
      subject: string
    }
  ]
}

interface AllGrades {
  status: boolean
  message: string
  data: [
    {
      id: string
      grade: string
    }
  ]
}

const BrowseFilters = () => {
  const [subjects, setSubjects] = useState<AllSubjects['data']>([
    { id: '', subject: '' },
  ])
  const [grades, setGrades] = useState<AllGrades['data']>([
    { id: '', grade: '' },
  ])
  const searchParams = useSearchParams()
  const router = useRouter()

  const currentSubject = searchParams.get('subject') || ''

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Create a new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString())

    // Update or remove the subject parameter
    if (e.target.value) {
      params.set('subject', e.target.value)
    } else {
      params.delete('subject')
    }

    // Reset to page 1 when changing filters
    params.set('page', '1')

    // Navigate using Next.js router (this triggers a server component re-render)
    router.push(`?${params.toString()}`)
  }

  const handleGradeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString())
    if (e.target.value) {
      params.set('grade', e.target.value)
    } else {
      params.delete('grade')
    }

    params.set('page', '1')
    router.push(`?${params.toString()}`)
  }

  const getAllSubjects = async () => {
    const allSubjects: AllSubjects = await fetchAllSubjects()
    setSubjects(allSubjects.data)
  }

  const fetchAllGrades = async () => {
    const allGrades: AllGrades = await getAllGrades()
    setGrades(allGrades.data)
  }

  useEffect(() => {
    getAllSubjects()
    fetchAllGrades()
  }, [])

  return (
    <div className="flex gap-4 mb-8">
      <select
        onChange={handleSubjectChange}
        value={currentSubject}
        className="select select-primary w-full"
      >
        <option value="">Filter by Subjects</option>
        {subjects.map((subject) => (
          <option key={subject.id} value={subject.subject}>
            {subject.subject}
          </option>
        ))}
      </select>

      <select
        onChange={handleGradeChange}
        className="select select-primary w-full"
      >
        <option value="">Filter by Grades</option>
        {grades.map((grade) => (
          <option key={grade.id} value={grade.grade}>
            {grade.grade}
          </option>
        ))}
      </select>
    </div>
  )
}
export default BrowseFilters
