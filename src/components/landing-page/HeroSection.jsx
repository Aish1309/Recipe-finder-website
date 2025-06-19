import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-mainbg p-10 px-0 flex items-center justify-center sm:py-[80px] lg:pt-[100px] '>
        <div className='w-[90%] flex justify-center sm:w-[85%]  lg:w-[80%] '>
            <div className='w-full flex flex-col gap-3 items-center md:w-[80%] xl:w-[70%] lg:gap-5 xl:gap-6'>
                <h1 className='font-outfit text-3xl text-heading text-center font-medium sm:text-4xl lg:text-5xl lg:leading-[120%]'>Discover Pure, Healthy Recipes That Nourish Your Soul</h1>
                <p className='font-figtree text-md text-para text-center sm:text-lg lg:text-xl lg:w-[90%]'>From wholesome breakfasts to nutrient-rich dinners, explore meals curated for wellness, flavor, and simplicity.</p>
                <div className='w-full h-[46px] flex gap-1.5 pt-1.5 lg:w-[85%] lg:gap-2'>
                    <input className='w-[90%] h-full p-2 bg-inherit border-[1px] border-border rounded-xl 
                    focus:border-borderfocus focus:outline-none font-figtree text-sm lg:text-md'></input>
                    <button className='font-figtree h-full md:flex items-center p-1.5 px-4 rounded-lg bg-primary hover:bg-hoverPrimary text-sm text-white'>Explore</button>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default HeroSection