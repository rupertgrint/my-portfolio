'use client';

import ListTitle from '../ui/ListTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import {
  projectGradientsDark,
  projectGradientsLight,
} from '@/data/projectGradients';
import { useTheme } from 'next-themes';

export default function ProjectSection() {
  const { theme } = useTheme();

  return (
    <div className='pt-10 pb-20'>
      <ListTitle title='Projects' num='02' />
      {projects.map((project, idx) => (
        <ProjectCard
          key={project.id}
          {...project}
          style={
            theme === 'dark'
              ? projectGradientsDark[idx % projectGradientsDark.length]
              : projectGradientsLight[idx % projectGradientsLight.length]
          }
        />
      ))}
    </div>
  );
}
