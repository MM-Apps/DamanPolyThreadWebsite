import React from 'react';
import type { ProductSpec } from '../../types';

interface SpecTableProps {
  specs: ProductSpec[];
  title?: string;
}

export const SpecTable: React.FC<SpecTableProps> = ({ specs, title = 'Technical Specifications' }) => {
  return (
    <div className="w-full bg-white rounded-lg border border-border overflow-hidden shadow-2xs">
      {title && (
        <div className="bg-primary px-5 py-3 border-b border-primary-light/40 flex items-center justify-between">
          <h4 className="font-heading font-bold text-white text-sm tracking-wide uppercase">
            {title}
          </h4>
          <span className="text-[11px] text-accent font-medium uppercase tracking-wider">
            Verified Standards
          </span>
        </div>
      )}
      <div className="divide-y divide-border">
        {specs.map((spec, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 sm:grid-cols-3 px-5 py-3.5 text-sm transition-colors ${
              index % 2 === 0 ? 'bg-white' : 'bg-base/40'
            }`}
          >
            <span className="font-semibold text-primary sm:col-span-1 text-xs sm:text-sm uppercase tracking-wide text-slate">
              {spec.label}
            </span>
            <span className="font-medium text-primary sm:col-span-2 mt-1 sm:mt-0 font-sans">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
