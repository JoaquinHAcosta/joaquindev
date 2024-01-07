import TechCarrousel from '@/components/TechCarrousel'
import Image from 'next/image'
import { FaBook } from 'react-icons/fa'
import {
  PiBookBold,
  PiRocketLaunchBold,
  PiStudentBold,
  PiUsersFour,
} from 'react-icons/pi'

export default function Home() {
  return (
    <main className="bg-[#171718] flex flex-col items-center justify-between text-center">
      <header className="bg-[url('/header-bg.png')] bg-no-repeat bg-center text-4xl font-bold h-screen md:min-h-[960px] sm:min-w-[600px] md:max-w-[1060px] flex flex-col justify-center leading-relaxed mx-1">
        <h1>
          <strong className="text-6xl ">
            Hi, my name is <em className="text-6xl text-[#5c62ec]">Zoma</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="my-3 text-lg">
          <p className="italic">Improving my skills with no limit</p>
        </div>
        <a
          className="max-w-[200px] py-3 px-7 bg-[#5c62ec] text-base rounded-md mx-auto"
          href="#!"
        >
          Download CV
        </a>
      </header>
      <section className="bg-white w-screen flex flex-col text-black items-center py-14 px-8">
        <div>
          <h2 className="text-4xl font-bold mb-7">About Me</h2>
        </div>
        <div className="md:flex gap-4 items-center">
          <div className="my-4 border-6 border-red rounded-full">
            <Image
              src="/profile-pic.png"
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
