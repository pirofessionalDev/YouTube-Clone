import React from 'react'
import { AlignJustify,Search } from 'lucide-react';
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
      </div>  
      <div className='flex flex-1 justify-center'> {/*Search Bar*/}
        <input className=' max-w-lg w-full p-2 rounded-full text-white outline-none border border-b-gray-800 cursor-text' 
        placeholder='Search YouTube'  />
      </div>
    </div>
  );
}
