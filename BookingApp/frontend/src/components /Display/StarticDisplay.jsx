import React, { useEffect, useState } from 'react'

const StarticDisplay = () => {
  const [rooms, setRooms] = useState([]);
  const [count,setCount] = useState(0)
   const fetchRooms = async () => {
      try {
        const response = await fetch('http://localhost:8000/rooms/',{
          method:"GET",
          headers:{"Content-Type":"application/json"},
          
        });
        const data = await response.json();
        setRooms(data)
        //console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() =>{
      fetchRooms()
    },[])
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
     {rooms && rooms.length > 0 && (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{rooms.length}</h1>
        <span className="text-sm tracking-wide text-amber-200">Rooms</span>
      </div>
     )}

      {/* Check Now */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">6</h1>
        <span className="text-sm tracking-wide text-amber-200">Check Now</span>
      </div>

    </div>
  )
}

export default StarticDisplay
