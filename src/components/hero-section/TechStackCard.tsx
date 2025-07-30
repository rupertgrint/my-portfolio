import { techIcons, getRadialGradient } from '@/data/techIcons';

export default function TechStackCard() {
  return (
    <div className='relative w-80 h-80 px-2'>
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
          className={`absolute ${tech.size} rounded-full backdrop-blur-lg flex items-center justify-center hover:scale-105 hover:backdrop-blur-xl transition-all duration-300 animate-float group`}
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
          <tech.icon
            className='text-xl drop-shadow-sm group-hover:text-2xl transition-all duration-300'
            style={{ color: tech.iconColor }}
          />
        </div>
      ))}
    </div>
  );
}
