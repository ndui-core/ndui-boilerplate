"use client";

import { Grid } from "ndui-ahrom";

export default function Home() {
  

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            // Basic usage
            <Grid columns={3} gap={4}>
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
            </Grid>
            // Responsive columns
            <Grid
              columns={{
                sm: 1,
                md: 2,
                lg: 3,
              }}
              gap={4}
            >
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
