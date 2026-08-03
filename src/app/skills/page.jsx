"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'

const Skills = () => {
    useEffect(()=>{
        document.title="My Skills"
    },[])
  return (
    <div className='bg-slate-950 flex min-h-screen'>
      <Sidebar />
      <main className='flex-1 overflow-x-auto lg:m-16 sm:pt-16 lg:p-16'>
        <div className='text-center mb-8 mt-16'>
          <h1 className='text-xl font-bold text-cyan-400'>TECHNICAL STACK</h1>
          <h1 className='text-4xl text-white font-bold mt-2 m-8'>Skills & Technologies</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 m-6'>
          <div className='bg-slate-900 border border-gray-600 hover:border-cyan-500 p-8 rounded-lg shadow'>
            <h1 className='text-cyan-400 font-bold'>Frontend</h1>
            <div className='flex flex-wrap mt-2 gap-3'>
              <span className='border border-cyan-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-cyan-400 font-bold'>HTML5</p></span>
              <span className='border border-cyan-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-cyan-400 font-bold'>CSS 3</p></span>
              <span className='border border-cyan-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-cyan-400 font-bold'>Tailwind CSS</p></span>
              <span className='border border-cyan-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-cyan-400 font-bold'>Bootstrap</p></span>
              <span className='border border-cyan-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-cyan-400 font-bold'>JavaScript</p></span>
              <span className='border border-cyan-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-cyan-400 font-bold'>TypeScript</p></span>
              <span className='border border-cyan-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-cyan-400 font-bold'>React.js</p></span>
              <span className='border border-cyan-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-cyan-400 font-bold'>Next.js</p></span>
            </div>
          </div>
          <div className='bg-slate-900 border border-gray-600 hover:border-cyan-500 p-8 rounded-lg shadow'>
            <h1 className='text-blue-400 font-bold'>Backend</h1>
            <div className='flex flex-wrap mt-2 gap-3'>
              <span className='border border-blue-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-blue-400 font-bold'>Node.js</p></span>
              <span className='border border-blue-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-blue-400 font-bold'>Express.js</p></span>
              <span className='border border-blue-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-blue-400 font-bold'>REST APIs</p></span>
              <span className='border border-blue-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-blue-400 font-bold'>JWT Authentication</p></span>
              <span className='border border-blue-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-blue-400 font-bold'>Role-Based Access Control (RBAC)</p></span>
              <span className='border border-blue-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-blue-400 font-bold'>Socket.io</p></span>
            </div>
          </div>
          <div className='bg-slate-900 border border-gray-600 hover:border-cyan-500 p-8 rounded-lg shadow'>
            <h1 className='text-purple-400 font-bold'>Databases</h1>
            <div className='flex flex-wrap mt-2 gap-3'>
              <span className='border border-purple-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-purple-400 font-bold'>PostgreSQL</p></span>
              <span className='border border-purple-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-purple-400 font-bold'>MySQL</p></span>
              <span className='border border-purple-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-purple-400 font-bold'>MongoDB</p></span>
              <span className='border border-purple-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-purple-400 font-bold'>Redis</p></span>
            </div>
          </div>
          <div className='bg-slate-900 border border-gray-600 hover:border-cyan-500 p-8 rounded-lg shadow'>
            <h1 className='text-orange-400 font-bold'>Devops & Cloud</h1>
            <div className='flex flex-wrap mt-2 gap-3'>
              <span className='border border-orange-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-orange-400 font-bold'>Docker</p></span>
              <span className='border border-orange-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-orange-400 font-bold'>AWS S3</p></span>
              <span className='border border-orange-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-orange-400 font-bold'>Git / GitHub</p></span>
              <span className='border border-orange-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-orange-400 font-bold'>Vercel</p></span>
              <span className='border border-orange-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-orange-400 font-bold'>Render</p></span>
              <span className='border border-orange-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-orange-400 font-bold'>Railway</p></span>
            </div>
          </div>
          <div className='bg-slate-900 border border-gray-600 hover:border-cyan-500 p-8 rounded-lg shadow'>
            <h1 className='text-pink-400 font-bold'>Tools</h1>
            <div className='flex flex-wrap mt-2 gap-3'>
              <span className='border border-pink-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-pink-400 font-bold'>Postman</p></span>
              <span className='border border-pink-400 rounded-full text-xs p-2 bg-slate-800'><p className='text-pink-400 font-bold'>VS Code</p></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Skills