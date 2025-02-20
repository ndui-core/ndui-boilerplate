"use client";
import {  Chip } from "ndui-ahrom";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            Basic usage
            <Chip label="Basic Chip" />
            With icon and delete
            <Chip
              label="React"
              icon="⚛️"
              onDelete={() => console.log("Delete clicked")}
            />
            Different variants
            <div className="space-x-2">
              <Chip label="Filled" color="primary" variant="filled" />
              <Chip label="Outlined" color="secondary" variant="outlined" />
            </div>
            Custom styling
            <Chip
              label="Custom"
              color="success"
              size="lg"
              className="font-bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
