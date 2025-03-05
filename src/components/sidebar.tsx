import React from 'react';
import { Home, Layers2, TvMinimalPlay, ChevronRight,History,ListVideo, Clock, ThumbsUp } from 'lucide-react';

export default function SideBar() {
  return (
    <div className="w-60 h-screen bg-[var(--background)] overflow-y-auto custom-scrollbar p-[2px] space-y-2.5">
      {/* Sidebar Items */}
      <button className="flex w-full h-12 rounded-2xl bg-[var(--secondary-background)] text-white font-semibold items-center p-[10px] hover:bg-gray-700 transition gap-5 cursor-pointer">
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
      <div className="border-b border-gray-600 pb-2"></div> {/*the border is treated as a single div tag*/}
      <div>
        <button className="flex w-full h-12 rounded-2xl text-white font-semibold items-center p-[10px] cursor-pointer hover:bg-[var(--button-hover-background)] transition gap-5">
          You
          <ChevronRight /> {/* Pushes Chevron to Right */}
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
          Liked Video
          <ThumbsUp className="ml-auto" /> {/* Pushes Chevron to Right */}
        </button>
    <div className="border-b border-gray-600 pb-2"></div>  
      </div>
    </div>
  );
}
