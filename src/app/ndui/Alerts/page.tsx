"use client";
import { Alert } from "ndui-ahrom";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            // Basic usage
            <Alert message="This is an info alert" />
            // Success alert with auto-close
            <Alert
              type="success"
              message="Operation completed successfully"
              autoClose={3000}
              onClose={() => console.log("Alert closed")}
            />
            // Warning alert with close button
            <Alert
              type="warning"
              message="Please review your changes"
              onClose={() => console.log("Alert closed")}
            />
            // Error alert
            <Alert type="error" message="An error occurred" />
          </div>
        </div>
      </div>
    </div>
  );
}
