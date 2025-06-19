import React from 'react'
import dessert from '@public/Landing Page/dessert.jpg'
import Image from 'next/image'
const DessertSection = () => {
  return (
    <div className='bg-otherbg py-12 flex items-center justify-center md:py-16 lg:py-20'>
        <div className='w-[90%] md:w-[90%] lg:w-[80%] flex flex-col-reverse sm:grid sm:grid-cols-2 md:items-center gap-4 lg:gap-9'>
            <div className='flex flex-col  gap-3'>
                <h2 className='font-figtree min-[900px]:w-[80%] text-lg sm:text-xl md:text-2xl lg:text-[26px] text-heading font-semibold '>
                   Sweet Endings, Delicious Beginnings
                </h2>
                <p className='font-figtree text-sm md:text-[15px] lg:text-[16px] lg:leading-[150%] text-para font-normal'>
                    Satisfy your cravings with our collection of wholesome and delightful desserts. From naturally sweetened treats to nutrient-packed indulgences, discover how delicious healthy can be!
                </p>
                <button className='font-figtree w-max h-max md:flex items-center mt-0.5 p-1.5 px-4 rounded-lg bg-primary hover:bg-hoverPrimary text-sm text-white'>
                    Indulge now
                </button>
            </div>

            <div className='w-full h-[180px] min-[400px]:max-[5400px]:h-[250px] min-[540px]:max-[640px]:h-[300px] sm:h-[220px] lg:h-[250px]
            overflow-hidden relative rounded-xl'>
                <Image src={dessert} alt="dessert" fill className='object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default DessertSection