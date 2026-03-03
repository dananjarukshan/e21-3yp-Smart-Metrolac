type ArchitectureBlockProps = {
  title: string;
  description: string;
};

export default function ArchitectureBlock({ title, description }: ArchitectureBlockProps) {
  return (
    <div className="rounded-xl border border-brand-blue/20 bg-white p-5 shadow-soft animate-fade-up">
      <h3 className="text-base font-semibold text-brand-blue">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
