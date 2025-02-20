"use client";

import { Select } from "ndui-ahrom";

interface Option {
  value: string;
  label: string;
}

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            // Basic usage
            <Select label="Choose an option" options={options} />
            // With error state
            <Select
              label="Country"
              options={options}
              error="Please select a country"
            />
            // Custom size
            <Select label="Size" options={options} size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
