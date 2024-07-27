import React from 'react';
import ReactMarkdown from 'react-markdown';
import { aboutMarkdown } from './aboutMarkdown'; // Import the Markdown content

const AboutPage = () => {
  return (
    <div>
      <div style={{ padding: '20px' }}>
        <h1>About Page</h1>
        <ReactMarkdown>{aboutMarkdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default AboutPage;
