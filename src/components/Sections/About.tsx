import { BsFilePersonFill } from 'react-icons/bs'
import {
  PiBookBold,
  PiRocketLaunchBold,
  PiStudentBold,
  PiUsersFour,
} from 'react-icons/pi'

import Image from 'next/image'

const isProd = process.env.NODE_ENV === 'production'

const About = () => {
  return (
    <section className="bg-white w-screen flex flex-col text-black items-center py-14 px-8">
      <div>
        <h2 className="flex text-4xl font-bold mb-7 ">
          <BsFilePersonFill className="text-[#5c62ec] mr-2" />
          About Me
        </h2>
      </div>
      <div className="md:flex gap-4 items-center">
        <div className="my-4 border-6 border-red rounded-full">
          <Image
            src={`${isProd ? '/joaquindev' : ''}/profile-pic.png`}
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
  )
}

export default About
