export interface InclusionItem {
  label: string;
}

export interface UpsellItem {
  label: string;
}

export const inclusions: InclusionItem[] = [
  { label: 'Up to 6 pages' },
  { label: 'Mobile-first design' },
  { label: 'WhatsApp CTAs throughout' },
  { label: 'SEO setup' },
  { label: 'Contact form' },
  { label: 'Google Maps' },
  { label: 'Vercel deployment' },
  { label: 'Domain connection' },
  { label: '2 revision rounds' }
];

export const upsells: UpsellItem[] = [
  { label: 'M-Pesa Daraja integration' },
  { label: 'Custom backend or database' },
  { label: 'E-commerce with real payment processing' },
  { label: 'Monthly maintenance retainer (KES 5,000–10,000/month)' }
];
