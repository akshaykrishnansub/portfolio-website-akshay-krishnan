"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'

const Resume = () => {
    useEffect(()=>{
        document.title="My Resume";
    },[])
  return (
    <Sidebar />
  )
}

export default Resume