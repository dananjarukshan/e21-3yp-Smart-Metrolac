import Link from "next/link";

export default function HomePage() {
  return (
    <section className="section-padding bg-gradient-to-b from-brand-mist to-white">
      <div className="container-standard">
        <div className="max-w-4xl animate-fade-up">
          <p className="mb-3 inline-block rounded-full bg-brand-green/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
            University Research Portfolio
          </p>
          <h1 className="page-title sm:text-5xl">Smart Metrolac</h1>
          <p className="mt-4 text-xl font-medium text-brand-blue">
            Intelligent IoT Platform for Rubber Latex Quality Monitoring in Sri Lanka
          </p>
          <p className="page-lead">
            Smart Metrolac is a full-stack, field-ready system that integrates ESP32-based sensing,
            RESTful communication, scalable cloud services, and a modern web dashboard to deliver
            accurate Dry Rubber Content estimation, detect adulteration, and support evidence-based
            decision-making in factory and collection center operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/architecture"
              className="rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy"
            >
              View Architecture
            </Link>
            <Link
              href="/features"
              className="rounded-lg border border-brand-blue px-5 py-3 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
            >
              View Features
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
