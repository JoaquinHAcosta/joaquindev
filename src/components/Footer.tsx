import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white w-screen text-black py-8 flex flex-col items-center">
      <ul className="flex gap-4 min-h-6 mb-6">
        <li>
          <Link href="!#">
            <FaGithub className="media-link" />
          </Link>
        </li>
        <li>
          <Link href="!#">
            <FaInstagram className="media-link" />
          </Link>
        </li>
        <li>
          <Link href="!#">
            <FaLinkedin className="media-link" />
          </Link>
        </li>
        <li>
          <Link href="!#">
            <FaTwitter className="media-link" />
          </Link>
        </li>
      </ul>

      <p>©2024 By Zoma</p>
    </footer>
  )
}

export default Footer
