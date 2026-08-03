"use client"
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import Link from 'next/link'

const Projects = () => {
    useEffect(()=>{
        document.title="My Projects"
    },[])
  return (
    <div className='bg-slate-950 min-h-screen flex'>
      <Sidebar />
      <main className='flex-1 overflow-x-auto lg:m-16 sm:pt-16 lg:p-16'>
        <div className='text-center mb-8 mt-16'>
          <h1 className='text-xl text-cyan-400 font-bold'>PROOF OF WORK</h1>
          <h1 className='text-4xl text-white font-bold mt-2 m-8'>Projects</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 m-6'>
          <div className='bg-slate-900 border border-gray-600 hover:border-cyan-500 rounded-lg p-8 shadow'>
            <div className='flex flex-wrap mt-2 gap-3'>
              <h1 className='text-white font-bold'>AgroChain - Smart Agriculture Marketplace (Ongoing)</h1>
              <p className='text-gray-300'>AgroChain is a secure, scalable e-commerce platform connecting farmers, suppliers, and buyers. It enables product listings, order management, secure payments, certification uploads, and advanced
              search/filtering. The platform uses authentication, authorization, MongoDB, Redis, and is built with
              Node.js, Express, React, Tailwind, and TypeScript.
              </p>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>TypeScript</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>React.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>MongoDB</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Redis</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Tailwind CSS</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Multer</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>AWS S3</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>File Storage</p></span>
            </div>
          </div>
          <div className='bg-slate-900 border border-gray-600 hover:border-cyan-500 rounded-lg p-8 shadow'>
            <div className='flex flex-wrap mt-2 gap-3'>
              <h1 className='text-white font-bold'>MediTrack - Patient Appointments and Records Portal</h1>
              <p className='text-gray-300'>MediTrack is a fullstack healthcare web application enabling patients to book appointments, manage
              medical records, and communicate securely with doctors. The platform features authentication, rolebased access, file uploads for medical reports, and leverages a PostgreSQL relational database for
              robust data management.
              </p>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>TypeScript</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Next.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>React.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Node.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Express.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>PostgreSQL</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Supabase</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>AWS S3</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Multer</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>NodeMailer</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Mailgen</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Brevo</p></span>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-4 mt-4'>
              <Link href="https://github.com/akshaykrishnansub/meditrack-patient-appointment-records-portal" className="text-white border border-white px-4 py-2 text-center flex justify-center gap-2 items-center rounded-4xl"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>GitHub</Link>
              <Link href='https://meditrack-patient-appointment-recor.vercel.app' className='text-cyan-400 flex items-center'><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>Live Demo</Link>
              <Link href='https://www.youtube.com/watch?v=OOD1Hd4hssI' className='text-cyan-400 flex items-center'><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>Demo Video</Link>
            </div>
          </div>
          <div className='bg-slate-900 border border-gray-600 hover:border-cyan-500 rounded-lg p-8 shadow'>
            <div className='flex flex-wrap mt-2 gap-3'>
              <h1 className='text-white font-bold'>SkillShare - Community Learning Platform</h1>
              <p className='text-gray-300'>SkillShare is an open-source platform enabling users to create, share, and enroll in community-driven
              courses. The platform supports course creation, enrollment, and basic user profiles.
              </p>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>JavaScript</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>React.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Node.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Express.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>MySQL</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Docker</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Railway</p></span>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-4 mt-4'>
              <Link href="https://github.com/akshaykrishnansub/skillshare-community-platform" className="text-white border border-white px-4 py-2 text-center flex justify-center gap-2 items-center rounded-4xl"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>GitHub</Link>
              <Link href='https://skillshare-community-platform.vercel.app/' className='text-cyan-400 flex items-center'><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>Live Demo</Link>
              <Link href='https://www.instagram.com/p/DXRielNDdyN/' className='text-cyan-400 flex items-center'><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>Demo Video</Link>
            </div>
          </div>
          <div className='bg-slate-900 border border-gray-600 hover:border-cyan-500 rounded-lg p-8 shadow'>
            <div className='flex flex-wrap mt-2 gap-3'>
              <h1 className='text-white font-bold'>IdeaSpark - Brainstorming Board</h1>
              <p className='text-gray-300'>IdeaSpark is a web-based platform enabling users to visually brainstorm and organize ideas. Users
              create, categorize, and rearrange idea cards on a virtual board. The backend manages user data and
              board persistence. The project emphasizes web UI, backend data management, and basic
              collaboration.
              </p>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>JavaScript</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>React.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Node.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Express.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>PostgreSQL</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Supabase</p></span>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-4 mt-4'>
              <Link href="https://github.com/akshaykrishnansub/ideaspark-brainstorming-board" className="text-white border border-white px-4 py-2 text-center flex justify-center gap-2 items-center rounded-4xl"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>GitHub</Link>
              <Link href='https://ideaspark-brainstorming-board-1x89.vercel.app/' className='text-cyan-400 flex items-center'><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>Live Demo</Link>
              <Link href='https://www.youtube.com/watch?v=sFjyuhFE8sk&t=6s' className='text-cyan-400 flex items-center'><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>Demo Video</Link>
            </div>
          </div>
          <div className='bg-slate-900 border border-gray-600 hover:border-cyan-500 rounded-lg p-8 shadow'>
            <div className='flex flex-wrap mt-2 gap-3'>
              <h1 className='text-white font-bold'>Blogifier - Full Stack Blog Platform</h1>
              <p className='text-gray-300'>Blogifier is a full-stack blogging platform where users can securely register, log in, and manage their blog posts. It includes JWT-based authentication, protected routes, CRUD operations for posts, a personal dashboard, search, and pagination, with a responsive interface designed for a smooth user experience.
              </p>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>JavaScript</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>React.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Node.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Express.js</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>PostgreSQL</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Supabase</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>EJS</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Bootstrap</p></span>
              <span className='border border-gray-400 p-2 bg-slate-800'><p className='text-gray-400 font-bold'>Render</p></span>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-4 mt-4'>
              <Link href="https://github.com/akshaykrishnansub/blogApplication" className="text-white border border-white px-4 py-2 text-center flex justify-center gap-2 items-center rounded-4xl"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>GitHub</Link>
              <Link href='https://blogapplication-xmph.onrender.com/' className='text-cyan-400 flex items-center'><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>Live Demo</Link>
              <Link href='https://www.youtube.com/watch?v=1sY8ZPSftek' className='text-cyan-400 flex items-center'><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>Demo Video</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Projects