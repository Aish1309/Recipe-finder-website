import React from 'react'

const CtaSection = () => {
  return (
        <div className='bg-otherbg py-12 flex items-center justify-center md:py-16 lg:py-20'>
            <div className='w-[90%] md:w-[90%] lg:w-[80%] flex'>
                <div className='flex flex-col  gap-3'>
                    <h2 className='font-figtree min-[900px]:w-[80%] text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[30px] text-heading font-semibold '>
                       Your Healthier Kitchen Starts
                    </h2>
                    <p className='font-figtree text-sm md:text-[15px] lg:text-[16px] lg:leading-[150%] text-para font-normal'>
                        Become a part of our thriving community of healthy food enthusiasts. Sign up for free to save your favorite recipes, share your own culinary masterpieces, and get personalized recommendations delivered straight to your inbox. 
                    </p>
                    <button className='font-figtree w-max h-max md:flex items-center mt-0.5 p-1.5 px-4 rounded-lg bg-primary hover:bg-hoverPrimary text-sm text-white'>
                        Get Started
                    </button>
                </div>

            </div>
        </div>
  )
}

export default CtaSection