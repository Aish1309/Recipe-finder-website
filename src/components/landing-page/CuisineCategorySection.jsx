// 'use client'
// import React, { useEffect, useState } from 'react'
// import Image from 'next/image';
// import Link from 'next/link';
// const CuisineCategorySection = () => {
//   const [cuisines, setCuisines] = useState([]);

//   useEffect(() => {
//     // If you're using your own API route
//     fetch('/api/cuisine')
//       .then(res => res.json())
//       .then(data => setCuisines(data))
//   }, [])
//   return (
//     <div className='bg-otherbg py-12 flex items-center justify-center md:py-16 lg:py-20'>
//     <div className='w-[90%] flex flex-col items-center gap-6 md:w-[90%] lg:w-[80%] lg:gap-9 '>
//         <h2 className='font-figtree text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[30px] text-heading font-semibold '>Cusine Category</h2>

//         <div className="hidden w-[100%] sm:grid grid-cols-4 gap-4 lg:gap-y-9 ">
//             {cuisines.slice(0,8).map((cuisine) => (
//               <Link href={`/cuisines/${cuisine.name}`} key={cuisine.name} className="flex flex-col gap-4 items-center cursor-pointer">
//                 <Image src={cuisine.image} alt='recipe image' width={120} height={120} className='rounded-[100%] '/>
//                 <h3 className="font-figtree text-md text-para font-medium ">{cuisine.name}</h3>
//               </Link>
//             ))}

//           </div>
//         <div className="w-[100%] grid grid-cols-2 gap-4 sm:hidden">
//             {cuisines.slice(0,6).map((cuisine) => (
//               <Link href={`/${cuisine.name}`} key={cuisine.name} className="flex flex-col gap-2 items-center cursor-pointer">
//                 <Image src={cuisine.image} alt='recipe image' width={90} height={90} className='rounded-[100%]'/>
//                 <h3 className="font-figtree text-sm text-para font-medium ">{cuisine.name}</h3>
//               </Link>
//             ))}

//           </div>
            
//             <Link href='/cuisines' className='font-figtree py-1 px-3 border-[1px] border-primary rounded-lg text-sm text-primary font-medium  '>view all</Link>

//     </div>
//     </div>
//   )
// }

// export default CuisineCategorySection

'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const CuisineCategorySection = () => {
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cuisine')
      .then(res => res.json())
      .then(data => {
        setCuisines(data);
        setLoading(false);
      });
  }, []);

  // Skeleton loader
  const renderSkeleton = (count, isMobile = false) => {
    return Array(count).fill(0).map((_, i) => (
      <div key={i} className="flex flex-col gap-2 items-center animate-pulse">
        <div className={`rounded-full bg-gray-300 ${isMobile ? 'w-[90px] h-[90px]' : 'w-[120px] h-[120px]'}`} />
        <div className="w-[60px] h-[14px] bg-gray-300 rounded" />
      </div>
    ));
  };

  return (
    <div className='bg-otherbg py-12 flex items-center justify-center md:py-16 lg:py-20'>
      <div className='w-[90%] flex flex-col items-center gap-6 md:w-[90%] lg:w-[80%] lg:gap-9'>
        <h2 className='font-figtree text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[30px] text-heading font-semibold'>Cuisine Category</h2>

        {/* Desktop grid */}
        <div className="hidden w-[100%] sm:grid grid-cols-4 gap-4 lg:gap-y-9">
          {loading
            ? renderSkeleton(8)
            : cuisines.slice(0, 8).map((cuisine) => (
              <Link href={`/cuisines/${cuisine.name}`} key={cuisine.name} className="flex flex-col gap-4 items-center cursor-pointer">
                <Image src={cuisine.image} alt='recipe image' width={120} height={120} className='rounded-full' />
                <h3 className="font-figtree text-md text-para font-medium">{cuisine.name}</h3>
              </Link>
            ))
          }
        </div>

        {/* Mobile grid */}
        <div className="w-[100%] grid grid-cols-2 gap-4 sm:hidden">
          {loading
            ? renderSkeleton(6, true)
            : cuisines.slice(0, 6).map((cuisine) => (
              <Link href={`/${cuisine.name}`} key={cuisine.name} className="flex flex-col gap-2 items-center cursor-pointer">
                <Image src={cuisine.image} alt='recipe image' width={90} height={90} className='rounded-full' />
                <h3 className="font-figtree text-sm text-para font-medium">{cuisine.name}</h3>
              </Link>
            ))
          }
        </div>

        {!loading && (
          <Link href='/cuisines' className='font-figtree py-1 px-3 border-[1px] border-primary rounded-lg text-sm text-primary font-medium'>
            view all
          </Link>
        )}
      </div>
    </div>
  );
};

export default CuisineCategorySection;
