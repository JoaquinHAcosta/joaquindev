'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const path = usePathname()

  return (
    <nav className="fixed bg-[#171718] flex justify-center text-xl py-4 border-b w-[99vw]">
      <div className="flex justify-between items-center w-screen md:min-w-[770px] lg:max-w-[960px] ">
        <Link className="hidden md:block" href={'/'}>
          <h1 className="extra-bold md:text-3xl px-4">Joaquin Acosta</h1>
        </Link>
        <div className="flex gap-4 px-2 mx-auto md:mx-0">
          <Link className={path === '/' ? 'activePath' : ''} href={'/'}>
            Home
          </Link>
          <Link
            className={path === '/projects' ? 'activePath' : ''}
            href={'/projects'}
          >
            +Projects
          </Link>
          <Link
            className={`md:mr-4 ${path === '/contact' ? 'activePath' : ''}`}
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
