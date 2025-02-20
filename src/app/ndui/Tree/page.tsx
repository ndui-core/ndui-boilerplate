"use client";

import { Tree } from "ndui-ahrom";

const nodes = [
  {
    id: "1",
    label: "Root",
    children: [
      {
        id: "1.1",
        label: "Child 1",
        icon: "📁",
        children: [{ id: "1.1.1", label: "Grandchild", icon: "📄" }],
      },
      { id: "1.2", label: "Child 2", icon: "📁" },
    ],
  },
];

export default function TableDemo() {
  return (
    <div className="p-4">
      {/* Basic Table */}
      <h2 className="text-lg font-bold mb-2">Basic Table</h2>
      Basic usage Basic usage
      <Tree nodes={nodes} />
      With click handler and default expanded nodes
      <Tree
        nodes={nodes}
        onNodeClick={(node) => console.log("Clicked:", node.label)}
        defaultExpanded={["1", "1.1"]}
      />
    </div>
  );
}
