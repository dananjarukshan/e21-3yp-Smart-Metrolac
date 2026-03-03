type FeatureCardProps = {
  title: string;
  points: string[];
};

export default function FeatureCard({ title, points }: FeatureCardProps) {
  return (
    <article className="surface-card animate-fade-up">
      <h3 className="text-xl font-semibold text-brand-navy">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-brand-green" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
