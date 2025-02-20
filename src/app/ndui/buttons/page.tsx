import { Button } from "ndui-ahrom";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            // Basic usage
            <Button>Click me</Button>
            // With variant and size
            <Button variant="secondary" size="lg">
              Large Secondary Button
            </Button>
            // Loading state
            <Button loading>Saving...</Button>
            // With icon
            <Button icon={<span>👋</span>} iconPosition="right">
              Hello
            </Button>
            // Full width
            <Button fullWidth>Full Width Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
