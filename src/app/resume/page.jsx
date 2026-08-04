"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'

const Resume = () => {
    useEffect(()=>{
        document.title="My Resume";
    },[])
  return (
    <div className='bg-slate-950 flex min-h-screen'>
      <Sidebar />
    </div>
  )
}

export default Resume