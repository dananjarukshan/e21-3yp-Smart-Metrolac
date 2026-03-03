type StackCardProps = {
  title: string;
  reason: string;
  pros: string[];
};

export default function StackCard({ title, reason, pros }: StackCardProps) {
  return (
    <article className="surface-card animate-fade-up">
      <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{reason}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {pros.map((pro) => (
          <li key={pro}>• {pro}</li>
        ))}
      </ul>
    </article>
  );
}
