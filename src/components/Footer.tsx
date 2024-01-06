import { links } from './../mocks/links.json'

const Footer = () => {
  return (
    <footer className="bg-white w-screen text-black py-8 flex flex-col items-center">
      {links.map((link) => (
        <p key={link.name}>{link.name}</p>
      ))}
      <p>©2024 Joaquindev.com</p>
    </footer>
  )
}

export default Footer
