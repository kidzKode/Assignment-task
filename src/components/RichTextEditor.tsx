import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('richTextContent');
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const handleChange = (value: string) => {
    setContent(value);
    localStorage.setItem('richTextContent', value);
  };

  return (
    <ReactQuill value={content} onChange={handleChange} />
  );
};

export default RichTextEditor;
