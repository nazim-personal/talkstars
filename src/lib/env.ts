export const env = {
  isLocal: process.env.NEXT_PUBLIC_ENV === 'local',
  isStaging: process.env.NEXT_PUBLIC_ENV === 'staging',
  isProduction: process.env.NEXT_PUBLIC_ENV === 'production',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL!,
  waNumber: process.env.NEXT_PUBLIC_WA_NUMBER!,
  customerCare: process.env.NEXT_PUBLIC_CUSTOMER_CARE!,
  gaId: process.env.NEXT_PUBLIC_GA_ID!,
  gtmId: process.env.NEXT_PUBLIC_GTM_ID!,
}
