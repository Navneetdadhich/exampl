import React from 'react'

const SideCard = () => {
  return (
    <>
    <div className="absolute top-105 right-15 bg-white rounded-md shadow-md border border-gray-200 p-6 w-56">
            <div className="text-sm mb-1">ID</div>
            <div className="font-medium mb-4">7AFAA8AF</div>
            
            <div className="text-sm mb-1">Status</div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span className="text-yellow-500">Pending Approval</span>
            </div>
            
            <div className="text-sm mb-1">Created By</div>
            <div className="font-medium mb-4">Mar 07, 2025, 16:36</div>
            
            <div className="text-sm mb-1">Created At</div>
            <div className="font-medium mb-4">Mar 07, 2025, 16:36</div>
            
            <div className="text-sm mb-1">Updated At</div>
            <div className="font-medium">Mar 07, 2025, 16:36</div>
          </div>
    </>
  )
}

export default SideCard