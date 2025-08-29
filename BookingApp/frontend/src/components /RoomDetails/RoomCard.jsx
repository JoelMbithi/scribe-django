import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Family from "../../../src/assets/FamilyDiscount.jpeg";


const RoomCard = ({ room, onBook, roomId,onBookingSuccess,currentUser ,selectedDateRange}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isAvailable = !room.occupiedDates || room.occupiedDates.length === 0;
  const navigate = useNavigate()

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleBooking = async (roomId,userId, selectedDateRange) => {
    if (!currentUser) {
        return navigate('/auth')
    }

    const baseURL = 'http://localhost:8000'
    const roomUrl = `${baseURL}rooms/${roomId}/`
    const userUrl = `${baseURL}users/${userId}/`
   
     if (selectedDateRange.startDate && !selectedDateRange.endDate) {
        selectedDateRange.endDate = selectedDateRange.startDate
     }

     for (
        let currentDate = new Date(selectedDateRange.startDate);
        currentDate <= new Date(selectedDateRange.endDate);
        currentDate.setDate(currentDate.getDate() + 1)
     ){
        try {
            const response = await fetch(`${baseURL}/occupied-date/`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                Authentication: `Token ${currentUser.token}`,
                body:JSON.stringify({
                    room:roomUrl,
                    user:userUrl,
                    date: currentDate
                    .toLocaleDateString("ke")
                    .replace(/\./g,'-')
                    .replace(/\s+/g,"")
                    .slice(0,-1)
                })
            })
            if (!response.ok) {
                throw new Error ("Booking Failed")
            }

            const data = await response.json()
            onBookingSuccess(`Room ${roomId} booked successfully`)
            console.log("Booking Successful",data)

        } catch (error) {
            console.log(error)
        }
     }
  }

  return (
    <div className="room-card bg-white w-80 h-100 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
      {/* Image container with loading state */}
      <div className="relative h-1/2 overflow-hidden">
        {room.images && room.images.length > 0 && (
          <>
            {!imageLoaded && (
              <div className="w-full h-48 bg-gray-200 animate-pulse flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <img
              src={
    room.images && room.images.length > 0
      ? room.images[0].image
      : Family
  }
           alt={room.images?.[0]?.caption || room.name || "Room"}
  onLoad={handleImageLoad}
              
              className={`w-full h-48 object-cover transition-transform duration-500 hover:scale-105 ${imageLoaded ? 'block' : 'hidden'}`}
            />
          </>
        )}
        
        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-amber-500 text-white font-bold py-1 px-3 rounded-full text-sm shadow-md">
          ${room.pricePerNight}
          <span className="font-normal text-xs">/night</span>
        </div>
        
        {/* Status indicator */}
        <div className={`absolute top-4 left-4 py-1 px-3 rounded-full text-xs font-semibold ${isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {isAvailable ? 'Available' : 'Booked'}
        </div>
      </div>

      {/* Content */}
      <div className="p-2 h-1/2">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">{room.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">{room.description}</p>
        
        {/* Features/amenities (optional) */}
        <div className="flex items-center text-gray-500 text-sm mb-5">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          <span>2 Guests</span>
          <span className="mx-2">•</span>
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
          </svg>
          <span>King Bed</span>
        </div>

        <button
          disabled={!isAvailable}
          onClick={() => handleBooking(room.id, currentUser?.id, selectedDateRange)}
          className={`w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
            isAvailable
              ? "bg-amber-500 text-white hover:bg-amber-600 hover:shadow-md transform hover:-translate-y-0.5"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          {isAvailable ? (
            <>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              Book Now
            </>
          ) : (
            "Unavailable"
          )}
        </button>
      </div>
    </div>
  );
};

export default RoomCard;