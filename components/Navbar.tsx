import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './mobile-nav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex-between bg-dark-1 fixed z-50 flex w-full px-6 py-4 lg:px-10'>
      <Link href='/' className='flex items-center gap-1'>
        <Image
          src='/icons/logo.svg'
          width={32}
          height={32}
          alt='Joom Logo'
          className='max-sm:size-10'
        />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>
          Joom
        </p>
      </Link>
      <div className='flex-between flex gap-5'>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav></MobileNav>
      </div>
    </nav>
  )
}

export default Navbar
