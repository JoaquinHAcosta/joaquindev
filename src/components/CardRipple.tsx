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
}

const isProd = process.env.NODE_ENV === 'production'

const CardRipple = ({
  title,
  techs,
  image,
  description,
  repository,
  deploy,
}: ProjectProps) => {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <Image
          className="rounded-t-lg h-full w-full object-cover"
          src={`${isProd ? '/portfolioNext' : ''}/${image}`}
          alt="project image"
          width={380}
          height={380}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {/* {description} */}
        </p>
        <div className="flex gap-2">
          <Link
            href={deploy}
            type="button"
            target="blank"
            className={`${
              deploy === '' ? 'hidden' : ''
            } inline-block rounded bg-[#5c62ec] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-white hover:text-[#5c62ec]`}
          >
            Deploy
          </Link>

          <Link
            href={repository}
            target="blank"
            className="inline-block rounded bg-[#5c62ec] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-white hover:text-[#5c62ec]"
          >
            Repository
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardRipple
