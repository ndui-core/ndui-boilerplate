import React, { useState } from 'react';
import { Button, Radio, RangeSlider, Slider } from 'ndui-ahrom';

export default function Table() {
  const [selectedValue, setSelectedValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    setError('');
  };

  const handleSubmit = () => {
    if (!selectedValue) {
      setError('Please select an option.');
      return;
    }
    console.log('Selected value:', selectedValue);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Radio Component Test</h1>
      <div className="space-y-4">
        <Radio
          label="Option 1"
          name="test-radio"
          value="option1"
          checked={selectedValue === 'option1'}
          onChange={handleChange}
          error={error}
        />
        <Radio
          label="Option 2"
          name="test-radio"
          value="option2"
          checked={selectedValue === 'option2'}
          onChange={handleChange}
          error={error}
        />
        <Radio
          label="Option 3 (Disabled)"
          name="test-radio"
          value="option3"
          disabled
        />
      </div>
      <Button className="mt-4" onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

