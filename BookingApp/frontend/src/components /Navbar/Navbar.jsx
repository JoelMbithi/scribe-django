import React, { useState } from "react";
import { Link } from "react-router-dom";
import hotelBg from "../../assets/imagedisplay5.jpeg";
import { BiLogoAirbnb } from "react-icons/bi";
import { RiArrowDropDownLine, RiMenuFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Tistar from "../Navbar/Tistar"

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav
      className="w-full h-screen bg-cover flex flex-col bg-center shadow-md"
      style={{
        backgroundImage: `url(${hotelBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Section */}
      <div className="relative z-10 flex flex-row justify-between items-center text-amber-100 px-32 py-2">
        {/* LeftSide */}
        <div className="flex flex-row gap-6 text-center">
          <h2 className="text-xs font-semibold">Welcome to HotelBooking</h2>
          <p className="text-xs">Your comfort is our priority</p>
        </div>

        {/* RightSide */}
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
        </div>
      </div>
      <hr />

      {/* Middle Section */}
      <div className="flex flex-row justify-evenly items-center gap-4 mt-8">
        {/* Logo */}
        <div className="flex flex-row gap-1 font-bold text-amber-200">
          <BiLogoAirbnb className="text-5xl" />
          <h1 className="text-xl mt-2">HOTELER</h1>
        </div>

        {/* Nav Links */}
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
                <Link to="/overview" className="block px-4 py-2 hover:text-gray-200">Overview</Link>
                <Link to="/gallery" className="block px-4 py-2 hover:text-gray-200">Gallery</Link>
                <Link to="/services" className="block px-4 py-2 hover:text-gray-200">Services</Link>
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
                <Link to="/deluxe" className="block px-4 py-2 hover:text-gray-200">Deluxe Room</Link>
                <Link to="/suite" className="block px-4 py-2 hover:text-gray-200">Luxury Suite</Link>
                <Link to="/family" className="block px-4 py-2 hover:text-gray-200">Family Room</Link>
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
                <Link to="/events" className="block px-4 py-2 hover:text-gray-200">Events</Link>
                <Link to="/offers" className="block px-4 py-2 hover:text-gray-200">Special Offers</Link>
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
                <Link to="/team" className="block px-4 py-2 hover:text-gray-200">Our Team</Link>
                <Link to="/story" className="block px-4 py-2 hover:text-gray-200">Our Story</Link>
              </div>
            )}
          </div>

          {/* CONTACT LINK */}
          <Link to="/contacts" className="hover:text-gray-300">
            CONTACT
          </Link>
        </div>

        {/* MENU AND SEARCH */}
        <div className="flex flex-row gap-4 text-amber-100">
          <CiSearch className="cursor-pointer" />
          <HiOutlineShoppingCart className="cursor-pointer" />
          <RiMenuFill className="cursor-pointer" />
        </div>
      </div>

      {/* Bottom Section (CTA or Search Bar) */}
     <div className="relative mt-60 flex items-center justify-center">
  <div className="absolute w-[500px] h-[300px] 
                  bg-white/10 
                  border border-white/20 
                  rounded-xl shadow-lg 
                  flex  flex-col items-center justify-center">

                    {/* STAR DISPLAY */}

                   <Tistar  />


                   {/*HEADING DISPLAY */}
    <h1 className="text-4xl mt-3  text-amber-50 text-center">
      Book Your Dream Hotel <br />with Hoteler
    </h1>
    <p className="text-xs text-amber-100 text-center mt-2">Finding the perfect stay has never been this simple. Explore, compare, and book hotels instantly. 
      Let us make your journey as comfortable as your destination</p>
      <button className="mt-3 bg-black text-amber-200 text-center px-4 py-2 font-bold text-sm">BOOK NOW</button>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
