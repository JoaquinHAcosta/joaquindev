import TechCarrousel from '@/components/TechCarrousel'
import Image from 'next/image'
import Link from 'next/link'
import { FaBook } from 'react-icons/fa'
import {
  PiBookBold,
  PiCpuBold,
  PiFireSimpleBold,
  PiGitlabLogoFill,
  PiRocketLaunchBold,
  PiStudentBold,
  PiUsersFour,
} from 'react-icons/pi'

export default function Home() {
  return (
    <main className="bg-[#171718] flex flex-col items-center justify-between text-center w-screen">
      <header className="bg-[url('/header-bg.png')] bg-no-repeat bg-center text-4xl font-bold h-screen md:min-h-[960px] sm:min-w-[600px] md:max-w-[1060px] flex flex-col justify-center md:leading-relaxed">
        <h1>
          <strong className="md:text-6xl">
            Hi, my name is{' '}
            <em className=" text-5xl md:text-6xl text-[#5c62ec] mx-2">Zoma</em>
            {/* <PiCpuBold /> */}
          </strong>
          <br />a frontend developer
        </h1>
        <div className="my-3 text-lg">
          <p className="italic flex items-center justify-center">
            Improving my skills with no limit
            <PiGitlabLogoFill />
          </p>
        </div>
        <div className="md:max-w-[600px] mx-auto flex flex-wrap justify-center gap-2">
          <Link
            className="py-3 px-7 bg-[#5c62ec] text-base rounded-md mx-1"
            href="#!"
          >
            Download CV
          </Link>
          <Link
            href={'/contact'}
            className="max-w-[200px] py-3 px-7 text-[#5c62ec] bg-white text-base rounded-md mx-1"
          >
            Contact Me :)
          </Link>
        </div>
      </header>
      <section className="bg-white w-screen flex flex-col text-black items-center py-14 px-8">
        <div>
          <h2 className="text-4xl font-bold mb-7 ">About Me</h2>
        </div>
        <div className="md:flex gap-4 items-center">
          <div className="my-4 border-6 border-red rounded-full">
            <img
              src="/profile-pic.PNG"
              width={400}
              height={400}
              className="mx-auto min-w-72 "
              alt="yop"
            />
          </div>
          <div className="about-me max-w-[34rem]">
            <p>
              <PiStudentBold className="icon-about" />
              Driven by an insatiable thirst for knowledge and challenges. My
              versatility, commitment and constant search for quality define my
              approach to work.
            </p>
            <p>
              <PiBookBold className="icon-about" />I always seek to learn and
              improve, staying updated on technologies and trends.
            </p>
            <p>
              <PiUsersFour className="icon-about" /> My versatility allows me to
              collaborate effectively with different personalities and roles.
            </p>
            <p>
              <PiRocketLaunchBold className="icon-about" /> My commitment and
              loyalty to the goals I set drive my potential.
            </p>
          </div>
        </div>
      </section>
      <section className="w-screen py-14">
        <h2 className="pb-4 text-4xl font-bold">My Stack</h2>
        <TechCarrousel />
      </section>
    </main>
  )
}
