"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Sidebar = () => {
  const [sidebarOpen,setSidebarOpen]=useState(false);
  return (
  <>
  <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 text-white text-2xl"
      >
        ☰
      </button>
  <aside className={`bg-slate-900 w-64 min-h-screen lg:block fixed top-0 left-0 z-50 ${sidebarOpen?"block":"hidden"} lg:block`}>
    <div className='flex justify-end p-4 lg:hidden'>
      <button onClick={()=>setSidebarOpen(false)} className='text-white text-2xl cursor-pointer'>✕</button>
    </div>
    <div className='flex justify-center items-center mb-8'>
      <h1 className='text-white text-4xl mt-4 px-8 py-2 font-bold'>Akshay <span className='text-cyan-500'>Krishnan</span></h1>
    </div>
    <nav className='space-y-4'>
      <Link href="/" className='block text-2xl text-white px-8 p-2 hover:bg-cyan-600 m-3 rounded-lg'>🏠 Home</Link>
      <Link href="/about" className='block text-2xl text-white px-8 py-2 m-3 hover:bg-cyan-600 rounded-lg'>👤 About</Link>
      <Link href="/skills" className='block text-2xl text-white px-8 py-2 m-3 hover:bg-cyan-600 rounded-lg'>💻 Skills</Link>
      <Link href="/projects" className='block text-2xl text-white px-8 py-2 m-3 hover:bg-cyan-600 rounded-lg'>🚀 Projects</Link>
      <Link href="/experience" className='block text-2xl text-white px-8 py-2 m-3 hover:bg-cyan-600 rounded-lg'>💼 Experience</Link>
      <Link href="/education" className='block text-2xl text-white px-8 py-2 m-3 hover:bg-cyan-600 rounded-lg'>🎓 Education</Link>
      <Link href="/contact" className='block text-2xl text-white px-8 py-2 m-3 hover:bg-cyan-600 rounded-lg'>✉ Contact</Link>
    </nav>
  </aside>
  </>
  )
}

export default Sidebar