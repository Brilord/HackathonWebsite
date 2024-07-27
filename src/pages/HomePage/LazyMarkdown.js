import React from 'react';
import ReactMarkdown from 'react-markdown';

const LazyMarkdown = () => {
  const lazyContent = '## Lazy Loaded Section\n\nThis content is loaded lazily.';
  return <ReactMarkdown>{lazyContent}</ReactMarkdown>;
};

export default LazyMarkdown;
