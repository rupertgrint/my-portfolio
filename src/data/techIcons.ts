import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { RiNodejsFill } from 'react-icons/ri';
import { SiPostgresql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { RiHtml5Fill } from 'react-icons/ri';
import { RiReactjsFill } from 'react-icons/ri';

export const techIcons = [
  {
    icon: SiJavascript,
    position: { x: 40, y: 70 },
    delay: 0,
    color: 'lavender',
    iconColor: '#EDEEFF',
    size: 'w-14 h-14',
  },
  {
    icon: SiTypescript,
    position: { x: 120, y: 40 },
    delay: 0.5,
    color: 'soft-blue',
    iconColor: '#EAF3FF',
    size: 'w-14 h-14',
  },
  {
    icon: RiReactjsFill,
    position: { x: 200, y: 80 },
    delay: 1,
    color: 'sage',
    iconColor: '#A9B583',
    size: 'w-14 h-14',
  },
  {
    icon: SiTailwindcss,
    position: { x: 60, y: 150 },
    delay: 1.5,
    color: 'lavender-light',
    iconColor: '#C1C5FF',
    size: 'w-14 h-14',
  },
  {
    icon: RiNextjsFill,
    position: { x: 160, y: 140 },
    delay: 2,
    color: 'blue-light',
    iconColor: '#E4EFFF',
    size: 'w-14 h-14',
  },
  {
    icon: RiNodejsFill,
    position: { x: 240, y: 180 },
    delay: 2.5,
    color: 'sage-light',
    iconColor: '#F6FFD9',
    size: 'w-14 h-14',
  },
  {
    icon: SiPostgresql,
    position: { x: 40, y: 220 },
    delay: 3,
    color: 'lavender-dark',
    iconColor: '#A8ACE6',
    size: 'w-14 h-14',
  },
  {
    icon: SiMongodb,
    position: { x: 140, y: 240 },
    delay: 3.5,
    color: 'blue-dark',
    iconColor: '#D0E0FF',
    size: 'w-14 h-14',
  },
  {
    icon: RiHtml5Fill,
    position: { x: 240, y: 50 },
    delay: 4,
    color: 'sage-dark',
    iconColor: '#E7FAAB',
    size: 'w-14 h-14',
  },
];

export const getRadialGradient = (color: string) => {
  const colorMap: { [key: string]: string } = {
    lavender:
      'radial-gradient(circle, rgba(170, 180, 255, 0.5) 0%, rgba(170, 180, 255, 0.3) 50%, transparent 100%)',
    'soft-blue':
      'radial-gradient(circle, rgba(140, 200, 255, 0.5) 0%, rgba(140, 200, 255, 0.3) 50%, transparent 100%)',
    sage: 'radial-gradient(circle, rgba(180, 210, 140, 0.7) 0%, rgba(180, 210, 140, 0.35) 50%, transparent 100%)',
    'lavender-light':
      'radial-gradient(circle, rgba(190, 200, 255, 0.65) 0%, rgba(190, 200, 255, 0.3) 50%, transparent 100%)',
    'blue-light':
      'radial-gradient(circle, rgba(130, 190, 255, 0.7) 0%, rgba(130, 190, 255, 0.35) 50%, transparent 100%)',
    'sage-light':
      'radial-gradient(circle, rgba(190, 220, 160, 0.8) 0%, rgba(190, 220, 160, 0.4) 50%, transparent 100%)',
    'lavender-dark':
      'radial-gradient(circle, rgba(160, 170, 230, 0.5) 0%, rgba(160, 170, 230, 0.3) 50%, transparent 100%)',
    'blue-dark':
      'radial-gradient(circle, rgba(110, 160, 255, 0.7) 0%, rgba(110, 160, 255, 0.35) 50%, transparent 100%)',
    'sage-dark':
      'radial-gradient(circle, rgba(160, 200, 120, 0.7) 0%, rgba(160, 200, 120, 0.5) 50%, transparent 100%)',
  };

  return colorMap[color] || colorMap['soft-blue'];
};
