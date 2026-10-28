import { describe, it, expect } from 'vitest';
import { products } from './products';
import { companyData } from './company';

describe('Products & Company Data Integrity', () => {
  it('should contain all 3 core authentic product lines', () => {
    expect(products).toHaveLength(3);
    const categories = products.map((p) => p.category);
    expect(categories).toContain('ppmf');
    expect(categories).toContain('bct');
    expect(categories).toContain('nwf');
  });

  it('should have authentic brand names matching Daman Polythread registrations', () => {
    const ppmf = products.find((p) => p.category === 'ppmf');
    const bct = products.find((p) => p.category === 'bct');
    const nwf = products.find((p) => p.category === 'nwf');

    expect(ppmf?.brand).toBe('THREADLON');
    expect(bct?.brand).toBe('THREADLON');
    expect(nwf?.brand).toContain('TUFF');
  });

  it('should have accurate technical specifications for PPMF yarn', () => {
    const ppmf = products.find((p) => p.category === 'ppmf');
    expect(ppmf).toBeDefined();

    const denierSpec = ppmf?.specs.find((s) => s.label === 'Denier Range');
    expect(denierSpec?.value).toContain('200');
    expect(denierSpec?.value).toContain('6,000');

    const tenacitySpec = ppmf?.specs.find((s) => s.label === 'Tenacity');
    expect(tenacitySpec?.value).toContain('8.0');
  });

  it('should contain authentic company metrics and milestones', () => {
    expect(companyData.foundedYear).toBe(2000);

    const yarnCapacity = companyData.capacities.find((c) =>
      c.product.toLowerCase().includes('polypropylene multifilament')
    );
    expect(yarnCapacity?.capacity).toContain('10,000');

    const webbingCapacity = companyData.capacities.find((c) =>
      c.product.toLowerCase().includes('narrow woven')
    );
    expect(webbingCapacity?.capacity).toContain('2,000');
  });

  it('should have all 5 in-house manufacturing processes', () => {
    expect(companyData.processes).toHaveLength(5);
    const processIds = companyData.processes.map((p) => p.id);
    expect(processIds).toEqual(['spinning', 'texturizing', 'twisting', 'winding', 'needle-looms']);
  });

  it('should contain head office in Mumbai and factory in Daman', () => {
    expect(companyData.locations).toHaveLength(2);
    const headOffice = companyData.locations.find((l) => l.type === 'head-office');
    const factory = companyData.locations.find((l) => l.type === 'factory');

    expect(headOffice?.address.join(' ')).toContain('Mumbai');
    expect(factory?.address.join(' ')).toContain('Daman');
  });
});
