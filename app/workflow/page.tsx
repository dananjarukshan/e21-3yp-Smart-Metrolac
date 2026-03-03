import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflow",
  description: "End-to-end operational flow of Smart Metrolac from farmer submission to factory analytics."
};

const steps = [
  {
    title: "1. Farmer Submission",
    detail: "Latex batches are delivered to authorized collection centers for standardized digital assessment."
  },
  {
    title: "2. Collection Center Intake",
    detail: "Operators initiate sample capture and trigger IoT measurement sequences through controlled workflows."
  },
  {
    title: "3. IoT Device Measurement",
    detail: "ESP32 nodes acquire load, temperature, pH, and TDS values, then package readings for transmission."
  },
  {
    title: "4. Backend Validation & Processing",
    detail: "Node.js services validate payloads, apply compensation algorithms, and calculate risk indicators."
  },
  {
    title: "5. Factory Dashboard Intelligence",
    detail: "Processed metrics are visualized in real time for quality governance, auditing, and procurement decisions."
  }
];

export default function WorkflowPage() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-brand-mist/40">
      <div className="container-standard">
        <h1 className="page-title">Operational Workflow</h1>
        <p className="page-lead">
          The workflow ensures that every quality decision is traceable, data-driven, and aligned with scalable
          factory operations.
        </p>

        <ol className="mt-10 space-y-4">
          {steps.map((step) => (
            <li key={step.title} className="surface-card">
              <h2 className="text-lg font-semibold text-brand-blue">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
