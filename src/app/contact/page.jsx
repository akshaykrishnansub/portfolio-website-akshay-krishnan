"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'

const Contact = () => {
    useEffect(()=>{
        document.title="My Contact"
    },[])
  return (
    <Sidebar />
  )
}

export default Contact