'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

interface PageProps {
  total: number
  perPage: number
  currentPage: number
  lastPage: number
}

const GradePagination = ({ pageData }: { pageData: PageProps }) => {
  const { total, perPage, currentPage, lastPage } = pageData
  const router = useRouter()

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= lastPage) {
      // Navigate to the selected page using Next.js router
      router.push(`/admin/grades?page=${page}`)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="join">
        {/* Previous Page Button */}
        <button
          className={`join-item btn ${currentPage === 1 ? 'btn-disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <FaAngleLeft />
        </button>

        {/* Page Number Buttons */}
        {Array.from({ length: lastPage }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`join-item btn ${
              page == currentPage ? 'btn-active' : ''
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        {/* Next Page Button */}
        <button
          className={`join-item btn ${
            currentPage === lastPage ? 'btn-disabled' : ''
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  )
}

export default GradePagination
