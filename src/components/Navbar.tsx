import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between primary items-center">
      <div>
        <h1 className="bold text-xl py-2 px-4">Joaquin Acosta</h1>
      </div>
      <div className="flex gap-2 px-2">
        <button>Home</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
    </nav>
  )
}

export default Navbar
