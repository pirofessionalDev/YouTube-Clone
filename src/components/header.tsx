import React from 'react';
import { AlignJustify, Search, Bell, Mic } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Left Section - Logo & Menu */}
        <div className="flex items-center gap-x-4">
          <button className="p-[5px] rounded-full hover:bg-[var(--secondary-background)] transition">
            <AlignJustify className="cursor-pointer" />
          </button>
          <Link href="/">
            <img src="/yt-logo.png" alt="YouTube Logo" className="w-24 h-auto" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 justify-center items-center gap-x-4 max-w-[600px]">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              className="w-full pl-12 p-2 rounded-full text-white text-[15px] font-semibold outline-none border border-gray-700 placeholder-gray-400 bg-black"
              placeholder="Search YouTube"
            />
          </div>
          <button className="p-[5px] rounded-full hover:bg-[var(--button-hover-background)] transition">
            <Mic className="cursor-pointer" />
          </button>
        </div>

        {/* Right Section - Notifications & Profile */}
        <div className="flex items-center gap-x-4">
          <button className="w-[100px] h-[30px] rounded-l-full rounded-r-full flex items-center justify-center bg-[var(--secondary-background)] hover:bg-[var(--button-hover-background)] transition">
            + Create
          </button>
          <button className="p-[5px] rounded-full hover:bg-[var(--secondary-background)] transition">
            <Bell className="cursor-pointer" />
          </button>
          <img
            src="/profile-pic.jpg"
            className="w-8 h-8 rounded-full border border-[var(--gray)] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
