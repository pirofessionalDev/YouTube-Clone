import React from 'react'
import { AlignJustify,Search,Bell } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center gap-x-4'>
        <button className='p-[5px] rounded-full hover:bg-[var(--secondary-background)] transition'>
          <AlignJustify  className='cursor-pointer'/>
        </button>
        <Link href="/pages.tsx">
          <img src='/yt-logo.png' alt='YouTube Logo' className='w-24 h-auto' />
        </Link>
      </div>  {/*Search Bar*/}
      <div className="flex flex-1 justify-center">
        <div className="relative max-w-lg w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />{/*ChatGPT generated code hai yeh*/}
          <input
            className="w-full pl-15 p-2 rounded-full text-white outline-none border border-gray-700 placeholder-gray-400"
            placeholder="Search YouTube"
          />
        </div>
      </div>
      <div className='flex justify-between items-center gap-x-4'>
        <button className='w-[100px] h-[30px] rounded-l-full rounded-r-full flex items-center justify-center bg-[var(--secondary-background)] hover:bg-[var(--button-hover-background)]'>
          + Create
        </button>
        <button className='p-[5px] rounded-full hover:bg-[var(--secondary-background)] transistion'>
        <Bell className='cursor-pointer' /></button>
        <img src='/profile-pic.jpg' className='w-8 h-8 rounded-full border border-bg[var(--gray)] cursor-pointer'/>
      </div>
    </div>
  );
}
