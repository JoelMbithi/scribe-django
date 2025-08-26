import React from 'react'
import Family from '../../assets/FamilyDiscount.jpeg'
import couple from '../../assets/coupleoffer.jpeg'
import Others from '../../assets/othersoffer.jpeg'

const OffersRooms = () => {
  return (
    <div className='bg-[rgb(10,8,8)] flex justify-center items-cente p-20 h-screen text-white'>
        {/* TITLE */}

        <div>
        <h1 className='text-sm text-amber-800 font-bold gap-4 text-center'>WHAT WE OFFER</h1>
        <h2 className='text-4xl mt-4 text-center'>Get Our Special Offer.</h2>

        {/* IMAGES */}
       <div className='grid grid-cols-3 gap-4 mt-10'>
  <div className="relative w-80 h-80">
    <img className='w-full h-full object-cover ' src={Family} alt="Family Discount" />
    <h1 className='absolute inset-x-0 top-66  text-amber-100 text-sm  bg-black/80 p-2 w-40'>
      Family Discount
    </h1>
  </div>

  {/* couple */}

   <div className="relative w-80 h-80">
    <img className='w-full h-full object-cover ' src={couple} alt="Family Discount" />
    <h1 className='absolute inset-x-0 top-66  text-amber-100 text-sm  bg-black/80 p-2 w-40'>
      Couples Offer
    </h1>
  </div>

  {/*  others */}

   <div className="relative w-80 h-80">
    <img className='w-full h-full object-cover ' src={Others} alt="Family Discount" />
    <h1 className='absolute inset-x-0 top-66  text-amber-100 text-sm  bg-black/80 p-2 w-50'>
     Buy One get One Free
    </h1>
  </div>
</div>

        </div>
    </div>
  )
}

export default OffersRooms
