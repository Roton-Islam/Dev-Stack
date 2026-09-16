const Footer = () => {
  const productLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
  ];

  const companyLinks = [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#careers" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ];

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[950px] px-5 py-10 sm:px-6 sm:py-12 lg:px-0">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="#home"
              className="inline-flex items-center"
              aria-label="DevStack Home"
            >
              <img
                src="../assets/logo.png"
                alt="DevStack Logo"
                className="h-8 w-auto object-contain"
              />
            </a>

            <p className="mt-4 max-w-[260px] text-[11px] leading-[18px] text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="#"
                className="text-[10px] font-medium text-slate-700 hover:text-gray-950"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[10px] font-medium text-slate-700 hover:text-gray-950"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[10px] font-medium text-slate-700 hover:text-gray-950"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <ul className="mt-4 space-y-[9px]">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[10px] text-slate-500 transition-colors duration-200 hover:text-gray-900"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <ul className="mt-4 space-y-[9px]">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[10px] text-slate-500 transition-colors duration-200 hover:text-gray-900"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-[9px]">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[10px] text-slate-500 transition-colors duration-200 hover:text-gray-900"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-center text-[10px] text-slate-400 sm:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex items-center justify-center gap-5 sm:justify-end">
            <a
              href="#privacy"
              className="text-[10px] text-slate-400 transition-colors duration-200 hover:text-gray-900"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-[10px] text-slate-400 transition-colors duration-200 hover:text-gray-900"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
