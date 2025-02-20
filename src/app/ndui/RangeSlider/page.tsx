"use client";


import React, { useState } from 'react';
import { RangeSlider, Slider } from 'ndui-ahrom';

export default function Table() {
  const [value1, setValue1] = useState<[number, number]>([10, 50]);
  const [value2, setValue2] = useState<[number, number]>([20, 80]);
  const [value3, setValue3] = useState<[number, number]>([30, 60]);
  const [value4, setValue4] = useState<[number, number]>([40, 70]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">RangeSlider Test</h1>
      
      <div className="mb-6">
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={value1}
          onChange={setValue1}
          label="Primary (Default)"
          color="primary"
        />
      </div>
      
      <div className="mb-6">
        <RangeSlider
          min={0}
          max={100}
          step={5}
          value={value2}
          onChange={setValue2}
          label="Secondary - Small Size"
          color="secondary"
          size="sm"
        />
      </div>
      
      <div className="mb-6">
        <RangeSlider
          min={0}
          max={100}
          step={10}
          value={value3}
          onChange={setValue3}
          label="Accent - Large Size"
          color="accent"
          size="lg"
        />
      </div>
      
      <div className="mb-6">
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={value4}
          onChange={setValue4}
          label="With Error Message"
          color="primary"
          error="Invalid selection"
        />
      </div>
    </div>
  );
};

