import React from 'react'
import { IoChevronUp, IoPeopleSharp, IoSettings } from 'react-icons/io5'

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
      <div className="bg-gray-50 shadow-lg flex  rounded-2xl flex-col dark:bg-slate-900/70">
        <div className="flex-1 p-6 undefined">
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center capitalize leading-none text-xs border rounded-full py-1 px-3 bg-emerald-500 border-emerald-500 text-white ">
              <span className="inline-flex justify-center items-center w-4 h-4 mr-1">
                <IoChevronUp />
              </span>
              <span>12%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg leading-tight text-[#f7941e] dark:text-slate-400">
                Total Users
              </h3>
              <h1 className="text-3xl leading-tight font-semibold">
                <div>512</div>
              </h1>
            </div>
            <span className="inline-flex justify-center items-center  h-16 text-[#f7941e]">
              <IoPeopleSharp size={60} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
