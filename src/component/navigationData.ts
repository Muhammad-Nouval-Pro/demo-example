export const navigationItems = ['Home', 'Generative AI', 'Solutions', 'Industry', 'Services', 'Company']


export const industryItems = [
  { label: 'Financial Services', icon: 'm3 9 9-6 9 6H3Zm2 3v6m5-6v6m4-6v6m5-6v6M3 21h18' },
  { label: 'Healthcare', icon: 'M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z' },
  { label: 'Retail', icon: 'M4 7h16l1 14H3L4 7Zm4 0V6a4 4 0 0 1 8 0v1' },
  { label: 'Manufacturing', icon: 'M3 21V9l6 3V7l6 4V3h4l2 18H3Zm3-5h1m4 0h1m5 0h1' },
  { label: 'Education', icon: 'm2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6m4-2v8' },
]

export const companyItems = [
  { label: 'Contact Us', href: '#contact', icon: 'M3 5h18v14H3z m0 1 9 7 9-7' },
  { label: 'iZeno Events', href: '/izeno-events', icon: 'M4 5h16v16H4z M8 3v4m8-4v4M4 11h16m-12 4h2m4 0h2' },
  { label: 'Partners', href: '#partners', icon: 'M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M2 21v-2a6 6 0 0 1 12 0v2m2-17a4 4 0 0 1 0 8m1 3a5 5 0 0 1 5 5v1' },
  { label: 'Blog', href: '#blog', icon: 'M4 3h12l4 4v14H4z M14 3v6h6M8 13h8m-8 4h6' },
  { label: 'Careers', href: '/careers', icon: 'M3 7h18v14H3z M8 7V3h8v4M3 12c6 4 12 4 18 0m-9 1v4' },
  { label: 'iZeno\u2019s 20 Years of Excellence', href: '/izeno-u2019s-20-years-of-excellence', icon: 'M7 3h10v5a5 5 0 0 1-10 0V3Zm0 2H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4m-5 1v6m-4 2h8' },
  { label: 'Environmental, Social, and Corporate Governance (ESG)', href: '/environmental-social-and-corporate-governance-esg', icon: 'M20 3C9 2 3 7 5 14s16 6 15-11ZM4 21 16 9' },
]

export const solutionGroups = [
  {
    title: 'Applications',
    items: [
      { label: 'Business Process Management (BPM)' },
      { label: 'Customer Relationship Management (CRM)' },
      { label: 'Customer Service Platform', nested: true },
      { label: 'Marketing Automation', nested: true },
      { label: 'Sales Force Automation (SFA)', nested: true },
      { label: 'Low-Code' },
      { label: 'IT Service Management (ITSM)' },
      { label: 'End-to-End IT Service Management for BFSI', nested: true },
      { label: 'IT Asset Management (ITAM)', nested: true },
      { label: 'ITSM Endpoint Suite', nested: true },
      { label: 'ITSM Migration Expertise', nested: true },
      { label: 'iZeno’s Assets+', nested: true },
      { label: 'Work Management' },
    ],
  },
  {
    title: 'App Modernisation',
    items: ['API Management', 'API Security', 'Microservices', 'Middleware Migration', 'SSO'].map((label) => ({ label, nested: false })),
  },
  {
    title: 'Cloud',
    items: ['AIOps', 'Automation', 'Cloud Streaming Platform', 'Hybrid & Multi-Cloud', 'iZeno on AWS Marketplace', 'Observability', 'Public Cloud', 'Virtualization'].map((label) => ({ label, nested: false })),
  },
  {
    title: 'Data',
    items: ['AI / ML Practice', 'Data Governance', 'Data Modeling', 'Data Modernization', 'Data Science Platform'].map((label) => ({ label, nested: false })),
  },
  {
    title: 'DevSecOps',
    items: ['Atlassian Teamwork Collection', 'Application Security', 'CI/CD Optimization', 'CNAPP', 'DevOps'].map((label) => ({ label, nested: false })),
  },
]


const localDestinations: Record<string, string> = {
  'Home': '#home', 'Generative AI': '#generative-ai', 'Services': '#services', 'Partners': '#partners',
  'Contact Us': '#contact', 'Blog': '#blog', 'Solutions': '#solutions',
}
export function navigationHref(label: string) {
  return localDestinations[label] ?? `/${label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
}

