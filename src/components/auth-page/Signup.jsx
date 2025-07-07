'use client'
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignupForm = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-black rounded-2xl p-8 shadow-md font-figtree">
        <h2 className="text-2xl font-semibold text-black mb-6">Create your account</h2>

        <form className="flex flex-col gap-4 text-[16px] text-black">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="px-3 py-2 border border-black rounded-md bg-white text-[16px] focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="px-3 py-2 border border-black rounded-md bg-white text-[16px] focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white py-2 rounded-md hover:opacity-90 transition"
          >
            Sign up
          </button>
        </form>

        <div className="my-6 text-center text-black text-[16px]">or</div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-2 border border-black rounded-md hover:bg-gray-100 transition text-[16px]"
        >
          <FcGoogle size={20} />
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
