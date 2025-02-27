// src/components/ui/SEO.tsx
import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export default function SEO({
  title,
  description = "Vatsal Tibrewal's portfolio website showcasing skills and projects as a Full Stack Developer.",
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonicalUrl = "https://yourwebsite.com",
}: SEOProps) {
  const fullTitle = `${title} | Vatsal Tibrewal - Full Stack Developer`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="follow, index" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}