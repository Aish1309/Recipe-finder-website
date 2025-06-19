import React from 'react'
import HeroSection from './HeroSection'
import CuisineCategorySection from './CuisineCategorySection'
import PopularRecipeSection from './PopularRecipeSection'
import DessertSection from './DessertSection'
import MinuteMeals from './MinuteMeals'
const LandingPage = () => {
  return (
    <div>
        <HeroSection/>
        <CuisineCategorySection/>
        <PopularRecipeSection/>
        <DessertSection/>
        <MinuteMeals/>
    </div>
  )
}

export default LandingPage