"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'

const Experience = () => {
    useEffect(()=>{
        document.title="My Experience"
    },[])
  return (
    <div className='bg-slate-950 flex min-h-screen'>
      <Sidebar />
      <main className='flex-1 overflow-x-auto lg:m-16 sm:pt-16 lg:p-16'>
        <div className='text-center mb-8 mt-16'>
          <h1 className='text-cyan-400 text-4xl font-bold'>MY EXPERIENCE</h1>
        </div>
        <div className='p-10 bg-slate-800 m-4 border border-gray-500 hover:border-cyan-500 rounded-lg shadow'>
          <h2 className='text-2xl text-white font-bold'>Full Stack Developer Intern</h2>
          <p className='text-xl text-gray-300 mt-2'>euron.one (EngageSphere Technologies Private Limited)</p>
          <p className='text-sm text-gray-400'>November 2025 - Present</p>
          <div className='mt-8'>
            <p className='text-xl text-white'>Responsibilities:</p>
            <p className='text-gray-400 text-sm'><span className="text-gray-400 text-xl">•</span> Developed full-stack web applications using React, Next.js, Express.js, PostgreSQL, MySQL and MongoDB.</p>
            <p className='text-gray-400 text-sm'><span className="text-gray-400 text-xl">•</span> Built secure authentication systems using JWT.</p>
            <p className='text-gray-400 text-sm'><span className="text-gray-400 text-xl">•</span> Designed RESTful APIs following clean architecture principles.</p>
            <p className='text-gray-400 text-sm'><span className="text-gray-400 text-xl">•</span> Implemented role-based access control (RBAC).</p>
            <p className='text-gray-400 text-sm'><span className="text-gray-400 text-xl">•</span> Integrated cloud-based email services.</p>
            <p className='text-gray-400 text-sm'><span className="text-gray-400 text-xl">•</span> Collaborated on real-world development projects.</p>
          </div>
        </div>
        <div className='p-10 bg-slate-800 m-4 border border-gray-500 hover:border-cyan-500 rounded-lg shadow'>
          <h2 className='text-2xl text-white font-bold'>Data Operations</h2>
          <p className='text-xl text-gray-300 mt-2'>Tracxn Technologies Limited</p>
          <p className='text-sm text-gray-400'>June 2018 - May 2025</p>
          <div className='mt-8'>
            <p className='text-xl text-white'>Responsibilities:</p>
            <p className='text-gray-400 text-sm'><span className="text-gray-400 text-xl">•</span> Led operational teams delivering high-quality data.</p>
            <p className='text-gray-400 text-sm'><span className="text-gray-400 text-xl">•</span> Managed workflows and process improvements.</p>
            <p className='text-gray-400 text-sm'><span className="text-gray-400 text-xl">•</span> Coordinated cross-functional teams.</p>
            <p className='text-gray-400 text-sm'><span className="text-gray-400 text-xl">•</span> Maintained quality standards and operational efficiency.</p>
            <p className='text-gray-400 text-sm'><span className="text-gray-400 text-xl">•</span> Developed strong analytical and problem-solving skills.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Experience