"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'

const Experience = () => {
    useEffect(()=>{
        document.title="My Experience"
    },[])
  return (
    <Sidebar />
  )
}

export default Experience