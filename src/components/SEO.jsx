import React from 'react';
import { Helmet } from 'react-helmet-async';
import { defaultSEO } from '../consts/seo';

const SEO = ({ title, description, keywords, image, url }) => {
    const seo = {
        title: title || defaultSEO.title,
        description: description || defaultSEO.description,
        keywords: keywords || defaultSEO.keywords,
        image: image || defaultSEO.image,
        url: url || defaultSEO.url,
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={seo.url} />
            <meta property="twitter:title" content={seo.title} />
            <meta property="twitter:description" content={seo.description} />
            <meta property="twitter:image" content={seo.image} />
        </Helmet>
    );
};

export default SEO;