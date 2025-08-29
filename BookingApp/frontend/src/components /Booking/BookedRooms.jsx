import React, { useEffect, useState } from "react";
import Family from "../../../src/assets/FamilyDiscount.jpeg";
import { BiLogoAirbnb } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine, RiMenuFill } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const BookedRooms = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [rooms, setRooms] = useState([]);
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const fetchRooms = async () => {
    try {
      const response = await fetch('http://localhost:8000/rooms/',{
        method:"GET",
        headers:{"Content-Type":"application/json"},
        
      });
      const data = await response.json();
      setRooms(data)
    //  console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() =>{
    fetchRooms()
  },[])

  return (
    <div className="h-grow  flex flex-col justify-center bg-[rgb(255,254,210)]  text-white">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-12 flex flex-row justify-evenly items-center bg-black z-50 gap-4 shadow-md">
        <div className="flex flex-row gap-1 font-bold text-amber-200">
          <BiLogoAirbnb className="text-5xl" />
          <h1 className="text-xl mt-2">HOTELER</h1>
        </div>

        {/* ... your nav links ... */}
        <div className="hidden md:flex flex-row gap-6 text-amber-100 font-semibold text-sm relative">
          {/* HOME DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("home")}
              className="flex flex-row items-center hover:text-gray-300"
            >
              HOME <RiArrowDropDownLine className="text-2xl" />
            </button>
            {openDropdown === "home" && (
              <div className="absolute mt-2 ring-1 ring-amber-100  text-amber-100 rounded-md shadow-md w-40">
                <Link
                  to="/overview"
                  className="block px-4 py-2 hover:text-gray-200"
                >
                  Overview
                </Link>
                <Link
                  to="/gallery"
                  className="block px-4 py-2 hover:text-gray-200"
                >
                  Gallery
                </Link>
                <Link
                  to="/services"
                  className="block px-4 py-2 hover:text-gray-200"
                >
                  Services
                </Link>
              </div>
            )}
          </div>

          {/* ROOMS & SUITES DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("rooms")}
              className="flex flex-row items-center hover:text-gray-300"
            >
              ROOMS & SUITES <RiArrowDropDownLine className="text-2xl" />
            </button>
            {openDropdown === "rooms" && (
              <div className="absolute mt-2 ring-1 ring-amber-100  text-amber-100 rounded-md shadow-md w-40">
                <Link
                  to="/rooms"
                  className="block px-4 py-2 hover:text-gray-200"
                >
                  Deluxe Room
                </Link>
                <Link
                  to="/rooms"
                  className="block px-4 py-2 hover:text-gray-200"
                >
                  Luxury Suite
                </Link>
                <Link
                  to="/rooms"
                  className="block px-4 py-2 hover:text-gray-200"
                >
                  Family Room
                </Link>
              </div>
            )}
          </div>

          {/* NEWS DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("news")}
              className="flex flex-row items-center hover:text-gray-300"
            >
              NEWS <RiArrowDropDownLine className="text-2xl" />
            </button>
            {openDropdown === "news" && (
              <div className="absolute mt-2 ring-1 ring-amber-100  text-amber-100 rounded-md shadow-md w-40">
                <Link
                  to="/events"
                  className="block px-4 py-2 hover:text-gray-200"
                >
                  Events
                </Link>
                <Link
                  to="/offers"
                  className="block px-4 py-2 hover:text-gray-200"
                >
                  Special Offers
                </Link>
              </div>
            )}
          </div>

          {/* ABOUT DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("about")}
              className="flex flex-row items-center hover:text-gray-300"
            >
              ABOUT <RiArrowDropDownLine className="text-2xl" />
            </button>
            {openDropdown === "about" && (
              <div className="absolute mt-2 ring-1 ring-amber-100  text-amber-100 rounded-md shadow-md w-40">
                <Link
                  to="/team"
                  className="block px-4 py-2 hover:text-gray-200"
                >
                  Our Team
                </Link>
                <Link
                  to="/story"
                  className="block px-4 py-2 hover:text-gray-200"
                >
                  Our Story
                </Link>
              </div>
            )}
          </div>

          {/* CONTACT LINK */}
          <Link to="/contacts" className="hover:text-gray-300">
            CONTACT
          </Link>
        </div>
      </div>

      {/* Hero section */}
      <div className="w-full h-[35rem] relative ">
        {" "}
        
        <img
          src={Family}
          alt="Family Discount"
          className="w-full h-130 object-cover shadow-lg"
        />
        <div className="absolute inset-0 bg-black/60 h-130 bg-opacity-40 flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-200 text-center">
            Enjoy Your Stay!
          </h2>
          <p className="text-lg md:text-xl text-amber-50 max-w-xl text-center px-4">
            Discover your booked rooms, exclusive offers, and special family
            discounts.
          </p>
        </div>
      </div>

      {/* Content placeholder */}
      <div className="flex-1 flex flex-col  justify-center items-center  px-4">
        <h2 className="text-3xl text-black">HOTELER ROOMS</h2>
        <div className="mt-7 flex flex-wrap justify-center px-8">
         {rooms.map((room,index) => (
           <div key={index} className="m-2 border-2 border-amber-200 flex flex-col rounded-lg p-1 w-60 h-80 shadow-lg">
            <div className="h-1/2">
              <img className="h-full w-full object-cover" src={ room.images?.[0]?.image||Family} alt="" />
              
            </div>
            <div className="h-1/2 flex flex-col justify-center px-2">
              <h3 className="mt-4 text-lg font-semibold text-amber-600">
                {room.name || "Deluxe Suite"}
              </h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2 ">
                {room.description || "Spacious room with sea view"}
              </p>
              <p className="mt-2 font-bold text-amber-600">${room.pricePerNight || "34"} / night</p>
              <p className="text-gray-500 text-sm mt-1">
                Max Occupancy:{room.maxOccupancy || "2"} Guests
              </p>
              <div className="flex justify-center">
                <button className="ring-2 ring-amber-200 p-2 mt-2 text-amber-600 w-34 mb-2 bg-amber-200/30 hover:bg-amber-400/30 text-sm">Book Now</button>
              </div>
            </div>
            
          </div>
         ))}
        </div>
      
      </div>
     <div className="w-full bg-black py-8 mt-12">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
    
    {/* About */}
    <div>
      <h1 className="text-xl font-semibold text-amber-200 mb-3">About Us</h1>
      <p className="text-sm text-amber-50">
        Experience luxury and comfort in our premium rooms. We are dedicated 
        to providing you with the best hospitality and unforgettable stays.
      </p>
    </div>
    
    {/* Quick Links */}
    <div>
      <h1 className="text-xl font-semibold text-amber-200 mb-3">Quick Links</h1>
      <ul className="space-y-2 text-sm">
        <li><a href="/rooms" className="hover:text-amber-100 text-amber-50 ">Our Rooms</a></li>
        <li><a href="/about" className="hover:text-amber-100 text-amber-50 ">About</a></li>
        <li><a href="/contact" className="hover:text-amber-100 text-amber-50 ">Contact</a></li>
        <li><a href="/booking" className="hover:text-amber-100 text-amber-50 ">Book Now</a></li>
      </ul>
    </div>
    
    {/* Contact */}
    <div>
      <h1 className="text-xl font-semibold text-amber-200 mb-3">Contact Us</h1>
      <p className="text- text-amber-50">123 Hoteler Street, Nairobi, Kenya</p>
      <p className="text- text-amber-50">Phone: +254 743 861 565</p>
      <p className="text- text-amber-50">Email: info@hotelerrooms.com</p>
    </div>
    
  </div>
  
  {/* Bottom line */}
  <div className="mt-8 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} Hoteler Rooms. All Rights Reserved.
  </div>
</div>

    </div>
  );
};

export default BookedRooms;
