import React from 'react';

export default function Header() {  
  return (   
    <div className="flex items-center justify-between p-4 bg[var--( --secondary-background)] text-white">
      {/* Logo */}
      <img src="/yt-logo.png" alt="YT-Logo" className="w-16 h-auto" />

      {/* Search Bar */}
      <div className="flex flex-1 justify-center text-white">
        <input 
          className="w-2/3 p-2 rounded-lg text-black outline-none border border-gray-400"
          placeholder="Search YouTube..."
        />
      </div>

      {/* Text Section */}
      <div>
        <h1 className="text-lg font-semibold">Hello World</h1>
      </div>
    </div> 
  );
}
