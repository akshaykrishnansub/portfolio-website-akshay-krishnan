"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'

const Education = () => {
    useEffect(()=>{
        document.title="My Education"
    },[])
  return (
    <Sidebar />
  )
}

export default Education