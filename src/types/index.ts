export type ServiceType = 
  | 'Home Health' 
  | 'Hospice Care' 
  | 'Provider Service'
  | 'Physical Therapy'
  | 'Occupational Therapy'
  | 'IV Therapy'
  | 'Cardiac Care'
  | 'Diabetic Management'
  | 'Diagnosis Education'
  | 'Medication Management'
  | 'Pulmonary Care';

export type County = 'Nueces' | 'San Patricio' | 'Aransas' | 'Kleberg' | 'Bee' | 'Refugio' | 'Live Oak';
export type Insurance = 'Medicare' | 'Medicaid' | 'United Healthcare' | 'Blue Cross Blue Shield' | 'Aetna' | 'Cigna';

export interface SearchFilters {
  serviceType?: ServiceType;
  county?: County;
  insurance?: Insurance;
}

export interface Agency {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  website: string;
  featured: boolean;
  serviceTypes: ServiceType[];
  counties: County[];
  insuranceAccepted: Insurance[];
}

export interface PlatinumPartner {
  id: string;
  name: string;
  description: string;
  image: string;
  phone: string;
  website: string;
}