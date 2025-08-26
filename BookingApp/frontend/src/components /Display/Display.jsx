import React from 'react'
import display from '../../assets/imagedisplay2.jpeg'

const Display = () => {
  return (
   <nav className='flex flex-row justify-be  h-screen '>
    {/* LEFT SIDE */}
    <div className='bg-black h-screen text-white w-3/5 flex flex-col px-8 py-10 justify-center items-cente    '>
     <h1 className='text-sm text-amber-200'>About Luxury Hotel</h1>
     <h2 className='text-2xl mt-4'>LUXURY BEST HOTOTELE IN <br /> NAIROBI,KENYA</h2>
   <p className='mt-6 text-amber-100 text-sm leading-relaxed'>
  Experience the perfect blend of comfort, elegance, and <br /> modern luxury at our hotel in the heart of Nairobi. <br />
  From world-class rooms and fine dining to <br /> personalized services and serene surroundings, <br />every detail is 
  designed to make your stay <br /> unforgettable. Whether you’re here for business or <br />leisure, we promise 
  an exclusive experience where  <br />relaxation meets sophistication.
</p>
   
   <div className='flex flex-row gap-10 mt-10'>
  {/* Guests Served */}
  <div className="flex flex-col items-center">
    <h2 className='flex gap-2 text-4xl text-amber-200'>250 <span className='text-2xl'>+</span></h2>
    <p className="text-xs text-amber-50 mt-2">Happy Guests</p>
  </div>

  {/* Rating */}
  <div className="flex flex-col items-center">
    <h2 className='flex gap-2 text-4xl text-amber-200'>4.9</h2>
    <p className="text-xs text-amber-50 mt-2">Customer Rating</p>
  </div>
  
</div>
  <hr className='text-amber-100 mt-10 w-100'/>
    <h1 className='bg-amber-800 w-40 flex items-center justify-center text-white py-4 mt-10'>READ MORE</h1>
    
    </div>
 
  <div className='absolute left-1/3 top-200'>
     <div className="absolute w-[500px] h-[300px] 
                    bg-white/10 
                    border border-white/20 
                    rounded-xl shadow-lg 
                    flex  flex-col items-center justify-center">
                         <img 
      src={display} 
      alt="Description of image" 
      className="w-full h-full object-cover rounded-xl" 
    />
  
                   
    </div>
    
  </div>
    {/* RIGHT SIDE */}

    <div className='flex w-2/5 h-screen '>
   <img className='  flex h-screen w-full' src={display} alt="" />
    </div>
   </nav>
  )
}

export default Display
