import React from 'react';

export interface BadgeProps {
  variant?: 'primary' | 'gold' | 'slate' | 'outline' | 'surface';
  size?: 'sm' | 'md';
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  const baseStyles = 'inline-flex items-center font-semibold uppercase tracking-wider rounded';

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 leading-tight',
    md: 'text-xs px-2.5 py-1 leading-normal',
  };

  const variantStyles = {
    primary: 'bg-primary/10 text-primary border border-primary/20',
    gold: 'bg-accent/15 text-primary-dark border border-accent/30 font-bold',
    slate: 'bg-slate/10 text-slate border border-slate/20',
    outline: 'border border-border text-slate bg-transparent',
    surface: 'bg-white text-primary border border-border shadow-2xs',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim()}>
      {children}
    </span>
  );
};
