import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoComponentProps {
  title: string;
  description: string;
  type: string;
  keyword: string;
  image?: string;
  url?: string;
}

const SeoComponnent: React.FC<SeoComponentProps> = ({ title, description, type, keyword, image, url }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name="keywords" content={keyword} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || 'http://localhost:5173/src/assets/default-img.webp'} />
      <meta property="og:url" content={url || window.location.href} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || 'https://www.glowupclinic.ae/landingpage/default-image.jpg'} />

      {/* Canonical URL */}
      <link rel="canonical" href={url || window.location.href} />
    </Helmet>
  );
};

export default SeoComponnent;
