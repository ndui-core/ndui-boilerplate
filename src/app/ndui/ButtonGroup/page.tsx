"use client";


import { ButtonGroup } from 'ndui-ahrom';
import React, { useState } from 'react';


const ButtonGroupTestPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3', disabled: true }, // گزینه غیرفعال
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Button Group Test</h1>

      {/* حالت پیش‌فرض */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Default</h2>
        <ButtonGroup 
          options={options} 
          value={selectedOption} 
          onChange={setSelectedOption} 
        />
      </div>

      {/* اندازه‌های مختلف */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Sizes</h2>
        <ButtonGroup options={options} value={selectedOption} onChange={setSelectedOption} size="xs" className="mb-2" />
        <ButtonGroup options={options} value={selectedOption} onChange={setSelectedOption} size="sm" className="mb-2" />
        <ButtonGroup options={options} value={selectedOption} onChange={setSelectedOption} size="md" className="mb-2" />
        <ButtonGroup options={options} value={selectedOption} onChange={setSelectedOption} size="lg" />
      </div>

      {/* رنگ‌بندی‌های مختلف */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Variants</h2>
        <ButtonGroup options={options} value={selectedOption} onChange={setSelectedOption} variant="primary" className="mb-2" />
        <ButtonGroup options={options} value={selectedOption} onChange={setSelectedOption} variant="secondary" className="mb-2" />
        <ButtonGroup options={options} value={selectedOption} onChange={setSelectedOption} variant="accent" />
      </div>

      {/* مقدار انتخاب شده */}
      <div className="mt-6 p-4 border rounded-lg">
        <h2 className="text-lg font-semibold">Selected Value:</h2>
        <p className="text-primary font-medium">{selectedOption}</p>
      </div>
    </div>
  );
};

export default ButtonGroupTestPage;
