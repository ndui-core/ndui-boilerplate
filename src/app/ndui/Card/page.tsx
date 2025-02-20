import { Card, Button } from "ndui-ahrom";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            <Card>
              <p>Simple card content</p>
            </Card>
            // Card with title and footer
            <Card title="Card Title" footer={<Button>Action</Button>}>
              <p>Card content with title and footer</p>
            </Card>
            // Custom styled card
            <Card className="w-96 mx-auto">
              <p>Custom width card</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
