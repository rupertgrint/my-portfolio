import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { RiNodejsFill } from 'react-icons/ri';
import { SiPostgresql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { RiHtml5Fill } from 'react-icons/ri';
import { RiReactjsFill } from 'react-icons/ri';

export default function TechStackCard() {
  const techIcons = [
    {
      icon: SiJavascript,
      position: { x: 60, y: 70 },
      delay: 0,
      color: 'emerald',
      iconColor: 'text-emerald-600',
      size: 'w-14 h-14',
    },
    {
      icon: SiTypescript,
      position: { x: 140, y: 40 },
      delay: 0.5,
      color: 'blue',
      iconColor: 'text-blue-600',
      size: 'w-16 h-16',
    },
    {
      icon: RiReactjsFill,
      position: { x: 220, y: 80 },
      delay: 1,
      color: 'cyan',
      iconColor: 'text-cyan-600',
      size: 'w-12 h-12',
    },
    {
      icon: SiTailwindcss,
      position: { x: 80, y: 150 },
      delay: 1.5,
      color: 'teal',
      iconColor: 'text-teal-600',
      size: 'w-15 h-15',
    },
    {
      icon: RiNextjsFill,
      position: { x: 180, y: 140 },
      delay: 2,
      color: 'slate',
      iconColor: 'text-slate-600',
      size: 'w-16 h-16',
    },
    {
      icon: RiNodejsFill,
      position: { x: 260, y: 180 },
      delay: 2.5,
      color: 'green',
      iconColor: 'text-green-600',
      size: 'w-13 h-13',
    },
    {
      icon: SiPostgresql,
      position: { x: 60, y: 220 },
      delay: 3,
      color: 'blue',
      iconColor: 'text-blue-600',
      size: 'w-14 h-14',
    },
    {
      icon: SiMongodb,
      position: { x: 160, y: 240 },
      delay: 3.5,
      color: 'green',
      iconColor: 'text-green-600',
      size: 'w-15 h-15',
    },
    {
      icon: RiHtml5Fill,
      position: { x: 240, y: 60 },
      delay: 4,
      color: 'indigo',
      iconColor: 'text-indigo-600',
      size: 'w-12 h-12',
    },
  ];

  const getRadialGradient = (color: string) => {
    const colorMap: { [key: string]: string } = {
      emerald:
        'radial-gradient(circle, rgba(52, 211, 153, 0.3) 0%, rgba(52, 211, 153, 0.1) 50%, transparent 100%)',
      blue: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
      cyan: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(34, 211, 238, 0.1) 50%, transparent 100%)',
      teal: 'radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, rgba(20, 184, 166, 0.1) 50%, transparent 100%)',
      slate:
        'radial-gradient(circle, rgba(100, 116, 139, 0.3) 0%, rgba(100, 116, 139, 0.1) 50%, transparent 100%)',
      green:
        'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 50%, transparent 100%)',
      indigo:
        'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 100%)',
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className='relative w-80 h-80'>
      <div
        className='absolute inset-0 rounded-full backdrop-blur-xl dark:hidden'
        style={{
          background:
            'radial-gradient(circle at center, rgba(0, 0, 0, 0.07) 0%, rgba(0, 0, 0, 0.03) 40%, rgba(0, 0, 0, 0.01) 70%, transparent 100%)',
          filter: 'blur(20px)',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
          width: '320px',
          height: '320px',
        }}
      />

      <div
        className='absolute inset-0 rounded-full backdrop-blur-xl dark:block hidden'
        style={{
          background:
            'radial-gradient(circle at center, rgba(255, 0, 255, 0.15) 0%, rgba(0, 200, 255, 0.1) 40%, transparent 100%)',
          filter: 'blur(40px)',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
          width: '320px',
          height: '320px',
        }}
      />

      {techIcons.map((tech, index) => (
        <div
          key={index}
          className={`absolute ${tech.size} rounded-full backdrop-blur-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-float`}
          style={{
            left: `${tech.position.x}px`,
            top: `${tech.position.y}px`,
            animationDelay: `${tech.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            background: getRadialGradient(tech.color),
            boxShadow:
              '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          }}
        >
          <tech.icon className={`${tech.iconColor} text-xl drop-shadow-sm`} />
        </div>
      ))}
    </div>
  );
}
