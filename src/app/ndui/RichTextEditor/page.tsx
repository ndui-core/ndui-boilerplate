"use client";


import React, { useState } from 'react';
import { Button, RichTextEditor, Slider } from 'ndui-ahrom';

export default function Table() {
  const [content, setContent] = useState('<p>Initial content</p>');
  const [error, setError] = useState('');
  const [savedContent, setSavedContent] = useState('');

  const handleSave = () => {
    if (!content.trim()) {
      setError('Content cannot be empty.');
      return;
    }
    setError('');
    setSavedContent(content);
    console.log('Saved content:', content);
  };

  const handleClear = () => {
    setContent('');
    setError('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Rich Text Editor Test</h1>
      <RichTextEditor
        content={content}
        onChange={setContent}
        label="Description"
        error={error}
      />
      <div className="flex gap-4 mt-4">
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleClear} variant="secondary">Clear</Button>
      </div>
      {savedContent && (
        <div className="mt-6 border p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Saved Content Preview:</h2>
          <div dangerouslySetInnerHTML={{ __html: savedContent }} />
        </div>
      )}
    </div>
  );
};

