"use client";

import { Modal, Button } from "ndui-ahrom";
import React from "react";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              title="Example Modal"
              footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
            >
              <p>Modal content goes here</p>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
