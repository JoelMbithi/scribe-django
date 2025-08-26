import React from 'react'
import { GiBulb } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import swimming from '../../assets/swimming.jpeg'
import corridor from '../../assets/corridor.jpeg'

const DiscoverMore = () => {
  return (
    <div className='bg-[rgb(10,8,8)] h-screen text-white flex flex-row justify-center items-center px-44'>
      
      {/* LEFT SIDE */}
      <div className='flex flex-col w-1/2 justify-evenly items-cente'>
        <h1 className='text-amber-800 flex flex-row gap-2 text-sm tracking-wide'>
          <span>HOTELER</span> <span>LUXURY</span> <span>HOTEL</span>
        </h1>
        <h2 className='text-4xl mt-4  leading-snug'>
          We Provide Outdoor <br /> Activities To All Visitors
        </h2>
        <p className='text-xs text-amber-200 mt-6'>Hoteler has hotels which views the coast, excellent food <br />
        & has been voted the happiest, healthiest and best city <br />
        in the town</p>

        <div className='flex flex-row gap-10 mt-10'>
            <div className='flex flex-row gap-4'>
              <GiBulb className='text-amber-200 h-15 w-20'/>
              <h1>The Best <br /> Lighting</h1>
            </div>

             <div className='flex flex-row gap-4'>
               <FaPersonSwimming  className='text-amber-200 h-15 w-20'/>
               <h1>The Best <br /> Swimming</h1>
            </div>
        </div>

       {/* LIST OF ACTIVITIES */}
<div className='flex flex-col gap-3 mt-10 text-gray-300'>
  <div className='flex items-center gap-2'>
    <span className="text-amber-200 text-lg">✓</span>
    <p>Guided Beach Walks & Coastal Tours</p>
  </div>

  <div className='flex items-center gap-2'>
    <span className="text-amber-200 text-lg">✓</span>
    <p>Luxury Spa & Wellness Treatments</p>
  </div>

  <div className='flex items-center gap-2'>
    <span className="text-amber-200 text-lg">✓</span>
    <p>Outdoor Adventure Sports & Activities</p>
  </div>

  <h1 className='bg-black/50 mt-4 w-40 items-center p-4 '>Discover More</h1>
</div>

      </div>
      
      {/* RIGHT SIDE (example: image instead of duplicate text) */}
     <div className='flex w-1/2 justify-center items-center'>
  <div className='relative ring-1 ring-amber-800/50 w-[300px] h-[300px] flex items-center justify-center'>
    <img 
      className='h-72 w-72 object-cover ml-50 mb-50 absolute z-10' 
      src={swimming} 
      alt="Swimming" 
    />
     <img 
      className='h-72 w-72 object-cover mr-50 mt-50 absolute z-10' 
      src={corridor} 
      alt="corridor" 
    />
  </div>
</div>

    </div>
  )
}

export default DiscoverMore
