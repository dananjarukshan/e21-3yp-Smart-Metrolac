import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact and Team",
  description: "Team composition and institutional context for the Smart Metrolac project."
};

export default function TeamPage() {
  return (
    <section className="section-padding">
      <div className="container-standard">
        <h1 className="page-title">Contact & Team</h1>
        <p className="page-lead">
          Smart Metrolac is developed as a final-year academic research initiative focused on practical industrial
          impact, digital trust, and scalable IoT implementation.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="surface-card">
            <h2 className="text-lg font-semibold text-brand-navy">Project Members</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Member 01 - IoT and embedded systems</li>
              <li>• Member 02 - Backend and cloud services</li>
              <li>• Member 03 - Frontend and data visualization</li>
              <li>• Member 04 - Calibration model and validation</li>
            </ul>
          </article>

          <article className="surface-card">
            <h2 className="text-lg font-semibold text-brand-navy">Academic Details</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              University: [University Name Placeholder]
              <br />
              Department: [Department Placeholder]
              <br />
              Supervisor: [Supervisor Name Placeholder]
            </p>
            <p className="mt-4 text-sm text-slate-600">
              GitHub Repository: 
              <Link href="https://github.com/" target="_blank" className="ml-1 font-medium text-brand-green hover:underline">
                Add project link
              </Link>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
