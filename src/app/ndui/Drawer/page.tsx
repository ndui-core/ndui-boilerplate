"use client";

import { Drawer, Button } from "ndui-ahrom";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Button onClick={() => setIsOpen2(true)}>Open Drawer 2</Button>
      <Button onClick={() => setIsOpen3(true)}>Open Drawer 3</Button>
      <Button onClick={() => setIsOpen4(true)}>Open Drawer 4</Button>

      <Drawer
        isOpen={isOpen}
        mini={isOpen}
        onClose={() => setIsOpen(false)}
        side="right"
        
        size="300px"
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Drawer Content</h2>
          <p>This is the drawer content.</p>
        </div>
      </Drawer>
      // Resizable drawer
      <Drawer
        isOpen={isOpen2}
        onClose={() => setIsOpen2(false)}
        resizable
        minSize="200px"
        maxSize="500px"
      >
        <div className="p-4">
          <h2>Resizable Drawer</h2>
          <p>Drag the edge to resize</p>
        </div>
      </Drawer>
      // Mini drawer
      <Drawer
        isOpen={isOpen3}
        onClose={() => setIsOpen3(false)}
        mini
        miniWidth="60px"
      >
        <div className="p-4">
          <h2>Mini Drawer</h2>
        </div>
      </Drawer>
      // Responsive drawer
      <Drawer
        isOpen={isOpen4}
        onClose={() => setIsOpen4(false)}
        behavior="desktop"
        breakpoint={768}
      >
        <div className="p-4">
          <h2>Desktop Only Drawer</h2>
        </div>
      </Drawer>
    </div>
  );
}
