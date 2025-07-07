import React from 'react'
import HeroSection from './HeroSection'
import CuisineCategorySection from './CuisineCategorySection'
import PopularRecipeSection from './PopularRecipeSection'
import DessertSection from './DessertSection'
import MinuteMeals from './MinuteMeals'
import CtaSection from './CtaSection'
const LandingPage = () => {
  return (
    <div>
        <HeroSection/>
        <CuisineCategorySection/>
        <PopularRecipeSection/>
        <DessertSection/>
        <MinuteMeals/>
        {/* <CtaSection/> */}
    </div>
  )
}

export default LandingPage