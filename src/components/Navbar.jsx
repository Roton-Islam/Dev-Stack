import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-gray-100 bg-white">
      <nav className="relative mx-auto flex h-[50px] max-w-[1180px] items-center px-4 md:h-[68px] md:px-2">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-8 w-8 items-center justify-center text-gray-500 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <div className="flex w-5 flex-col gap-[4px]">
            <span className="h-[2px] w-5 rounded bg-gray-600"></span>
            <span className="h-[2px] w-5 rounded bg-gray-600"></span>
            <span className="h-[2px] w-5 rounded bg-gray-600"></span>
          </div>
        </button>
        <a
          href="#home"
          className="
            absolute
            left-1/2
            top-1/2
            flex
            -translate-x-1/2
            -translate-y-1/2
            items-center
            md:static
            md:ml-3
            md:translate-x-0
            md:translate-y-0
          "
        >
          <img
            src="/assets/logo.png"
            alt="DevStack Logo"
            className="h-7 w-auto object-contain md:h-8"
          />
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[12px] font-medium text-gray-600 transition hover:text-gray-950"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className="px-2 text-[11px] font-semibold text-gray-800 md:px-3 md:text-xs"
          >
            Sign In
          </button>

          <button
            type="button"
            className="rounded-full bg-[#d946ef] px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-[#c026d3] md:px-4 md:py-2 md:text-xs"
          >
            Sign Up
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-5 py-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-gray-100 py-3 text-sm font-medium text-gray-700 last:border-b-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
