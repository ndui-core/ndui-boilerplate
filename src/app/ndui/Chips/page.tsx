"use client"

import { Drawer, Button } from "ndui-ahrom";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>

            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Drawer Content</h2>
                <p>This is the drawer content.</p>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
