import Image from 'next/image'
import Link from 'next/link'
// import { Ripple, initTE } from 'tw-elements'

// initTE({ Ripple })

type ProjectProps = {
  title: string
  techs: string[]
  image: string
  description: string
  repository: string
  deploy: string
  date: string
}

const isProd = process.env.NODE_ENV === 'production'

const CardRipple = ({
  title,
  techs,
  image,
  description,
  repository,
  deploy,
  date,
}: ProjectProps) => {
  return (
    <div className="block md:flex md:h-[320px] rounded-lg bg-white dark:bg-neutral-700 md:border">
      <div className="md:w-[380px] overflow-hidden bg-cover bg-no-repeat">
        <Image
          className="rounded-l-lg h-full object-cover"
          src={`${isProd ? '/joaquindev' : ''}${image}`}
          alt="project image"
          width={380}
          height={380}
        />
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div> */}
      </div>
      <div className="p-6 md:w-[300px] lg:w-[700px] flex flex-col items-center justify-between">
        <time className="text-sm">{date}</time>
        <h5 className="mb-2 text-xl md:text-4xl font-medium md:font-bold  leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="hidden lg:block mb-4 mx-3 text-base text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
        <div className="flex gap-2">
          <Link
            href={deploy}
            type="button"
            target="blank"
            className={`${deploy === '' ? 'hidden' : ''} buttonPurple text-xs`}
          >
            Deploy
          </Link>

          <Link
            href={repository}
            target="blank"
            className="buttonPurple text-xs"
          >
            Repository
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardRipple
