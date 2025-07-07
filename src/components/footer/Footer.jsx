'use client'
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { PiTwitterLogoDuotone } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import logo from '@public/Logo/purepalatelogo.svg'
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-[#FAF9F7] border-t border-border text-para font-figtree">
      <div className="w-[90%] mx-auto py-12 flex flex-col gap-10 lg:flex-row lg:justify-between">
        {/* Left - Logo & Description */}
        <div className="flex flex-col gap-3 max-w-sm">
          <h2 className="text-heading font-semibold text-lg">
            <Link href='/' className=''>
                <Image src={logo} alt='logo' className='w-auto h-10'/>
            </Link>          </h2>
          <p className="text-sm md:text-[16px] leading-relaxed">
                Effortlessly browse thousands of recipes, tailored to your tastes and what's in your pantry. Your culinary adventure starts here.          </p>
        </div>

        {/* Middle - Links */}
        <div className="flex flex-wrap gap-10 text-sm md:text-[16px]">
          <div className="flex flex-col gap-2">
            {/* <h4 className="font-semibold text-heading">Quick links</h4> */}
            <Link href="/">Home</Link>
            <Link href="/">Recipes</Link>
            <Link href="/">Blog</Link>
          </div>
          <div className="flex flex-col gap-2">
            {/* <h4 className="font-semibold text-heading">Quick links</h4> */}
            <Link href="/">Share Recipe</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className="flex flex-col gap-2">
            {/* <h4 className="font-semibold text-heading">Legal</h4> */}
            <Link href="/">Terms Of Use</Link>
            <Link href="/">Privacy & Cookies</Link>
          </div>
        </div>

        {/* Right - Newsletter */}
        <div className="w-full sm:max-w-sm flex flex-col gap-4">
          <h4 className="font-semibold text-heading text-sm md:text-[16px]">Newsletter</h4>
          <p className="text-sm md:text-[16px]">Subscribe to our newsletter to get more free tip</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:border-borderfocus text-sm"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-hoverPrimary text-sm w-full sm:w-fit">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright + social */}
      <div className="border-t border-border py-6 text-center text-xs flex flex-col sm:flex-row justify-between items-center w-[90%] mx-auto gap-3">
        <p>© 2025 PurePalate. All Right Reserved</p>
        <div className="flex gap-4 text-lg text-heading">
          <FaXTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaPinterestP />
          <FiYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
