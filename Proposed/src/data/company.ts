import type { CompanyInfo } from '../types';
import { assetUrl } from '../utils/assetUrl';

export const companyData: CompanyInfo = {
  name: 'Daman Polythread Ltd.',
  brandTagline: 'Engineered Threads. Built for Industry.',
  foundedYear: 2000,
  stats: [
    {
      value: '10,000 MT',
      label: 'Annual PP Yarn Capacity',
      subtext: 'Largest manufacturer in India with 8 compact European spinning lines',
    },
    {
      value: '2,000 MT',
      label: 'Annual Webbing Capacity',
      subtext: 'Heavy-duty narrow woven fabrics from 10mm to 100mm width',
    },
    {
      value: '8.0 g/d',
      label: 'Maximum Tenacity',
      subtext: 'High-tenacity filament engineering across 200 to 6,000 Denier',
    },
    {
      value: '25+ Years',
      label: 'Manufacturing Excellence',
      subtext: 'Pioneered HT PPMF yarn production in India in the year 2000',
    },
  ],
  capacities: [
    {
      product: 'High-Tenacity Polypropylene Multifilament Yarn',
      capacity: '10,000 Tons / Annum',
      detail: 'Extruded across 8 state-of-the-art European compact spinning lines with automated HMI interface control.',
    },
    {
      product: 'Narrow Woven Fabrics & Webbings',
      capacity: '2,000 Tons / Annum',
      detail: 'Woven on high-speed precision needle looms utilizing 100% virgin polymer yarns.',
    },
    {
      product: 'Industrial Bag Closing Thread',
      capacity: 'Integrated In-House Processing',
      detail: 'Specialized twisting, bonding, and silicone wax lubricating finishes for high-speed automated bag packaging.',
    },
  ],
  processes: [
    {
      id: 'spinning',
      title: 'European Compact Spinning',
      description: 'Extrusion and drawing on European compact spinning lines with closed-loop HMI automated process control, ensuring uniform filament cross-section and exact denier consistency.',
      image: assetUrl('/images/processes/Spinning.png'),
    },
    {
      id: 'texturizing',
      title: 'Intermingling & Texturizing',
      description: 'High-pressure air jets interlace individual continuous filaments to produce coherent yarn structures that prevent separation during rapid weaving and sewing operations.',
      image: assetUrl('/images/processes/Texturizing.png'),
    },
    {
      id: 'twisting',
      title: 'Precision Twisting',
      description: 'Single and multi-ply twisting lines calibrate turns per meter (TPM) to achieve the exact tensile load and flexural endurance specified by industrial clients.',
      image: assetUrl('/images/processes/Twisting.png'),
    },
    {
      id: 'winding',
      title: 'High-Precision Winding',
      description: 'Automated electronic tension-controlled cone winding creates knot-free packages that deploy seamlessly on high-speed industrial machinery without snagging.',
      image: assetUrl('/images/processes/Winding.png'),
    },
    {
      id: 'needle-looms',
      title: 'Heavy-Duty Needle Weaving',
      description: 'Multi-head high-speed needle looms engineer narrow woven fabrics and industrial webbings in custom weaves, widths (10mm - 100mm), and load ratings.',
      image: assetUrl('/images/processes/Needle.png'),
    },
  ],
  qualityPillars: [
    {
      title: 'Assurance & Continuous Control',
      description: 'Dedicated Quality Control departments at every manufacturing unit continuously test yarn batches from molten polymer stage to final wound package.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Automated Lab Testing',
      description: 'Testing facilities equipped with automated Tensile Testing Machines, digital Twist Testers, and precision Denier Testers for rapid count verification in hank form.',
      icon: 'Cpu',
    },
    {
      title: 'Precision Packaging & Dispatch',
      description: 'Every package undergoes physical inspection before shipping. Palletized and export-grade moisture-sealed wrapping ensures zero damage during domestic and global transit.',
      icon: 'PackageCheck',
    },
  ],
  locations: [
    {
      type: 'head-office',
      title: 'Corporate & Sales Headquarters',
      address: [
        '603/604, Marathon Icon',
        'Marathon Next Gen Complex, Off G.K. Marg',
        'Lower Parel (West)',
        'Mumbai - 400013, Maharashtra, India',
      ],
      phone: '+91 22 6144 1900',
      fax: '+91 22 6144 1901',
      email: 'info@damanpolythread.com',
    },
    {
      type: 'factory',
      title: 'Manufacturing Facilities',
      address: [
        'Daman Industrial Area',
        'Union Territory of Dadra & Nagar Haveli and Daman & Diu',
        'Pin Code: 396210, India',
        'Location: ~180 km North of Mumbai Port',
      ],
      phone: '+91 22 6144 1900',
      email: 'info@damanpolythread.com',
    },
  ],
  emails: {
    general: 'info@damanpolythread.com',
    careers: 'jobs@damanpolythread.com',
  },
  phones: {
    primary: '+91 22 6144 1900',
    fax: '+91 22 6144 1901',
  },
};
