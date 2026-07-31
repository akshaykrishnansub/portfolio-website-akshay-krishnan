"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'

const About = () => {
    useEffect(()=>{
        document.title="About Page";
    },[])
  return (
    <Sidebar />
  )
}

export default About