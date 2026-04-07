export function Navbar() {
  const items = [
    { label: "首页", href: "#home" },
    { label: "服务优势", href: "#services" },
    { label: "核心能力", href: "#about" },
    { label: "团队介绍", href: "#team" },
    { label: "联系我们", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-[rgba(245,197,66,0.08)] bg-[#050505]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="text-2xl font-semibold tracking-[0.28em] text-white">
          GLOBITEX
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/75 transition hover:text-[#f5c542]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#f5c542] px-5 py-2 text-sm font-medium text-black"
        >
          立即咨询
        </a>
      </div>
    </header>
  );
}
