"use client";
import { Tabs } from "ndui-ahrom";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

const tabs = [
  {
    id: "tab1",
    label: "First Tab",
    content: <p>Content for first tab</p>,
  },
  {
    id: "tab2",
    label: "Second Tab",
    content: <p>Content for second tab</p>,
  },
];

export default function TableDemo() {
  return (
    <div className="p-4">
      {/* Basic Table */}
      <h2 className="text-lg font-bold mb-2">Basic Table</h2>
      // Basic usage
      <Tabs tabs={tabs} />
      // With custom variant and onChange
      <Tabs
        tabs={tabs}
        variant="lifted"
        onChange={(tabId) => console.log("Active tab:", tabId)}
      />
      // With controlled active tab
      <Tabs tabs={tabs} activeTab="tab2" />
    </div>
  );
}
