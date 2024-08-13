import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Metadata } from 'next'
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'JOOM',
  description: 'Video calling App',
  icons: {
    icon: '/icons/logo.svg',
  },
}

const HomeLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <main className='relative'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <section className='pb:6 flex min-h-screen flex-1 flex-col px-6 pt-28 max-md:pb-14 sm:px-14'>
          <div className='w-full'>{children}</div>
        </section>
      </div>
      Footer
    </main>
  )
}

export default HomeLayout
