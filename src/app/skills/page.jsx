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
    </div>
  )
}

export default Skills