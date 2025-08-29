import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RoomCard from "../RoomDetails/RoomCard";

const BookingRoom = ({ currentUser }) => {
    const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [selectedDate, setSelectedDate] = useState({
    startDate: today,
    endDate: null,
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [roomData, setRoomData] = useState([]); // fetch this later


  const fetchRooms = async () =>{
    try {
        const response = await fetch('http://localhost:8000/rooms/',{
            method:"GET",
            headers:{"Content-Type":"application/json"},

            
        })

        if (!response.ok) {
            throw new Error ("Failed to fetch rooms")

        }
        const data = await response.json()
      //  console.log("Rooms fetched",data)
        setRoomData(data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() =>{
     fetchRooms()
  },[])

  const handleBookRoom = (roomId) => {
    setSuccess(`Room ${roomId} booked successfully`);
  };

  const handleDateClick = (day, monthOffset = 0) => {
    const clickedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + monthOffset,
      day
    );

    if (!selectedDate.startDate || selectedDate.endDate) {
      setSelectedDate({ startDate: clickedDate, endDate: null });
    } else {
      if (clickedDate > selectedDate.startDate) {
        setSelectedDate((prev) => ({ ...prev, endDate: clickedDate }));
      } else {
        setSelectedDate({ startDate: clickedDate, endDate: selectedDate.startDate });
      }
    }
  };

  const handleMonthChange = (increment) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1)
    );
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
    const startOfMonth = new Date(year, month, 1).getDay();
    const daysInPreviousMonth = new Date(year, month, 0).getDate();

    const days = [];
    // Previous month
    for (let i = startOfMonth - 1; i >= 0; i--) {
      days.push({ day: daysInPreviousMonth - i, monthOffset: -1 });
    }
    // Current month
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      days.push({ day: i, monthOffset: 0 });
    }
    // Next month
    const remainingSlots = 42 - days.length;
    for (let i = 1; i <= remainingSlots; i++) {
      days.push({ day: i, monthOffset: 1 });
    }
    return days;
  };

  const days = generateCalendarDays();

  const isDateSelected = (day, monthOffset) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthOffset, day);
    return (
      (selectedDate.startDate && selectedDate.startDate.getTime() === date.getTime()) ||
      (selectedDate.endDate && selectedDate.endDate.getTime() === date.getTime()) ||
      (selectedDate.startDate &&
        selectedDate.endDate &&
        date >= selectedDate.startDate &&
        date <= selectedDate.endDate)
    );
  };

  const handleFilterRooms = () => {
    if (!selectedDate.startDate) {
      setError("Please select a valid date");
      setIsFiltered(false);
      return;
    }
    const startDate = selectedDate.startDate;
    const endDate = selectedDate.endDate || startDate;

    const isDateRange = (occupiedDate) => {
      const occupied = new Date(occupiedDate);
      occupied.setHours(0, 0, 0, 0);
      if (endDate.getTime() !== startDate.getTime()) {
        return occupied >= startDate && occupied <= endDate;
      } else {
        return occupied.getTime() === startDate.getTime();
      }
    };

   const availableRooms = roomData.filter((room) =>
  (room.occupiedDates || []).every((od) => !isDateRange(od.date))
);


    setFilteredRooms(availableRooms);
    setIsFiltered(true);
    setError("");
  };

  return (
    <div className="booking-room p-6 bg-black text-amber-100 rounded-xl shadow-lg m mx-auto">
      {/* Calendar header */}
      <div className="flex justify-between items-center mb-6">
        <button
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
          onClick={() => handleMonthChange(-1)}
        >
          <FaArrowLeft />
        </button>

        <h2 className="text-lg font-semibold">
          {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </h2>

        <button
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
          onClick={() => handleMonthChange(1)}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-2 mb-6 text-sm">
        {days.map((d, index) => {
          const cellDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + d.monthOffset, d.day);
          return (
            <div
              key={index}
              onClick={() => handleDateClick(d.day, d.monthOffset)}
              className={`p-2 text-center rounded-md cursor-pointer transition ${
                isDateSelected(d.day, d.monthOffset)
                  ? "bg-amber-300 text-black font-bold"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {d.day}
            </div>
          );
        })}
      </div>

      {/* Book Rooms button */}
      <button
        onClick={handleFilterRooms}
        className="w-full py-2 mb-6 rounded-md bg-amber-200 text-black font-medium hover:bg-amber-100 transition"
      >
        Book Rooms
      </button>

      {/* Rooms list */}
      <div className="flex flex-wrap gap-4 justify-cente px-30 items-center mt-8">
        {filteredRooms.length > 0 && isFiltered ? (
          filteredRooms.map((room) => (
            <RoomCard
  key={room.id}
  room={room}
  currentUser={currentUser}      
  selectedDateRange={selectedDate} 
  onBookingSuccess={setSuccess}
/>

          ))
        ) : (
          <p className="text-gray-400 italic">No rooms to display</p>
        )}
      </div>

      {/* Success Message */}
      {success && (
        <div className="mt-4 p-3 bg-green-600 text-white rounded-md text-sm">{success}</div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-600 text-white rounded-md text-sm">{error}</div>
      )}
    </div>
  );
};

export default BookingRoom;
