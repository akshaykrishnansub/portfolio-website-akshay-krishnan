"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'

const Projects = () => {
    useEffect(()=>{
        document.title="My Projects"
    },[])
  return (
    <Sidebar />
  )
}

export default Projects