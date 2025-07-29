import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

export default function IconButton({
  icon,
  size = 'sm',
  className,
  ...props
}: Props) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-18 h-18',
  };

  return (
    <button
      className={`
        rounded-full 
        flex items-center justify-center
        cursor-pointer 
        transition-all duration-200 ease-in-out
        hover:opacity-55
        hover:scale-105
        active:scale-95
        ${sizeClasses[size]}
        ${className || ''}
      `.trim()}
      style={{
        fontSize: size === 'sm' ? '1.25rem' : size === 'md' ? '1.5rem' : '2rem',
      }}
      {...props}
    >
      {icon}
    </button>
  );
}
