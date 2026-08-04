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
    </div>
  )
}

export default Education