"use client";

import { Dropdown, Button } from "ndui-ahrom";

const items = [
  {
    label: "Option 1",
    value: "1",
    onClick: () => console.log("Option 1 clicked"),
  },
  {
    label: "Option 2",
    value: "2",
    onClick: () => console.log("Option 2 clicked"),
  },
];

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            Basic usage
            <Dropdown trigger={<Button>Open Menu</Button>} items={items} />
            Custom position and size
            <Dropdown
              trigger={<Button>Settings</Button>}
              items={items}
              position="right"
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
