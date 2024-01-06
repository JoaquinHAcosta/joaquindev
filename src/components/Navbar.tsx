import React from 'react'

const Navbar = () => {
  return (
    <nav className="primary flex justify-center">
      <div className="w-max max-w-[660px] flex justify-between items-center">
        <div>
          <h1 className="bold text-xl py-2 px-4">Joaquin Acosta</h1>
        </div>
        <div className="flex gap-2 px-2">
          <button>Home</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
