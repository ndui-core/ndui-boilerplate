"use client";

import { Tooltip, Button } from "ndui-ahrom";

export default function TableDemo() {
  return (
    <div className="p-4">
      {/* Basic Table */}
      <h2 className="text-lg font-bold mb-2">Basic Table</h2>
      Basic usage Basic usage
      <Tooltip content="This is a tooltip">
        <Button>Hover me</Button>
      </Tooltip>
      Custom position
      <Tooltip content="More information" position="right">
        <span>ℹ️</span>
      </Tooltip>
    </div>
  );
}
