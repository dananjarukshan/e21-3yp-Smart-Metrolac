import type { Metadata } from "next";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Features",
  description: "Role-based features for factory administrators, collection centers, and farmers."
};

const sections = [
  {
    title: "Factory Admin Dashboard",
    points: [
      "Real-time intake quality analytics with DRC, pH, TDS, and thermal status indicators",
      "Fraud risk flags for salt adulteration and spoilage anomalies",
      "Comparative center performance trends and quality benchmarking",
      "Decision support for pricing, quality grading, and procurement controls"
    ]
  },
  {
    title: "Collection Center Dashboard",
    points: [
      "Instant field-level latex profile generation during collection",
      "Automated pass/fail quality checks based on calibrated thresholds",
      "Digital record creation with timestamped measurement history",
      "Synchronization with central backend for transparent reporting"
    ]
  },
  {
    title: "Farmer Portal",
    points: [
      "Visibility into delivered latex quality and acceptance status",
      "Historical contribution logs and quality progression insights",
      "Faster dispute resolution through data-backed evidence",
      "Trust-building with transparent and objective measurement workflows"
    ]
  }
];

export default function FeaturesPage() {
  return (
    <section className="section-padding">
      <div className="container-standard">
        <h1 className="page-title">Key Features</h1>
        <p className="page-lead">
          The platform is designed with role-aware interfaces to serve operational, managerial, and stakeholder
          communication needs across the full latex collection lifecycle.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {sections.map((section) => (
            <FeatureCard key={section.title} title={section.title} points={section.points} />
          ))}
        </div>
      </div>
    </section>
  );
}
