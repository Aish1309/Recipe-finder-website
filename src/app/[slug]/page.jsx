// 'use client'
// import React from 'react'
// import { useRouter } from 'next/navigation'

// export default async function Page({ params }) {
//     const {slug} = await params;
//   return (
//     <div className='p-70 bg-slate-400'>{slug}</div>
//   )
// }

'use client';
import React, { useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AiFillFire } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { RxCountdownTimer } from "react-icons/rx";
import { IoGlobeOutline } from "react-icons/io5";
export default function Page({ params }) {
    const { slug } = params;
    const router = useRouter(); // Initialize useRouter

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipesFromInternalApi = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/recipes/${slug}`);

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || `Failed to fetch recipes: ${response.status}`);
                }
                const data = await response.json();
                setRecipes(data);
            } catch (err) {
                console.error("Failed to fetch recipes from internal API:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchRecipesFromInternalApi();
        }
    }, [slug]); 

    if (loading) {
        return <div className='p-70 bg-slate-400 text-white'>Loading recipes for {slug}...</div>;
    }

    if (error) {
        return <div className='p-70 bg-red-600 text-white'>Error: {error}</div>;
    }

    if (recipes.length === 0) {
        return <div className='p-70 bg-gray-500 text-white'>No recipes found for "{slug}".</div>;
    }

    return (
  <div className='bg-mainbg py-12 flex items-center justify-center md:py-16 lg:py-20'>
      <div className='w-[90%] flex flex-col  gap-6 md:w-[90%] lg:w-[80%] lg:gap-9 '>
        <div className='w-[100%] flex justify-between items-center gap-5'>
          <h2 className='font-figtree text-lg sm:text-xl md:text-2xl lg:text-[26px] text-heading font-semibold '>{slug}</h2>
          {/* <p className='font-figtree text-xs sm:text-sm  text-hoverPrimary font-medium '>view all</p> */}
        </div>

        <div className='grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-3 gap-4   '>
          {recipes.slice(0,6).map((recipe)=>(
          <div key={recipe.id} className='bg-white w-full h-full p-4 sm:p-5 border-[1px] border-otherborder rounded-[28px] flex flex-col gap-4 sm:gap-5'>
            <div className='w-full h-[200px] min-[450px]:max-[600px]:h-[150px] overflow-hidden relative rounded-xl'>
              <Image src={recipe.image} alt={recipe.name} fill className='object-cover'/>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='font-figtree text-md md:text-lg text-heading font-semibold'>{recipe.name}</h3>
              <div className='flex flex-wrap gap-1.5'>
                <div className='flex gap-1.5 items-center pr-7'>
                  <FaStar className='text-yellow-500'/>
                  <p className='font-figtree text-[13px] md:text-[14px] text-para font-medium'>{recipe.rating} ratings</p>
                </div>
                <div className='flex gap-1.5 items-center'>
                  <AiFillFire className='text-yellow-500'/>
                  <p className='font-figtree text-[13px] md:text-[14px] text-para font-medium'>{recipe.caloriesPerServing} calories</p>
                </div>
              </div>
              <div className='flex gap-1.5 items-center'>
                  <RxCountdownTimer  className='text-[#8b8b8b] font-light'/>
                  <p className='font-figtree text-[13px] md:text-[14px] text-para font-medium'>{recipe.cookTimeMinutes} min</p>
              </div>
              <div className='flex gap-1.5 items-center'>
                  <IoGlobeOutline className='text-[#8b8b8b] font-light'/>
                  <p className='font-figtree text-[13px] md:text-[14px] text-para font-medium'>{recipe.cuisine}</p>
              </div>
            </div>
          </div>))}
        </div>
      </div>
    </div>
    );
}