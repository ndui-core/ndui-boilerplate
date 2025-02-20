"use client";

import { Toolbar, Button } from "ndui-ahrom";

export default function TableDemo() {
  return (
    <div className="p-4">
      {/* Basic Table */}
      <h2 className="text-lg font-bold mb-2">Basic Table</h2>
      // Basic usage
      <Toolbar>
        <h1 className="text-xl font-bold">App Title</h1>
      </Toolbar>
      // With navigation and actions
      <Toolbar elevated>
        <div className="flex-1">
          <h1 className="text-xl">Dashboard</h1>
        </div>
        <div className="flex gap-2">
          <Button>Settings</Button>
          <Button>Profile</Button>
        </div>
      </Toolbar>
      // Custom styling
      <Toolbar className="bg-primary text-primary-content">
        <h1>Custom Toolbar</h1>
      </Toolbar>
    </div>
  );
}
