import { useEffect } from 'react';

export const useMetaTags = ({ title, description, keywords, image, url }) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const metaTags = {
      'description': description,
      'keywords': keywords,
      // Open Graph
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': url,
      'og:type': 'website',
      // Twitter
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
    };

    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      if (!content) return;

      // Check if meta tag exists
      let metaTag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      
      if (!metaTag) {
        // Create new meta tag if it doesn't exist
        metaTag = document.createElement('meta');
        // Use property for og: and twitter: tags, name for others
        const attributeName = name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name';
        metaTag.setAttribute(attributeName, name);
        document.head.appendChild(metaTag);
      }

      // Set or update content
      metaTag.setAttribute('content', content);
    });

    // Cleanup function to reset title on unmount
    return () => {
      document.title = 'Dipak Majumdar | Portfolio';
    };
  }, [title, description, keywords, image, url]);
};