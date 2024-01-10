import CardRipple from '@/components/CardRipple'
import HorizontalCard from '@/components/HorizontalCard'
import { projects } from '@/mocks/projects'

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2>ProjectsPage</h2>
      <div className="flex items-center justify-center flex-wrap md:gap-3 pt-20 pb-10">
        {projects.map((project, i) => (
          <CardRipple {...project} key={i} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
