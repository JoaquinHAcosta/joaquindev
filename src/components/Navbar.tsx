'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const path = usePathname()

  return (
    <nav className="fixed bg-[#171718] flex justify-center md:text-2xl py-4 border-b">
      <div className="flex justify-between items-center w-screen md:min-w-[770px]  lg:max-w-[960px]">
        <Link href={'/'}>
          <h1 className="extra-bold md:text-3xl px-4">Joaquin Acosta</h1>
        </Link>
        <div className="flex gap-4 px-2">
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
            className={`mr-1 md:mr-4 ${
              path === '/contact' ? 'activePath' : ''
            }`}
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
