"use client";

import { Button, Form, Input } from "ndui-ahrom";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            <Form schema={schema} onSubmit={(data) => console.log(data)}>
              <Input name="email" label="ایمیل" />
              <Input name="password" type="password" label="رمز عبور" />
              <Button type="submit">ارسال</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
