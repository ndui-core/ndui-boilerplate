"use client";

import { Input } from "ndui-ahrom";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            Basic usage
            <Input label="Username" placeholder="Enter username" />
            With error state
            <Input
              label="Email"
              type="email"
              error="Please enter a valid email"
            />
            Custom variant and size
            <Input
              label="Search"
              variant="ghost"
              inputSize="lg"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
