import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from 'next/script';
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClientOnly from './components/ClientOnly';
import BackToTop from './components/BackToTop';

export const metadata = {
  title: "MandsIT | Premium IT Solutions & Software Development in Dhaka",
  description: "Transform your business with MandsIT's expert software development, web design, mobile apps, and digital marketing services. Trusted by 120+ clients in Bangladesh. Get your free consultation today!",
  keywords: "IT solutions, web development, software company, Dhaka, mobile app, digital marketing, Flutter, React, Laravel, SEO, Bangladesh, MandsIT",
  authors: [{ name: "MandsIT" }],
  creator: "MandsIT",
  publisher: "MandsIT",
  icons: {
    icon: '/img/mandsit-logo.png',
    shortcut: '/img/mandsit-logo.png',
    apple: '/img/mandsit-logo.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mandsit.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MandsIT | Premium IT Solutions & Software Development in Dhaka",
    description: "Transform your business with MandsIT's expert software development, web design, mobile apps, and digital marketing services. Trusted by 120+ clients in Bangladesh.",
    url: 'https://mandsit.com',
    siteName: 'MandsIT',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/img/mandsit-logo.png',
        width: 1200,
        height: 630,
        alt: 'MandsIT - IT Solutions Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "MandsIT | Premium IT Solutions & Software Development",
    description: "Expert software development, web design, mobile apps, and digital marketing services in Bangladesh.",
    images: ['/img/mandsit-logo.png'],
    creator: '@mandsit',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }) {
  // Structured Data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MandsIT",
    "url": "https://mandsit.com",
    "logo": "https://mandsit.com/img/mandsit-logo.png",
    "description": "MandsIT is a dynamic and innovative technology team that specializes in providing cutting-edge software solutions and services to clients across various industries.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "23 Shawrapara",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880-1923867362",
      "contactType": "customer service",
      "email": "mandsitbd@gmail.com"
    },
    "sameAs": [
      "https://www.facebook.com/mandsIT",
      "https://twitter.com/mandsit",
      "https://www.linkedin.com/company/mandsit",
      "https://www.instagram.com/mandsit"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ITService",
    "name": "MandsIT",
    "image": "https://mandsit.com/img/mandsit-logo.png",
    "description": "Expert software development, web design, mobile app development, and digital marketing services in Bangladesh.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "23 Shawrapara",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    },
    "telephone": "+880-1923867362",
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MandsIT",
    "url": "https://mandsit.com",
    "description": "Transform your business with MandsIT's expert software development, web design, mobile apps, and digital marketing services.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mandsit.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Saira:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/team-style.css" rel="stylesheet" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <div id="spinner" className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-grow text-primary" role="status"></div>
        </div>

        <Topbar />
        <Navbar />

        <ClientOnly>
          {children}
        </ClientOnly>

        <Footer />
        <BackToTop />

        {/* Keep Bootstrap JS for carousel functionality */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive"></Script>
        {/* WOW.js for scroll animations */}
        <Script src="/lib/wow/wow.min.js" strategy="afterInteractive"></Script>
      </body>
    </html>
  );
}
