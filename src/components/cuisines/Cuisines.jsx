'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Cusines = () => {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    // If you're using your own API route
    fetch('/api/cuisine')
      .then(res => res.json())
      .then(data => setCuisines(data))
  }, [])
  return (
    <div className='bg-otherbg py-12 flex items-center justify-center md:py-16 lg:py-20'>
    <div className='w-[90%] flex flex-col  gap-6 md:w-[90%] lg:w-[80%] lg:gap-[52px] '>
        <h2 className='font-figtree text-lg sm:text-xl md:text-2xl lg:text-[26px] text-heading font-semibold '>Explore All Cuisines</h2>

        <div className="w-[100%] grid grid-cols-2 gap-4 lg:gap-y-9 sm:grid sm:grid-cols-4 lg:grid-cols-5   ">
            {cuisines.map((cuisine) => (
              <Link href={`/cuisines/${cuisine.name}`} key={cuisine.name} className="w-max flex flex-col gap-4 items-center cursor-pointer">
                <Image src={cuisine.image} alt='recipe image' width={120} height={120} className='rounded-[100%] '/>
                <h3 className="font-figtree text-md text-para font-medium ">{cuisine.name}</h3>
              </Link>
            ))}

          </div>


    </div>
    </div>
  )
}

export default Cusines