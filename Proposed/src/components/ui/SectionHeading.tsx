import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  inverted?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  inverted = false,
  className = '',
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded border ${
            inverted
              ? 'text-accent bg-accent/10 border-accent/20'
              : 'text-primary bg-primary/5 border-primary/15'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-heading leading-tight ${
          inverted ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            inverted ? 'text-slate-light' : 'text-slate'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
