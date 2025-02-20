"use client";

import { Menu, Button } from "ndui-ahrom";

const items = [
  {
    id: "1",
    label: "Edit",
    icon: "✏️",
    onClick: () => console.log("Edit clicked"),
  },
  {
    id: "2",
    label: "Delete",
    icon: "🗑️",
    onClick: () => console.log("Delete clicked"),
    disabled: true,
  },
  { id: "3", label: "-", divider: true },
  {
    id: "4",
    label: "Settings",
    icon: "⚙️",
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
            <Menu trigger={<Button>Open Menu</Button>} items={items} />
            Custom position
            <Menu
              trigger={<Button>Actions</Button>}
              items={items}
              position="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
