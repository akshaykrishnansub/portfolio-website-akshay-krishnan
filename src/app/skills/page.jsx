"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'

const Skills = () => {
    useEffect(()=>{
        document.title="My Skills"
    },[])
  return (
    <Sidebar />
  )
}

export default Skills