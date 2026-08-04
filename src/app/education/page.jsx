"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'

const Education = () => {
    useEffect(()=>{
        document.title="My Education"
    },[])
  return (
    <div className='bg-slate-950 flex min-h-screen'>
      <Sidebar />
      <main className='flex-1 overflow-x-auto lg:m-16 sm:pt-16 lg:p-16'>
        <div className='text-center mb-8 mt-16'>
          <h1 className='text-cyan-400 text-4xl font-bold'>MY EDUCATION</h1>
        </div>
        <div className='bg-slate-800 p-6 m-6 rounded-lg border border-gray-400 hover:border-cyan-400'>
          <div className='mt-4'>
            <span className='text-xl text-cyan-400 font-bold'>Degree:{" "}<p className='text-white font-medium'>Bachelor of Engineering</p></span>
          </div>
          <div className='mt-4'>
            <span className='text-xl text-cyan-400 font-bold'>College:{" "}<p className='text-white font-medium'>New Horizon College of Engineering</p></span>
          </div>
          <div className='mt-4'>
            <span className='text-xl text-cyan-400 font-bold'>University:{" "}<p className='text-white font-medium'>Visveswaraya Technological University</p></span>
          </div>
          <div className='mt-4'>
            <span className='text-xl text-cyan-400 font-bold'>Percentage:{" "}<p className='text-white font-medium'>73.21</p></span>
          </div>
          <div className='mt-4'>
            <span className='text-xl text-cyan-400 font-bold'>Year of Graduation:{" "}<p className='text-white font-medium'>2016</p></span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Education