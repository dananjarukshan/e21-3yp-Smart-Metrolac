import type { Metadata } from "next";
import ArchitectureBlock from "@/components/ArchitectureBlock";

export const metadata: Metadata = {
  title: "System Architecture",
  description: "Layered architecture of Smart Metrolac from IoT devices to analytics dashboard."
};

const layers = [
  {
    title: "IoT Layer (ESP32 + Sensors)",
    description:
      "Edge devices capture mass, temperature, pH, and TDS metrics at collection points with lightweight preprocessing."
  },
  {
    title: "REST API Layer",
    description:
      "Structured HTTP endpoints transmit validated sensor packets securely and efficiently to backend services."
  },
  {
    title: "Node.js + Express Backend",
    description:
      "Non-blocking request handling supports high-frequency ingestion, business logic enforcement, and analytics orchestration."
  },
  {
    title: "Firebase Firestore + Authentication",
    description:
      "Cloud-native persistence enables scalable document storage, user-role isolation, and secure project access control."
  },
  {
    title: "Next.js Dashboard",
    description:
      "Role-based interfaces provide real-time visibility of quality trends, abnormal readings, and operational decisions."
  }
];

export default function ArchitecturePage() {
  return (
    <section className="section-padding bg-brand-mist/40">
      <div className="container-standard">
        <h1 className="page-title">System Architecture</h1>
        <p className="page-lead">
          Smart Metrolac follows a layered architecture that separates sensing, communication, computation,
          persistence, and presentation for reliability and maintainability.
        </p>

        <div className="mt-10 grid gap-4">
          {layers.map((layer) => (
            <ArchitectureBlock key={layer.title} title={layer.title} description={layer.description} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-brand-navy">Architecture Flow Diagram</h2>
          <div className="mt-6 overflow-x-auto">
            <svg viewBox="0 0 980 160" className="min-w-[760px] w-full" role="img" aria-label="Smart Metrolac architecture flow">
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#1E3A8A" />
                </marker>
              </defs>
              {[
                [20, "IoT Layer"],
                [210, "REST API"],
                [400, "Node.js"],
                [590, "Firebase"],
                [780, "Next.js UI"]
              ].map(([x, label], idx) => (
                <g key={String(label)}>
                  <rect x={Number(x)} y="40" width="160" height="64" rx="12" fill="#ffffff" stroke="#1E3A8A" strokeWidth="2" />
                  <text x={Number(x) + 80} y="78" textAnchor="middle" fill="#0B1E3D" fontSize="14" fontWeight="600">
                    {String(label)}
                  </text>
                  {idx < 4 && (
                    <line
                      x1={Number(x) + 160}
                      y1="72"
                      x2={Number(x) + 188}
                      y2="72"
                      stroke="#1E3A8A"
                      strokeWidth="2"
                      markerEnd="url(#arrow)"
                    />
                  )}
                </g>
              ))}
            </svg>
          </div>
        </div>

        <div className="mt-8 surface-card">
          <h2 className="text-xl font-semibold text-brand-navy">Temperature Compensation Model</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Since latex density and viscosity vary with ambient temperature, Smart Metrolac adjusts raw DRC estimates
            using calibration coefficients derived from empirical factory samples. This correction reduces systematic
            error and improves cross-location comparability.
          </p>
        </div>
      </div>
    </section>
  );
}
