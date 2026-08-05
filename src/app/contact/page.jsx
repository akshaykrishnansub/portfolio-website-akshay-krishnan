"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Contact = () => {
    useEffect(()=>{
        document.title="My Contact"
    },[])
  return (
    <div className='bg-slate-950 flex min-h-screen'>
      <Sidebar />
      <main className='flex-1 overflow-x-auto lg:m-16 sm:pt-16 lg:p-16'>
        <div className='text-center mb-8 mt-16'>
          <h1 className='text-cyan-400 font-bold'>CONTACT</h1>
          <h2 className='text-4xl text-white mt-4 font-bold'>Open to Web Development Roles</h2>
          <p className='text-sm mt-4 text-gray-400'>Actively looking for Junior Full Stack Developer, Junior Web Developer, Junior Frontend Developer, Junior Backend Developer, React.js Developer and other Entry Level Developer roles in Bangalore, India and Remote. Have a role or want to discuss a project? Reach out.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 m-6'>
            <div className='bg-slate-800 p-6 mt-4 rounded-lg border border-gray-400 hover:border-cyan-400 text-left'>
              <Link href="mailto:akshaykrish533516@gmail.com" className='text-sm text-gray-500'>✉ Email</Link>
              <p className='text-white text-sm mt-2'>akshaykrish533516@gmail.com</p>
            </div>
            <div className='bg-slate-800 p-6 mt-4 rounded-lg border border-gray-400 hover:border-cyan-400 text-left'>
              <Link href="https://www.linkedin.com/in/akshay-krish/" className="text-gray-500 text-sm flex flex-wrap gap-2 items-center rounded-4xl"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>LinkedIn</Link>
              <p className='text-white text-sm mt-2'>akshay-krish</p>
            </div>
            <div className='bg-slate-800 p-6 mt-4 rounded-lg border border-gray-400 hover:border-cyan-400 text-left'>
              <Link href="https://github.com/akshaykrishnansub" className="text-gray-500 text-sm flex gap-2 items-center rounded-4xl"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>GitHub</Link>
              <p className='text-white text-sm mt-2'>akshaykrishnansub</p>
            </div>
            <div className='bg-slate-800 p-6 mt-4 rounded-lg border border-gray-400 hover:border-cyan-400 text-left'>
              <p className='text-gray-500 text-sm flex gap-2 items-center'><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>Location</p>
              <p className='text-white text-sm mt-2'>Bangalore</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact