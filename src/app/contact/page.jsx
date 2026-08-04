"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'

const Contact = () => {
    useEffect(()=>{
        document.title="My Contact"
    },[])
  return (
    <div className='bg-slate-950 flex min-h-screen'>
      <Sidebar />
    </div>
  )
}

export default Contact