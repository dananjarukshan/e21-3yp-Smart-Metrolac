import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Project",
  description: "Problem context and motivation behind Smart Metrolac in Sri Lanka."
};

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-standard">
        <h1 className="page-title">About the Project</h1>
        <p className="page-lead">
          Smart Metrolac addresses critical quality-assurance challenges in Sri Lanka’s rubber latex supply chain,
          where manual inspection methods are often slow, inconsistent, and vulnerable to fraudulent practices.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="surface-card">
            <h2 className="text-lg font-semibold text-brand-navy">Problem Statement</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Current latex quality checks are frequently delayed and laboratory-dependent. This creates uncertainty
              in pricing, enables adulteration using dissolved salts, and reduces trust between farmers,
              collection centers, and factories.
            </p>
          </article>
          <article className="surface-card">
            <h2 className="text-lg font-semibold text-brand-navy">Solution Overview</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Smart Metrolac combines load-cell, temperature, pH, and TDS sensors with ESP32-based edge acquisition,
              server-side analytics, and role-specific dashboards to provide calibrated DRC estimation and continuous
              quality monitoring.
            </p>
          </article>
          <article className="surface-card">
            <h2 className="text-lg font-semibold text-brand-navy">Relevance to Sri Lanka</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              The platform supports a cost-efficient and scalable pathway for digital transformation of local rubber
              ecosystems, improving transaction transparency, reducing quality disputes, and strengthening export-grade
              quality assurance.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
