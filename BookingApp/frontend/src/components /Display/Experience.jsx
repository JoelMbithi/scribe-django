import React from 'react'
import dinner from '../../assets/swimming1.jpeg'

const Experience = () => {
  return (
    <div className='bg-black flex flex-row items-center h-screen py-4 px-44'>
      {/* Image Section */}

      <div className="relative w-1/2 flex flex-col">
  {/* Background panel */}
  <div className="bg-[rgb(15,15,14)] h-54 w-30 mt-20"></div>
  <div className="absolute bg-amber-100 h-30 w-50 left-36 top-0 "></div>
  {/* Image on top */}
  <img
    className="absolute object-cover top-2 left-4 h-50 w-80 z-10 mb-100"
    src={dinner}
    alt=""
  />
 
{/* Text below */}
        <p className="mt-8 text-amber-100 text-sm">
          Discover unforgettable stays where comfort meets elegance,<br /> 
          offering you a perfect blend of relaxation and adventure. <br />
          From fine dining to breathtaking views, every moment is <br /> crafted to create lasting memories.
        </p>
</div>

{/* Right Column */}

<div className='flex flex-col w-1/2  relative top-0'>
        <h1 className='text-amber-200 text-sm '>EXPERIENCE .</h1>
        <h2 className='text-4xl mt- text-amber-200'>Experience The Best Hotels In The World</h2>
        <p className='text-amber-100 text-xs mt-6'>Indulge in a world of luxury and comfort with our exquisite hotel experiences. From stunning ocean views to gourmet dining, every detail is designed to make your stay unforgettable. Whether you're seeking relaxation or adventure, our hotels offer the perfect blend of both, ensuring a memorable getaway.</p>
    
   
            <button className='g-amber-200/10 w-40 text-amber-50 px-6 py-3 ring-1 ring-amber-100 mt-4 hover:bg-amber-200/30 transition duration-300 ease-in-out'>
            Explore More
            </button>

            <img className='object-cover h-60 w-120 mt-8' src={dinner} alt="" />

</div>

    </div>
  )
}

export default Experience
