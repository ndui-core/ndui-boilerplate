"use client";

import { useState } from "react";
import { Stepper } from "ndui-ahrom";

const steps = [
  {
    id: "1",
    title: "Basic Info",
    content: <div className="p-4">Step 1: Basic Info Form</div>,
  },
  {
    id: "2",
    title: "Contact Details",
    content: <div className="p-4">Step 2: Contact Form</div>,
    optional: true,
  },
  {
    id: "3",
    title: "Review",
    content: <div className="p-4">Step 3: Review</div>,
  },
];

export default function StepperTestPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-xl font-bold mb-4">Stepper Test Page</h1>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        onChange={setActiveStep}
        orientation="horizontal"
        showNavigation
      />
      // Basic usage
      <Stepper steps={steps} />
      // Vertical orientation
      <Stepper steps={steps} orientation="vertical" />
      // Controlled stepper
      <Stepper steps={steps} activeStep={activeStep} onChange={setActiveStep} />
    </div>
  );
}
