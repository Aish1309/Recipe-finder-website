'use client'
import React,{useState,useRef, useEffect} from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import logo from '@public/Logo/purepalatelogo.svg'
import Link from 'next/link';
const Navbar = () => {
    const [menuClick,setMenuClick] = useState(false);
  const dropdownRef = useRef(null)

    const handleMenuOpen = () =>{
        setMenuClick(!menuClick);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setMenuClick(false)
        }
        }

        if (menuClick) {
        document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuClick])

  return (
    <div className='bg-inherit p-1 px-4 flex items-center justify-center '>
        <div className='w-[100%] flex justify-between items-center gap-2 md:w-[90%] '>
            <Link href='/' className=''>
                <Image src={logo} alt='logo' className='w-auto h-11'/>
            </Link>

            <div className='hidden md:flex justify-between items-center'>
            <div className='font-figtree flex gap-5 text-md text-neutral-800'>
                        <p>Recipe</p>
                        <p>Add recipe</p>
                        <p>Blog</p>
                        <p>About us</p>
                    </div>
            </div>
            <button className='font-figtree  hidden md:flex p-1.5 px-4 rounded-lg bg-primary hover:bg-hoverPrimary text-sm text-white'>Sign up</button>


           <div className='md:hidden ' ref={dropdownRef}>
            {!menuClick &&<RiMenu3Line onClick={handleMenuOpen} className='text-xl text-para'/>}
            {menuClick && <IoMdClose onClick={handleMenuOpen} className='text-2xl text-para' />}
            {menuClick &&
                <div
                className={`absolute right-0 top-[3.2rem] w-full p-4 z-10 flex flex-col gap-6 border-b-[1px] border-border rounded-b-2xl bg-mainbg `}
                >                 
                    <div className='font-figtree flex flex-col gap-2 text-m text-neutral-800'>
                        <p>Recipe</p>
                        <p>Add recipe</p>
                        <p>Blog</p>
                        <p>About us</p>
                    </div>
                    <button className='font-figtree w-full p-2.5 px-7 rounded-lg bg-primary hover:bg-hoverPrimary text-sm text-white'>Sign up</button>
                </div>
            }
            </div>
        </div>
    </div>
  )
}

export default Navbar

