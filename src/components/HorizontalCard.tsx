import Image from 'next/image'
import React from 'react'

type ProjectProps = {
  title: string
  techs: string[]
  image: string
  description: string
}

const HorizontalCard = ({ title, techs, image, description }: ProjectProps) => {
  return (
    <div className="flex w-[90vw] h-[18rem] md:w-[40rem] flex-row rounded border-4 border-white bg-[#797DDC] bg-clip-border text-gray-700 shadow-md">
      <div className="m-0 w-2/5 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700">
        <Image
          src={image}
          width={380}
          height={380}
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal  antialiased">
          {techs[0]}
        </h6>
        <h4 className="mb-2 block font-sans text-2xl font-bold text-white leading-snug tracking-normal antialiased">
          {title}
        </h4>
        <p className="mb-8 block font-sans text-base text-gray-700 line-clamp-3">
          {description}
        </p>
        <a className="inline-block" href="#">
          <button
            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Deploy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  )
}

export default HorizontalCard
