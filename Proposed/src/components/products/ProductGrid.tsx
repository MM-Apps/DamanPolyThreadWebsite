import React, { useState } from 'react';
import type { Product } from '../../types';
import { products } from '../../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  onSelectProduct?: (product: Product) => void;
  showFilters?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  onSelectProduct,
  showFilters = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Product Lines' },
    { id: 'ppmf', label: 'PP Multifilament Yarn' },
    { id: 'bct', label: 'Bag Closing Thread' },
    { id: 'nwf', label: 'Narrow Woven Fabrics' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full space-y-8">
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-slate hover:bg-base hover:text-primary border border-border'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onSelectProduct}
          />
        ))}
      </div>
    </div>
  );
};
