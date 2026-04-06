export function Navbar() {
  const items = [
    { label: "Home", href: "#home" },
    { label: "Collection", href: "#collection" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="mb-6 flex items-center justify-between rounded-[1.5rem] border border-white/70 bg-white/60 px-5 py-4 backdrop-blur">
      <div className="text-sm uppercase tracking-[0.35em] text-[#8c7564]">
        Maison Collection
      </div>
      <nav className="hidden items-center gap-6 md:flex">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-xs uppercase tracking-[0.22em] text-[#7c6758] transition hover:text-[#2f241d]"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="rounded-full bg-[#2f241d] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white"
      >
        Contact
      </a>
    </header>
  );
}
