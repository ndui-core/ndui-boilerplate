import React, { useState } from 'react';
import {Toggle} from 'ndui-ahrom';

export default function Table() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Toggle Component Test</h1>
      
      <div className="space-y-4">
        <Toggle label="Default Toggle" />
        <Toggle label="Primary Toggle" color="primary" />
        <Toggle label="Secondary Toggle" color="secondary" />
        <Toggle label="Accent Toggle" color="accent" />
        <Toggle label="With Error" error="This field is required" />
        <Toggle label="Custom Class" className="border border-red-500" />
        <Toggle label="Controlled Toggle" checked={checked} onChange={() => setChecked(!checked)} />
      </div>
    </div>
  );
};

