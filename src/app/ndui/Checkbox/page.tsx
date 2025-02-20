"use client";


import { Button, Checkbox } from 'ndui-ahrom';
import React, { useState } from 'react';


const CheckboxTestPage: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!checked) {
      setError('You must agree to the terms.');
      return;
    }
    setError('');
    console.log('Checkbox checked:', checked);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkbox Test</h1>

      {/* Simple Checkbox */}
      <Checkbox 
        label="Accept terms and conditions" 
        checked={checked} 
        onChange={(e) => setChecked(e.target.checked)} 
        error={error}
      />

      {/* Disabled Checkbox */}
      <Checkbox label="Disabled option" disabled />

      {/* Pre-checked Checkbox */}
      <Checkbox label="Already checked" defaultChecked />

      <Button className="mt-4" onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default CheckboxTestPage;
