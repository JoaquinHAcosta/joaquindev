import { techsFront, techsBack } from './../mocks/techs.json'

export default function Home() {
  return (
    <main className="bg-[#171718] flex min-h-screen flex-col items-center justify-between text-center px-2">
      <header className="text-4xl font-bold h-screen max-w-[660px] flex flex-col justify-center leading-relaxed">
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
      <section className="bg-white w-screen flex flex-col text-black items-center py-14">
        <div>
          <h2 className="text-3xl font-bold mb-7">About ME</h2> y foto
        </div>
        <p className="max-w-[34rem]">
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
        <div>
          <div className="border rounded-lg m-4">
            <h4>Frontend</h4>
            <div className="flex items-center overflow-x-scroll">
              {techsFront.map((tech) => (
                <p key={tech.name}>{tech.name}</p>
              ))}
            </div>
          </div>
          <div className="border rounded-lg m-4">
            <h4>Backend</h4>
            <div className="flex items-center overflow-x-scroll">
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
