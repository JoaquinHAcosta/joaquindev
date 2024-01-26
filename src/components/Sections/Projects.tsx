import React from 'react'
import CardRipple from '../CardRipple'
import { projects } from '@/mocks/projects'
import { FaDiagramProject } from 'react-icons/fa6'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className="bg-white w-screen flex flex-col text-black items-center py-14 px-8">
      <div>
        <h2 className="flex items-center text-4xl font-bold">
          <FaDiagramProject className="text-[#5c62ec] mr-2" />
          Latest Projects
        </h2>
      </div>
      <div>
        <div className="flex gap-2 items-center justify-center flex-wrap md:gap-3 pt-20 pb-10">
          {projects.slice(0, 3).map((project, i) => (
            <CardRipple {...project} key={i} />
          ))}
        </div>
      </div>
      <Link href={'/projects'}>
        <span className="text-xl font-bold text-[#5c62ec] hover:border-b-2 border-[#5c62ec]">
          +Projects -&gt;
        </span>
      </Link>
    </section>
  )
}

export default Projects
