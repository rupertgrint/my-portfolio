import ListTitle from '../ui/ListTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import { projectGradients } from '@/data/projectGradients';

export default function ProjectSection() {
  return (
    <div className='pt-10 pb-20'>
      <ListTitle title='Projects' num='02' />
      {projects.map((project, idx) => (
        <ProjectCard
          key={project.id}
          {...project}
          style={projectGradients[idx % projectGradients.length]}
        />
      ))}
    </div>
  );
}
