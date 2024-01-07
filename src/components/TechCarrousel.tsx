import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
} from 'react-icons/si'

const techsFront = [
  {
    name: 'Typescript',
    icon: <SiTypescript className="tech-icon text-cyan-500" />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="tech-icon text-yellow-300" />,
  },
  {
    name: 'React',
    icon: <SiReact className="tech-icon text-purple-400" />,
  },
  {
    name: 'NextJs',
    icon: <SiNextdotjs className="tech-icon" />,
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss className="tech-icon text-cyan-500" />,
  },
  {
    name: 'Bootsrap',
    icon: <SiBootstrap className="tech-icon text-blue-600" />,
  },
  {
    name: 'HTML5',
    icon: <SiHtml5 className="tech-icon" />,
  },
  {
    name: 'CSS3',
    icon: <SiCss3 className="tech-icon" />,
  },
  {
    name: 'SASS',
    icon: <SiSass className="tech-icon" />,
  },
  {
    name: 'Figma',
    icon: <SiFigma className="tech-icon" />,
  },
  {
    name: 'Redux',
    icon: <SiRedux className="tech-icon" />,
  },
  {
    name: 'NPM',
    icon: <SiNpm className="tech-icon" />,
  },
  {
    name: 'Git',
    icon: <SiGit className="tech-icon" />,
  },
  {
    name: 'Vite',
    icon: <SiVite className="tech-icon" />,
  },
  {
    name: 'Webpack',
    icon: <SiWebpack className="tech-icon" />,
  },
]

const techsBack = [
  {
    name: 'MongoDB',
    icon: <SiMongodb className="tech-icon" />,
  },
  {
    name: 'Express',
    icon: <SiExpress className="tech-icon" />,
  },
  {
    name: 'NodeJS',
    icon: <SiNodedotjs className="tech-icon" />,
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="tech-icon" />,
  },
  {
    name: 'Firebase',
    icon: <SiFirebase className="tech-icon" />,
  },
  {
    name: 'Postman',
    icon: <SiPostman className="tech-icon" />,
  },
  {
    name: 'Insomnia',
    icon: <SiInsomnia className="tech-icon" />,
  },
]

const TechCarrousel = () => {
  return (
    <div>
      <div className="border rounded-lg m-4 p-2 max-w-[800px] md:mx-auto ">
        <h4 className="text-2xl my-2">Frontend</h4>
        <ul className="flex flex-wrap items-center justify-center gap-5">
          {techsFront.map((tech, idx) => (
            <li key={idx}>
              {tech.icon}
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="border rounded-lg m-4 p-2 max-w-[800px] md:mx-auto ">
        <h4 className="text-2xl my-2">Backend</h4>
        <ul className="flex flex-wrap items-center justify-center gap-5">
          {techsBack.map((tech, idx) => (
            <li key={idx}>
              {tech.icon}
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TechCarrousel
