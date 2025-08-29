import React from 'react'

const Footer = () => {
  return (
     <div className="w-full bg-black py-8 mt-">
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

  )
}

export default Footer
