"use client"
import Sidebar from "@/components/Sidebar/Sidebar"
import { useEffect } from "react";

export default function Home() {
useEffect(()=>{
  document.title="Home Page";
},[])
  return (
      <Sidebar />
  )
}
