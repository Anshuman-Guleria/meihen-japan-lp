export type PageType = 'home' | 'form' | 'thank-you';

export interface FormData {
  lastNameKanji: string;
  firstNameKanji: string;
  lastNameKana: string;
  firstNameKana: string;
  postalCode: string;
  address: string;
  propertyStatus: string;
  email: string;
  phone: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PlanFeature {
  title: string;
  description: string;
  imageUrl?: string;
}
