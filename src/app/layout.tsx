import type { Metadata } from 'next'
import { Lato, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import LenisProvider from '@/components/common/LenisProvider'
import KeyboardShortcuts from '@/components/common/KeyboardShortcuts'
import { portfolioData } from '@/data/portfolioData'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
})

const baseUrl = 'https://naseeraslam.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Muhammad Naseer Aslam | Senior Magento Developer',
    template: '%s | Muhammad Naseer Aslam',
  },
  description: 'Adobe Commerce Certified Expert & Senior Magento Developer. 5+ years architecting high-scale enterprise platforms. Open to Remote, Relocation & Visa.',
  keywords: [
    'Naseer',
    'Naseer Aslam',
    'Muhammad Naseer Aslam',
    'Naseer Aslam Magento',
    'Senior Magento Developer',
    'Adobe Commerce Certified Expert',
    'Magento 2 Developer',
    'Hyva Themes Developer',
    'GraphQL Magento Engineer'
  ],
  authors: [{ name: 'Muhammad Naseer Aslam', url: baseUrl }],
  creator: 'Muhammad Naseer Aslam',
  publisher: 'Muhammad Naseer Aslam',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: baseUrl,
    title: 'Muhammad Naseer Aslam | Senior Magento Developer',
    description: 'Adobe Commerce Certified Expert & Senior Magento Developer. 5+ years architecting high-scale enterprise platforms. Open to Remote, Relocation & Visa.',
    siteName: 'Muhammad Naseer Aslam',
    images: [
      {
        url: `${baseUrl}/headshot-on-white.jpg`,
        width: 1200,
        height: 630,
        alt: 'Muhammad Naseer Aslam — Adobe Commerce Certified Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Naseer Aslam | Senior Magento Developer',
    description: 'Adobe Commerce Certified Expert & Senior Magento Developer. 5+ years architecting high-scale enterprise platforms.',
    images: [`${baseUrl}/headshot-on-white.jpg`],
  },
  verification: {
    google: 'googleefce79dd7f1e3b54',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: 'Muhammad Naseer Aslam',
    alternateName: ['Naseer Aslam', 'Naseer', 'M. Naseer Aslam'],
    givenName: 'Muhammad Naseer',
    familyName: 'Aslam',
    jobTitle: 'Senior Software Engineer & Adobe Commerce Certified Expert',
    description: 'Adobe Commerce Certified Expert with 5+ years of experience architecting, upgrading, and scaling Magento 2 e-commerce platforms for high-volume enterprise retailers.',
    url: baseUrl,
    image: `${baseUrl}/headshot-on-white.jpg`,
    email: portfolioData.personal.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressRegion: 'Punjab',
      addressCountry: 'Pakistan',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Punjab University College of Information Technology (PUCIT)',
      url: 'https://pucit.edu.pk/',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'FiveTech',
    },
    sameAs: [
      portfolioData.personal.contact.linkedin,
      portfolioData.personal.contact.github,
      portfolioData.certifications[0].verificationUrl,
      portfolioData.certifications[1].verificationUrl,
    ],
    knowsAbout: [
      'Magento 2',
      'Adobe Commerce Enterprise',
      'PHP 8',
      'GraphQL APIs',
      'REST APIs',
      'Hyvä Themes',
      'B2B E-Commerce Architecture',
      'CI/CD Automation',
      'Docker & AWS Deployment',
      'Stripe Integration',
      'Log Rotation & Linux DevOps'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Adobe Commerce Certified Expert',
        credentialCategory: 'Professional Certification',
        url: portfolioData.certifications[0].verificationUrl,
        recognizedBy: {
          '@type': 'Organization',
          name: 'Adobe',
          url: 'https://www.adobe.com/',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Adobe Certified Professional — Adobe Commerce Developer',
        credentialCategory: 'Professional Certification',
        url: portfolioData.certifications[1].verificationUrl,
        recognizedBy: {
          '@type': 'Organization',
          name: 'Adobe',
          url: 'https://www.adobe.com/',
        },
      },
    ],
  }

  const jsonLdProfilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${baseUrl}/#profilepage`,
    url: baseUrl,
    name: 'Muhammad Naseer Aslam — Official Personal Portfolio & Profile',
    mainEntity: {
      '@id': `${baseUrl}/#person`,
    },
  }

  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Muhammad Naseer Aslam',
    description: 'Senior Software Engineer & Adobe Commerce Certified Expert Portfolio',
    publisher: {
      '@id': `${baseUrl}/#person`,
    },
  }

  return (
    <html lang="en" className={`${lato.variable} ${jetbrains.variable} scroll-smooth`}>
      <head>
        {/* Preload LCP image for instant paint */}
        <link rel="preload" href="/headshot.webp" as="image" type="image/webp" />
        <link rel="preload" href="/headshot-mobile.webp" as="image" type="image/webp" media="(max-width: 768px)" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Google Tag Manager with lazyOnload strategy to preserve 95+ Lighthouse Performance */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WF4FP3J5');`,
          }}
        />
        {/* End Google Tag Manager */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfilePage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="bg-[#060911] text-slate-100 antialiased selection:bg-orange-500 selection:text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WF4FP3J5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <LenisProvider>
          <KeyboardShortcuts />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
