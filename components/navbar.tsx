export function Navbar() {
  const items = [
    { label: "首页", href: "#home" },
    { label: "服务模块", href: "#services" },
    { label: "策略优势", href: "#about" },
    { label: "团队支持", href: "#team" },
    { label: "联系我们", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(245,197,66,0.08)] bg-[#050505]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* LOGO */}
        <div className="text-2xl font-semibold tracking-[0.28em] text-white">
          GLOBITEX
        </div>

        {/* 导航 */}
        <nav className="hidden items-center gap-8 lg:flex">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-[#f5c542]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 按钮 */}
        <a
          href="#contact"
          className="rounded-full bg-[#f5c542] px-5 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(245,197,66,0.25)] transition hover:scale-[1.03]"
        >
          立即咨询
        </a>

      </div>
    </header>
  );
}
