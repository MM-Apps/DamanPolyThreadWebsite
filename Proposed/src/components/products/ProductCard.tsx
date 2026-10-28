import React from 'react';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import type { Product } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div className="bg-white rounded-lg border border-border shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Product Image Area */}
      <div className="relative aspect-4/3 bg-base overflow-hidden border-b border-border flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge variant="gold" size="sm">
            {product.brand}
          </Badge>
          <Badge variant="primary" size="sm">
            {product.category.toUpperCase()}
          </Badge>
        </div>
      </div>

      {/* Product Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold text-slate uppercase tracking-wider block mb-1">
            {product.categoryLabel}
          </span>
          <h3 className="text-xl font-bold font-heading text-primary leading-snug group-hover:text-primary-light transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-slate mt-2.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Key Specs Pills */}
          <div className="mt-4 pt-4 border-t border-border/70 grid grid-cols-2 gap-2 text-xs">
            {product.specs.slice(0, 4).map((spec, idx) => (
              <div key={idx} className="bg-base/70 rounded p-2">
                <span className="text-[10px] text-slate block uppercase tracking-wide font-medium">
                  {spec.label}
                </span>
                <span className="font-semibold text-primary truncate block mt-0.5" title={spec.value}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="mt-4 space-y-1.5">
            {product.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Actions */}
        <div className="mt-6 pt-4 border-t border-border flex items-center gap-2.5">
          <Button
            to={`/products#${product.id}`}
            variant="outline"
            size="sm"
            className="flex-1 justify-center"
            onClick={() => onSelect && onSelect(product)}
            icon={<FileText className="w-3.5 h-3.5" />}
          >
            Technical Specs
          </Button>
          <Button
            to="/contact"
            variant="gold"
            size="sm"
            className="flex-1 justify-center"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Inquire
          </Button>
        </div>
      </div>
    </div>
  );
};
