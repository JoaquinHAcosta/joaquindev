import About from '@/components/Sections/About'
import Projects from '@/components/Sections/Projects'
import Stack from '@/components/Sections/Stack'
import Link from 'next/link'
import { PiGitlabLogoFill } from 'react-icons/pi'

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
          <br />a fullstack developer
        </h1>
        <div className="my-3 text-lg">
          <p className="italic flex items-center justify-center">
            Improving my skills with no limit{' '}
            <PiGitlabLogoFill className="ml-2" />
          </p>
        </div>
        <div className="md:max-w-[600px] mx-auto flex flex-wrap justify-center gap-2">
          <Link
            className="py-3 px-7 bg-[#5c62ec] text-base rounded-md mx-1"
            href="https://drive.google.com/file/d/1dzyU5RNxjMlRtWkfsASXgxPU4ssd9FPt/view?usp=drive_link"
            target="_blank"
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
      <Projects />
      <Stack />
      <About />
    </main>
  )
}
