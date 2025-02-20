"use client";

import { Timeline } from "ndui-ahrom";

const items = [
  {
    id: "1",
    title: "Event 1",
    content: "Description of event 1",
    date: "2023-01-01",
    icon: "🎉",
    color: "bg-primary",
  },
  {
    id: "2",
    title: "Event 2",
    content: "Description of event 2",
    date: "2023-02-01",
    icon: "📅",
  },
];

export default function TableDemo() {
  return (
    <div className="p-4">
      {/* Basic Table */}
      <h2 className="text-lg font-bold mb-2">Basic Table</h2>
      <Timeline items={items} />
      // Alternate layout
      <Timeline items={items} side="alternate" />
    </div>
  );
}
