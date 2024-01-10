import Link from 'next/link'
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaRegEnvelope,
} from 'react-icons/fa'

const ContactPage = () => {
  return (
    <div className="min-h-[81.3vh] xl:h-[84vh] flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-center bg-white text-black w-[90vw] rounded-lg py-10 max-w-[760px] md:h-96">
        <h2 className="text-3xl font-extrabold mb-3">Contact Info</h2>
        <div className="flex flex-col justify-center items-start">
          <div className="contact">
            <FaMapMarkerAlt className="icon-contact" />

            <label>
              <p>Location:</p>
              <p>Entre Rios, Argentina</p>
            </label>
          </div>
          <div className="contact">
            <FaLinkedin className="icon-contact" />
            <label>
              <p>LinkedIn:</p>
              <Link href={'https://www.linkedin.com/in/stratozoma/'}>
                linkedin.com/in/stratozoma
              </Link>
            </label>
          </div>
          <div className="contact">
            <FaGithub className="icon-contact" />
            <label>
              <p>Github:</p>
              <Link href={'https://github.com/JoaquinHAcosta'}>
                github.com/JoaquinHAcosta
              </Link>
            </label>
          </div>
          <div className="contact">
            <FaRegEnvelope className="icon-contact" />
            <label>
              <p>Email:</p>
              <Link href={''}>joaquinacosta397@outlook.com</Link>
            </label>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
