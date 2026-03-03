import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/architecture", label: "Architecture" },
  { href: "/features", label: "Features" },
  { href: "/stack", label: "Tech Stack" },
  { href: "/model", label: "Model" },
  { href: "/workflow", label: "Workflow" },
  { href: "/team", label: "Team" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="container-standard flex flex-wrap items-center justify-between gap-3 py-4">
        <Link href="/" className="text-lg font-semibold text-brand-navy">
          Smart Metrolac
        </Link>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-slate-600">
          {links.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-brand-green">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
