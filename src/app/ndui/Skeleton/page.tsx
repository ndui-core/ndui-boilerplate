"use client";

import { Skeleton } from "ndui-ahrom";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            // Text skeleton
            <Skeleton type="text" />
            // Circle avatar
            <Skeleton type="circle" width={48} height={48} />
            // Custom rectangle
            <Skeleton
              type="rectangle"
              width="100%"
              height={200}
              animation="wave"
            />
            // Loading card example
            <div className="space-y-4">
              <Skeleton type="text" width="60%" />
              <Skeleton type="text" />
              <Skeleton type="text" />
              <Skeleton type="rectangle" height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
