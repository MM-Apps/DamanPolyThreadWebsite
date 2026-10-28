export interface ProductSpec {
  label: string;
  value: string;
}

export interface ApplicationItem {
  name: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: 'ppmf' | 'bct' | 'nwf';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  specs: ProductSpec[];
  features: string[];
  applications: ApplicationItem[];
  image: string;
  gallery: string[];
}

export interface CompanyStat {
  value: string;
  label: string;
  subtext?: string;
}

export interface ManufacturingProcess {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface QualityPillar {
  title: string;
  description: string;
  icon: string;
}

export interface ContactLocation {
  type: 'head-office' | 'factory';
  title: string;
  address: string[];
  phone?: string;
  fax?: string;
  email?: string;
}

export interface CompanyInfo {
  name: string;
  brandTagline: string;
  foundedYear: number;
  stats: CompanyStat[];
  capacities: {
    product: string;
    capacity: string;
    detail: string;
  }[];
  processes: ManufacturingProcess[];
  qualityPillars: QualityPillar[];
  locations: ContactLocation[];
  emails: {
    general: string;
    careers: string;
  };
  phones: {
    primary: string;
    fax: string;
  };
}

export interface EnquiryFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string;
  estimatedVolume?: string;
  message: string;
}
