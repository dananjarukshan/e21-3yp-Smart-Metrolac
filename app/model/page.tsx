import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathematical Model",
  description: "Equations and fraud detection logic used in Smart Metrolac analytics pipeline."
};

export default function ModelPage() {
  return (
    <section className="section-padding">
      <div className="container-standard">
        <h1 className="page-title">Mathematical Model</h1>
        <p className="page-lead">
          Smart Metrolac integrates empirical calibration and sensor fusion to estimate DRC accurately and identify
          suspicious quality signatures linked to adulteration or spoilage.
        </p>

        <div className="mt-10 space-y-6">
          <article className="surface-card">
            <h2 className="text-xl font-semibold text-brand-navy">1) Base DRC Estimation</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              DRC is first estimated from gravimetric and conductivity-informed features:
            </p>
            <p className="mt-4 rounded-lg bg-slate-50 p-4 font-mono text-sm text-brand-blue">
              DRC_raw = a₀ + a₁·ρ + a₂·pH + a₃·TDS
            </p>
          </article>

          <article className="surface-card">
            <h2 className="text-xl font-semibold text-brand-navy">2) Temperature Compensation</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Corrected DRC accounts for thermal variance around reference temperature T_ref:
            </p>
            <p className="mt-4 rounded-lg bg-slate-50 p-4 font-mono text-sm text-brand-blue">
              DRC_corrected = DRC_raw × (1 + k · (T_measured - T_ref))
            </p>
          </article>

          <article className="surface-card">
            <h2 className="text-xl font-semibold text-brand-navy">3) Fraud Detection Logic</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">A sample is flagged when rule violations exceed threshold β:</p>
            <p className="mt-4 rounded-lg bg-slate-50 p-4 font-mono text-sm text-brand-blue">
              RiskScore = w₁·I(TDS &gt; τ_tds) + w₂·I(pH &lt; τ_ph) + w₃·I(|DRC_corrected - DRC_expected| &gt; τ_drc)
            </p>
            <p className="mt-3 rounded-lg bg-slate-50 p-4 font-mono text-sm text-brand-blue">FraudFlag = 1 if RiskScore ≥ β, else 0</p>
          </article>
        </div>
      </div>
    </section>
  );
}
