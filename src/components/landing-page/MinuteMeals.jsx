// 'use client'
// import React,{useState,useEffect} from 'react';
// import Image from 'next/image';
// import { AiFillFire } from "react-icons/ai";
// import { FaStar } from "react-icons/fa6";
// import { RxCountdownTimer } from "react-icons/rx";
// import { IoGlobeOutline } from "react-icons/io5";


// const MinuteMeals = () => {
//   const [recipes,setRecipes] = useState([]);

//   useEffect(()=>{
//     fetch('/api/minuteRecipe').
//     then(res=>res.json()).
//     then(data=>setRecipes(data))
//   })
//   return (
//     <div className='bg-otherbg py-12 flex items-center justify-center md:py-16 lg:py-20'>
//           <div className='w-[90%] flex flex-col  gap-6 md:w-[90%] lg:w-[80%] lg:gap-9 '>
//             <div className='w-[100%] flex justify-between items-center gap-5'>
//               <h2 className='font-figtree text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[30px] text-heading font-semibold '>Minute Meals</h2>
//             </div>
    
//             <div className='grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-3 gap-4   '>
//               {recipes.map((recipe)=>(
//               <div key={recipe.id} className='bg-white w-full h-full p-4 sm:p-5 border-[1px] border-otherborder rounded-[28px] flex flex-col gap-4 sm:gap-5'>
//                 <div className='w-full h-[200px] min-[450px]:max-[600px]:h-[150px] overflow-hidden relative rounded-xl'>
//                   <Image src={recipe.image} alt={recipe.name} fill className='object-cover'/>
//                 </div>
//                 <div className='flex flex-col gap-2'>
//                   <h3 className='font-figtree text-md md:text-lg text-heading font-semibold'>{recipe.name}</h3>
//                   <div className='flex flex-wrap gap-1.5'>
//                     <div className='flex gap-1.5 items-center pr-7'>
//                       <FaStar className='text-yellow-500'/>
//                       <p className='font-figtree text-[13px] md:text-[14px] text-para font-medium'>{recipe.rating} ratings</p>
//                     </div>
//                     <div className='flex gap-1.5 items-center'>
//                       <AiFillFire className='text-yellow-500'/>
//                       <p className='font-figtree text-[13px] md:text-[14px] text-para font-medium'>{recipe.caloriesPerServing} calories</p>
//                     </div>
//                   </div>
//                   <div className='flex gap-1.5 items-center'>
//                       <RxCountdownTimer  className='text-[#8b8b8b] font-light'/>
//                       <p className='font-figtree text-[13px] md:text-[14px] text-para font-medium'>{recipe.cookTimeMinutes} min</p>
//                   </div>
//                   <div className='flex gap-1.5 items-center'>
//                       <IoGlobeOutline className='text-[#8b8b8b] font-light'/>
//                       <p className='font-figtree text-[13px] md:text-[14px] text-para font-medium'>{recipe.cuisine}</p>
//                   </div>
//                 </div>
//               </div>))}
//             </div>
//           </div>
//         </div>
//   )
// }

// export default MinuteMeals

'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiFillFire } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { RxCountdownTimer } from "react-icons/rx";
import { IoGlobeOutline } from "react-icons/io5";

const MinuteMeals = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/minuteRecipe')
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
        setLoading(false);
      });
  }, []);

  const renderSkeletonCards = () => {
    return Array(3).fill(0).map((_, i) => (
      <div key={i} className='bg-white w-full h-full p-4 sm:p-5 border-[1px] border-otherborder rounded-[28px] flex flex-col gap-4 sm:gap-5 animate-pulse'>
        <div className='w-full h-[200px] min-[450px]:max-[600px]:h-[150px] bg-gray-300 rounded-xl'></div>
        <div className='flex flex-col gap-2'>
          <div className='w-[60%] h-[18px] bg-gray-300 rounded'></div>
          <div className='w-[80%] h-[14px] bg-gray-200 rounded'></div>
          <div className='w-[70%] h-[14px] bg-gray-200 rounded'></div>
          <div className='w-[50%] h-[14px] bg-gray-200 rounded'></div>
          <div className='w-[40%] h-[14px] bg-gray-200 rounded'></div>
        </div>
      </div>
    ));
  };

  return (
    <div className='bg-otherbg py-12 flex items-center justify-center md:py-16 lg:py-20'>
      <div className='w-[90%] flex flex-col gap-6 md:w-[90%] lg:w-[80%] lg:gap-9'>
        <div className='w-full flex justify-between items-center gap-5'>
          <h2 className='font-figtree text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[30px] text-heading font-semibold'>
            Minute Meals
          </h2>
        </div>

        <div className='grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-3 gap-4'>
          {loading
            ? renderSkeletonCards()
            : recipes.map((recipe) => (
                <div key={recipe.id} className='bg-white w-full h-full p-4 sm:p-5 border-[1px] border-otherborder rounded-[28px] flex flex-col gap-4 sm:gap-5'>
                  <div className='w-full h-[200px] min-[450px]:max-[600px]:h-[150px] overflow-hidden relative rounded-xl'>
                    <Image src={recipe.image} alt={recipe.name} fill className='object-cover' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h3 className='font-figtree text-md md:text-lg text-heading font-semibold'>{recipe.name}</h3>
                    <div className='flex flex-wrap gap-1.5'>
                      <div className='flex gap-1.5 items-center pr-7'>
                        <FaStar className='text-yellow-500' />
                        <p className='font-figtree text-[13px] md:text-[14px] text-para font-medium'>{recipe.rating} ratings</p>
                      </div>
                      <div className='flex gap-1.5 items-center'>
                        <AiFillFire className='text-yellow-500' />
                        <p className='font-figtree text-[13px] md:text-[14px] text-para font-medium'>{recipe.caloriesPerServing} calories</p>
                      </div>
                    </div>
                    <div className='flex gap-1.5 items-center'>
                      <RxCountdownTimer className='text-[#8b8b8b] font-light' />
                      <p className='font-figtree text-[13px] md:text-[14px] text-para font-medium'>{recipe.cookTimeMinutes} min</p>
                    </div>
                    <div className='flex gap-1.5 items-center'>
                      <IoGlobeOutline className='text-[#8b8b8b] font-light' />
                      <p className='font-figtree text-[13px] md:text-[14px] text-para font-medium'>{recipe.cuisine}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default MinuteMeals;
