import React from 'react';
import { Home, Layers2, TvMinimalPlay, ChevronRight, History, ListVideo, Clock, ThumbsUp } from 'lucide-react';

export default function SideBar() {
  return (
    <div className="w-60 h-screen bg-[var(--background)] overflow-y-auto custom-scrollbar p-[2px] space-y-2.5">
      {/* Sidebar Items */}
      <button className="flex w-full h-12 rounded-2xl bg-[var(--secondary-background)] text-white font-semibold items-center p-[10px] hover:bg-[var(--button-hover-background)] transition gap-5 cursor-pointer">
        <Home />
        Home
      </button>
      <button className="flex w-full h-12 rounded-2xl text-white font-semibold items-center p-[10px] hover:bg-[var(--button-hover-background)] transition gap-5 cursor-pointer">
        <Layers2 />
        Shorts
      </button>
      <button className="flex w-full h-12 rounded-2xl text-white font-semibold items-center p-[10px] hover:bg-[var(--button-hover-background)] transition gap-5 cursor-pointer">
        <TvMinimalPlay />
        Subscription
      </button>

      {/* Border Separator Below Subscription */}
      <div className="border-b border-gray-600 pb-2"></div>

      {/* You Section */}
      <div>
        <button className="flex w-full h-12 rounded-2xl text-white font-semibold items-center p-[10px] cursor-pointer hover:bg-[var(--button-hover-background)] transition gap-5">
          You
          <ChevronRight className="ml-auto" /> 
        </button>
        <button className="flex w-full h-12 rounded-2xl text-white font-semibold items-center p-[10px] cursor-pointer hover:bg-[var(--button-hover-background)] transition gap-5">
          History
          <History className="ml-auto" /> 
        </button>
        <button className="flex w-full h-12 rounded-2xl text-white font-semibold items-center p-[10px] cursor-pointer hover:bg-[var(--button-hover-background)] transition gap-5">
          Playlists
          <ListVideo className="ml-auto" />
        </button>
        <button className="flex w-full h-12 rounded-2xl text-white font-semibold items-center p-[10px] cursor-pointer hover:bg-[var(--button-hover-background)] transition gap-5">
          Watch Later
          <Clock className="ml-auto" />
        </button>
        <button className="flex w-full h-12 rounded-2xl text-white font-semibold items-center p-[10px] cursor-pointer hover:bg-[var(--button-hover-background)] transition gap-5">
          Liked Videos
          <ThumbsUp className="ml-auto" /> 
        </button>
        
        {/* Border Separator Below "You" Section */}
        <div className="border-b border-gray-600 pb-2"></div>

        {/* Subscriptions Section */}
        <div>
          <h3 className="text-white text-sm font-semibold px-4 py-2">Subscriptions</h3>
          <button className="flex items-center w-full h-12 rounded-2xl text-white font-semibold p-[10px] cursor-pointer hover:bg-[var(--button-hover-background)] transition gap-3">
            {/* Improved Profile Image */}
            <img 
              src="/NC-logo.png" 
              alt="Networking Chuck" 
              className="w-9 h-9 rounded-full object-cover shadow-md border border-gray-700"
            />
            <span className="truncate">Networking Chuck</span>
          </button>
        </div>
      </div>
    </div>
  );
}
