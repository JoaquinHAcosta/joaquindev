import TechCarrousel from '@/components/TechCarrousel'
import { ImStack } from 'react-icons/im'

const Stack = () => {
  return (
    <section className="w-screen flex flex-col items-center py-14 px-8">
      <h2 className=" flex pb-4 text-4xl font-bold">
        <ImStack className="text-[#5c62ec] mr-2" />
        My Stack
      </h2>
      <TechCarrousel />
    </section>
  )
}

export default Stack
