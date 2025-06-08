'use client'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { fetchAllSubjects } from '../lib/getSubjects'
import { getAllGrades } from '../lib/getGrades'

interface AllSubjects {
  status: boolean
  message: string
  data: { id: string; subject: string }[]
}

interface AllGrades {
  status: boolean
  message: string
  data: { id: string; grade: string }[]
}

const BrowseFilters = () => {
  const [subjects, setSubjects] = useState<AllSubjects['data']>([])
  const [grades, setGrades] = useState<AllGrades['data']>([])

  const searchParams = useSearchParams()
  const router = useRouter()

  const currentSubject = searchParams.get('subject') || ''
  const currentGrade = searchParams.get('grade') || ''

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString())
    if (e.target.value) {
      params.set('subject', e.target.value)
    } else {
      params.delete('subject')
    }
    params.set('page', '1')
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
    <aside className="w-48 sm:w-12 md:w-20 lg:w-32 xl:w-56 p-4 border rounded-2xl shadow-md bg-white dark:bg-base-200 sticky top-4 h-fit">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Subject Filter */}
      <div className="form-control mb-4">
        <label className="label font-medium">Subjects</label>
        <select
          onChange={handleSubjectChange}
          value={currentSubject}
          className="select select-bordered"
        >
          <option value="">All Subjects</option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.subject}>
              {subject.subject}
            </option>
          ))}
        </select>
      </div>

      {/* Grade Filter */}
      <div className="form-control mb-4">
        <label className="label font-medium">Grades</label>
        <select
          onChange={handleGradeChange}
          value={currentGrade}
          className="select select-bordered"
        >
          <option value="">All Grades</option>
          {grades.map((grade) => (
            <option key={grade.id} value={grade.grade}>
              {grade.grade}
            </option>
          ))}
        </select>
      </div>

      {/* Placeholder filters for future */}
      <div className="form-control mb-4">
        <label className="label font-medium">Location</label>
        <input
          type="text"
          placeholder="e.g. Lahore"
          className="input input-bordered"
        />
      </div>

      <div className="form-control mb-4">
        <label className="label font-medium">Rating</label>
        <select className="select select-bordered">
          <option value="">All Ratings</option>
          <option value="4">4★ & above</option>
          <option value="3">3★ & above</option>
          <option value="2">2★ & above</option>
          <option value="1">1★ & above</option>
        </select>
      </div>

      <div className="form-control mb-4">
        <label className="label font-medium">Preference</label>
        <select className="select select-bordered">
          <option value="">Any</option>
          <option value="online">Online</option>
          <option value="in-person">In-person</option>
        </select>
      </div>

      <button
        className="btn btn-outline btn-primary mt-4 w-full"
        onClick={() => {
          const params = new URLSearchParams(searchParams.toString())
          router.push(`?${params.set('page', '1')}`)
        }}
      >
        Reset Filters
      </button>
    </aside>
  )
}

export default BrowseFilters
