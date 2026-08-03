"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'

const Projects = () => {
    useEffect(()=>{
        document.title="My Projects"
    },[])
  return (
    <div className='bg-slate-950 min-h-screen flex'>
      <Sidebar />
    </div>
  )
}

export default Projects