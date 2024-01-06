import { techsFront, techsBack } from './../mocks/techs.json'

export default function Home() {
  return (
    <main className="bg-[#171718] flex flex-col items-center justify-between text-center">
      <header className="bg-[url('/header-bg.png')] bg-no-repeat bg-center text-4xl font-bold min-h-[800px] sm:min-w-[600px] md:max-w-[1060px] flex flex-col justify-center leading-relaxed ">
        <h1>
          <strong className="text-6xl ">
            Hi, my name is <em className="text-6xl text-[#5c62ec]">Zoma</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="my-3 text-lg">
          <p>improving my skills with no limit</p>
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
          <h2 className="text-3xl font-bold mb-7">About Me</h2> y foto
        </div>
        <p className="max-w-[34rem] ">
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
      <section className="w-screen py-14">
        <h2 className="pb-4 text-3xl font-bold">Technologies</h2>
        <div>
          <div className="border rounded-lg m-4 p-2 max-w-[800px] md:mx-auto ">
            <h4>Frontend</h4>
            <div className="flex items-center overflow-x-scroll justify-center">
              {techsFront.map((tech) => (
                <p key={tech.name}>{tech.name}</p>
              ))}
            </div>
          </div>
          <div className="border rounded-lg m-4 p-2 max-w-[800px] md:mx-auto ">
            <h4>Backend</h4>
            <div className="flex items-center overflow-x-scroll justify-center">
              {techsBack.map((tech) => (
                <p key={tech.name}>{tech.name}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
