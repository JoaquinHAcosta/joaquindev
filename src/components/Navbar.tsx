'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const path = usePathname()

  return (
    <nav className="bg-[#171718] flex justify-center md:text-2xl py-4 border-b">
      <div className="flex justify-between items-center md:min-w-[770px] md:max-w-[1170px] lg:min-w-[1070px]">
        <Link href={'/'}>
          <h1 className="bold px-4">Joaquin Acosta</h1>
        </Link>
        <div className="flex gap-4 px-2">
          <Link className={path === '/' ? 'border-b' : ''} href={'/'}>
            Home
          </Link>
          <Link
            className={path === '/projects' ? 'border-b' : ''}
            href={'/projects'}
          >
            Projects
          </Link>
          <Link
            className={path === '/contact' ? 'border-b' : ''}
            href={'/contact'}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
