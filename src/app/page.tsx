import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-center">
      <header className="mb-5 text-4xl font-bold leading-relaxed pb-10">
        <h1>
          <strong className="text-6xl ">
            Hi, my name is <em className="text-6xl text-[#5c62ec]">Joaquin</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="text-inherit text-lg">
          <p>improving my skills with no limit</p>
        </div>
        <a className="py-3 px-7 bg-[#5c62ec] text-base rounded-md" href="#!">
          Download CV
        </a>
      </header>
      <section className="bg-white w-screen flex flex-col text-black">
        <div>
          <h2 className="py-4 text-3xl font-bold mx-3">About ME</h2> y foto
        </div>
        <p className="m-8">
          👨‍🎓 Young student passionate about Full Stack Web Programming, driven
          by an insatiable thirst for knowledge and challenges. My versatility,
          commitment and constant search for quality define my approach to work.
          Strengths that I consider notable in me: <br />
          📚 Hunger for knowledge: I always seek to learn and improve, staying
          updated on technologies and trends. <br />
          🤝 Team adaptability: My versatility allows me to collaborate
          effectively with different personalities and roles. <br /> 💪
          Determination and ambition: My commitment and loyalty to the goals I
          set drive my potential.
        </p>
      </section>
      <section className="w-screen">
        <h2 className="py-4 text-3xl font-bold mx-3">Technologies</h2>
        <div className="flex justify-around">
          <div className="border m-4">
            <h4>Frontend</h4>
          </div>
          <div className="border m-4">
            <h4>Backend</h4>
          </div>
        </div>
      </section>
      <footer className="bg-white w-screen text-black">
        <h4>Redes</h4>
      </footer>
    </main>
  )
}
