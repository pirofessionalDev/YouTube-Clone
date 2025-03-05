import React from 'react'
import Header from '../components/header'
import Sidebar from '@/components/sidebar';

export default function Home() {
  return (
    <div className='w-screen h-screen bg-[var(--background)]'>
      <div>
        <Header />
        <Sidebar />
      </div>
    </div>
  );
}
