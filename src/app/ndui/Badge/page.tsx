"use client";
import { Badge } from "ndui-ahrom";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            Basic usage
            <Badge>Default</Badge>
            Success badge with custom size
            <Badge variant="success" size="lg">
              Completed
            </Badge>
            Warning badge with custom class
            <Badge variant="warning" className="ml-2">
              Pending
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
