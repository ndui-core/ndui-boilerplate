"use client";

import { Fab } from "ndui-ahrom";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            // Basic usage
            <Fab icon="+" onClick={() => console.log("FAB clicked")} />
            // Custom position and color
            <Fab icon="📝" position="top-right" color="secondary" size="lg" />
            // Multiple FABs
            <>
              <Fab icon="+" position="bottom-right" color="primary" />
              <Fab
                icon="🔍"
                position="bottom-left"
                color="secondary"
                size="sm"
              />
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
