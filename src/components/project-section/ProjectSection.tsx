'use client';

import { useEffect, useState } from 'react';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getGradientStyle = (idx: number) => {
    if (!mounted) {
      return projectGradientsLight[idx % projectGradientsLight.length];
    }

    return theme === 'dark'
      ? projectGradientsDark[idx % projectGradientsDark.length]
      : projectGradientsLight[idx % projectGradientsLight.length];
  };

  return (
    <div className='pt-10 pb-20'>
      <ListTitle title='Projects' num='02' />
      {projects.map((project, idx) => (
        <ProjectCard
          key={project.id}
          {...project}
          style={getGradientStyle(idx)}
        />
      ))}
    </div>
  );
}
