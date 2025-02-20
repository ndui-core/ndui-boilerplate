"use client";

import { BottomBar, Radio } from "ndui-ahrom";
import { useState } from "react";

const items = [
  {
    icon: "🏠",
    label: "Home",
    value: "home",
  },
  {
    icon: "🔍",
    label: "Search",
    value: "search",
  },
  {
    icon: "❤️",
    label: "Favorites",
    value: "favorites",
    badge: 3,
  },
  {
    icon: "👤",
    label: "Profile",
    value: "profile",
  },
];
export default function Home() {
  const [active, setActive] = useState("home");
  const [selectedBar, setSelectedBar] = useState("default");

  return (
    <div className="flex flex-col gap-8 p-4">
      {/* Radio Buttons for selecting BottomBar */}
      <div className="flex gap-4">
        <Radio
          label="Default"
          name="bottomBar"
          value="default"
          checked={selectedBar === "default"}
          onChange={(e) => setSelectedBar(e.target.value)}
        />
        <Radio
          label="Custom Styled"
          name="bottomBar"
          value="custom"
          checked={selectedBar === "custom"}
          onChange={(e) => setSelectedBar(e.target.value)}
        />
        <Radio
          label="Icons Only"
          name="bottomBar"
          value="icons"
          checked={selectedBar === "icons"}
          onChange={(e) => setSelectedBar(e.target.value)}
        />
      </div>

      {/* Conditional Rendering of BottomBar */}
      {selectedBar === "default" && (
        <BottomBar items={items} value={active} onChange={setActive} />
      )}
      {selectedBar === "custom" && (
        <BottomBar
          items={items}
          value={active}
          onChange={setActive}
          activeColor="secondary"
          elevated={false}
          bordered
        />
      )}
      {selectedBar === "icons" && (
        <BottomBar
          items={items}
          value={active}
          onChange={setActive}
          showLabels={false}
        />
      )}
    </div>
  );
}
