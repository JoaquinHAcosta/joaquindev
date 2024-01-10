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
  SiJest,
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
    icon: <SiTypescript className="tech-icon text-[#007acc] " />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="tech-icon text-[#f0db4f] " />,
  },
  {
    name: 'React',
    icon: <SiReact className="tech-icon text-[#61dafb]" />,
  },
  {
    name: 'NextJs',
    icon: <SiNextdotjs className="tech-icon text-[#5e7693]" />,
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss className="tech-icon text-[#4dc0b5]" />,
  },
  {
    name: 'Bootsrap',
    icon: <SiBootstrap className="tech-icon text-[#337ab7]" />,
  },
  {
    name: 'HTML5',
    icon: <SiHtml5 className="tech-icon text-[#e34c26]" />,
  },
  {
    name: 'CSS3',
    icon: <SiCss3 className="tech-icon text-[#264de4]" />,
  },
  {
    name: 'SASS',
    icon: <SiSass className="tech-icon text-[#cc6699]" />,
  },
  {
    name: 'Figma',
    icon: <SiFigma className="tech-icon text-[#0cb47c]" />,
  },
  {
    name: 'Redux',
    icon: <SiRedux className="tech-icon text-[#764abc]" />,
  },
  {
    name: 'NPM',
    icon: <SiNpm className="tech-icon text-[#cb3837]" />,
  },
  {
    name: 'Git',
    icon: <SiGit className="tech-icon text-[#e24329]" />,
  },
  {
    name: 'Vite',
    icon: <SiVite className="tech-icon text-[#bd34fe]" />,
  },
  {
    name: 'Webpack',
    icon: <SiWebpack className="tech-icon text-[#8ed6fb]" />,
  },
  {
    name: 'Jest',
    icon: <SiJest className="tech-icon text-[#C63D14]" />,
  },
]

const techsBack = [
  {
    name: 'MongoDB',
    icon: <SiMongodb className="tech-icon text-[#0cd45b]" />,
  },
  {
    name: 'Express',
    icon: <SiExpress className="tech-icon text-[#002663]" />,
  },
  {
    name: 'NodeJS',
    icon: <SiNodedotjs className="tech-icon text-[#3c873a]" />,
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="tech-icon text-[#c74835]" />,
  },
  {
    name: 'Firebase',
    icon: <SiFirebase className="tech-icon text-[#F57C00]" />,
  },
  {
    name: 'Postman',
    icon: <SiPostman className="tech-icon text-[#f93748]" />,
  },
  {
    name: 'Insomnia',
    icon: <SiInsomnia className="tech-icon text-[#6a54f7]" />,
  },
]

const TechCarrousel = () => {
  return (
    <div>
      <div className="border rounded-lg m-4 py-2 max-w-[960px] mx-5 lg:mx-auto ">
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
      <div className="border rounded-lg m-4 p-2 max-w-[960px] mx-5 lg:mx-auto ">
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
