import React, { useState, Suspense, lazy } from 'react';
import ReactMarkdown from 'react-markdown';
import { sampleMarkdown } from './sampleMarkdown';

const LazyMarkdown = lazy(() => import('./LazyMarkdown')); // Lazy load Markdown content

const HomePage = () => {
  const [selectedContent, setSelectedContent] = useState(sampleMarkdown); // Initial content

  // Function to handle sidebar item click
  const handleItemClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <div style={{ width: '20%', borderRight: '1px solid #ddd', padding: '20px' }}>
          <h2>Sections</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={() => handleItemClick(sampleMarkdown)} style={buttonStyle}>
              Introduction
            </button>
            <button onClick={() => handleItemClick('## Another Section\n\nDetailed information about another topic. Here, you can describe various aspects in depth and provide examples or further reading. This section can be expanded with more details as needed.')} style={buttonStyle}>
              Another Section
            </button>
            <button onClick={() => handleItemClick('## Advanced Topics\n\nExplore more complex ideas and theories. This section can include discussions on advanced concepts, technical details, or case studies that provide deeper insights into the subject matter.')} style={buttonStyle}>
              Advanced Topics
            </button>
            <button onClick={() => handleItemClick(<LazyMarkdown />)} style={buttonStyle}>
              Lazy Loaded Section
            </button>
            <button onClick={() => handleItemClick(<LazyMarkdown content={'## Case Studies\n\nIn this section, we explore various case studies that illustrate the practical application of the concepts discussed. Each case study provides a real-world example, highlighting the challenges and solutions implemented.'} />)} style={buttonStyle}>
              Case Studies
            </button>
            <button onClick={() => handleItemClick(<LazyMarkdown content={'## Conclusion\n\nSummarize the key points covered in the content. The conclusion can also provide a call to action or suggest further reading and resources for those interested in learning more about the topics discussed.'} />)} style={buttonStyle}>
              Conclusion
            </button>
            {/* Add more items as needed */}
          </div>
        </div>
        <div style={{ width: '80%', padding: '20px' }}>
          <h1>Home Page</h1>
          <Suspense fallback={<div>Loading content...</div>}>
            {typeof selectedContent === 'string' ? (
              <ReactMarkdown>{selectedContent}</ReactMarkdown>
            ) : (
              selectedContent
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

// Button styling
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#f8f8f8',
  border: '1px solid #ddd',
  borderRadius: '4px',
  textAlign: 'left',
  width: '100%',
  transition: 'background-color 0.3s',
};

export default HomePage;
