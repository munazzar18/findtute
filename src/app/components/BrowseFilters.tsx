'use client'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const BrowseFilters = () => {
  const [textSearch, setTextSearch] = useState<string>('')

  const handleSearch = () => {
    //i want to put the textSearch in the url as a query param
    const params = new URLSearchParams(window.location.search)
    params.set('search', textSearch)
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.pushState({ path: newUrl }, '', newUrl)
  }

  return (
    <div className="flex flex-col gap-4 mb-8">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered input-primary w-80"
        onChange={(e) => setTextSearch(e.target.value)}
        value={textSearch}
      />
      <button className="btn btn-primary w-80" onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default BrowseFilters
