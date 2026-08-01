"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import Link from 'next/link'

const About = () => {
    useEffect(()=>{
        document.title="About Me";
    },[])
  return (
    <div className='bg-slate-950 flex min-h-screen'>
      <Sidebar />
      <main className='flex-1 overflow-x-auto lg:m-16 sm:pt-10 lg:p-16'>
        <h1 className='text-cyan-400 text-4xl font-bold sm:text-center sm:mt-16'>ABOUT ME</h1>
        <p className='text-gray-500 text-xl mt-4 sm:text-center'>I'm a Full Stack Developer with a background in Data Operations and Engineering Management who made a deliberate transition into software development to pursue a career in building modern web applications.

        After seven years of leading teams and improving business processes, I shifted my focus to designing and developing end-to-end applications. In the past year, I've built full-stack projects that cover everything from <span className='text-white'>responsive user interfaces</span> to <span className='text-white'>secure backend APIs, authentication systems, database design, and real-time communication</span>.

        I specialize in <span className='text-white'>React, Next.js, Node.js, Express, PostgreSQL, MongoDB, and TypeScript</span>. I enjoy building scalable applications with clean architecture, maintainable code, and a strong emphasis on performance, security, and user experience.</p>
        <div className='mt-8 flex justify-center items-center gap-4'>
          <Link href='mailto:akshaykrish533516@gmail.com' className='bg-cyan-400 rounded-3xl px-4 py-2'>Get in Touch</Link>
          <Link href="https://www.linkedin.com/in/akshay-krish/" className="text-white border border-white px-4 py-2 text-center flex flex-wrap justify-center gap-2 items-center rounded-4xl"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>LinkedIn</Link>
        </div>
      </main>
    </div>
  )
}

export default About