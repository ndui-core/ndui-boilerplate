"use client";


import React, { useState } from 'react';
import { Slider } from 'ndui-ahrom';

export default function Table() {


  const [sliderValue, setSliderValue] = useState(50);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Toggle Component Test</h1>
      
      <div className="space-y-4">
      <div className="space-y-4 mt-6">
        <Slider label="Default Slider" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
        <Slider label="Primary Slider" color="primary" />
        <Slider label="Secondary Slider" color="secondary" />
        <Slider label="Accent Slider" color="accent" />
        <Slider label="With Error" error="Invalid value" />
        <Slider label="Custom Class" className="border border-blue-500" />
      </div>
      </div>
    </div>
  );
};

