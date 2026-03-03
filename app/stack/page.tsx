import type { Metadata } from "next";
import StackCard from "@/components/StackCard";

export const metadata: Metadata = {
  title: "Technology Stack",
  description: "Technical rationale for Smart Metrolac architecture and platform choices."
};

const stack = [
  {
    title: "Node.js + Express.js",
    reason:
      "Selected for event-driven, non-blocking I/O behavior suitable for ingesting frequent IoT measurements with low infrastructure overhead.",
    pros: [
      "Scales effectively for high-concurrency sensor traffic",
      "Fast API development and middleware ecosystem",
      "Strong fit for real-time and asynchronous workloads"
    ]
  },
  {
    title: "Firebase Firestore + Authentication",
    reason:
      "Chosen to accelerate secure backend delivery with managed identity and flexible document storage optimized for evolving operational records.",
    pros: [
      "Built-in authentication and role-based access support",
      "Real-time synchronization and cloud availability",
      "Reduced maintenance compared with self-hosted alternatives"
    ]
  },
  {
    title: "Next.js (React)",
    reason:
      "Adopted to build responsive, high-performance dashboards with server-side rendering support and production-ready routing conventions.",
    pros: [
      "Excellent user experience with optimized rendering",
      "Structured App Router architecture for scale",
      "Strong ecosystem for enterprise-grade frontend development"
    ]
  },
  {
    title: "HTTP REST APIs",
    reason:
      "Used as a lightweight and interoperable interface between ESP32 nodes and backend services with clear request-response semantics.",
    pros: [
      "Simple to integrate, test, and monitor",
      "Reliable across constrained or variable networks",
      "Compatible with broad industrial and cloud tooling"
    ]
  }
];

export default function TechStackPage() {
  return (
    <section className="section-padding bg-brand-mist/40">
      <div className="container-standard">
        <h1 className="page-title">Technology Stack</h1>
        <p className="page-lead">
          The selected architecture prioritizes cost efficiency, operational scalability, and maintainability,
          making it practical for large-scale deployment across diverse collection centers.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {stack.map((item) => (
            <StackCard key={item.title} title={item.title} reason={item.reason} pros={item.pros} />
          ))}
        </div>
      </div>
    </section>
  );
}
