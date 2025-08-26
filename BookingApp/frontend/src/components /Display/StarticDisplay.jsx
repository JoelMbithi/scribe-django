import React from 'react'

const StarticDisplay = () => {
  return (
    <div className="w-full h-28 bg-gray-900 text-amber-100 grid grid-cols-4 divide-x divide-amber-100/20">
      
      {/* Check In */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">12%</h1>
        <span className="text-sm tracking-wide text-amber-200">Check In</span>
      </div>

      {/* Check Out */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">8%</h1>
        <span className="text-sm tracking-wide text-amber-200">Check Out</span>
      </div>

      {/* Rooms */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">24</h1>
        <span className="text-sm tracking-wide text-amber-200">Rooms</span>
      </div>

      {/* Check Now */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">6</h1>
        <span className="text-sm tracking-wide text-amber-200">Check Now</span>
      </div>

    </div>
  )
}

export default StarticDisplay
