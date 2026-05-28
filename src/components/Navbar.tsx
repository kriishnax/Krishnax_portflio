import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Contact",
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="mt-4 flex items-center justify-between rounded-full border border-black/10 bg-white/70 backdrop-blur-xl px-6 py-4 shadow-sm">
          
          {/* Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold tracking-tight"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Krishnax.
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-black/70 transition hover:text-black"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:scale-105"
          >
            Let’s Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden text-3xl"
          >
            {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-5 mt-3 rounded-3xl border border-black/10 bg-white/90 backdrop-blur-xl p-6 shadow-xl">
          
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-black/80 transition hover:text-black"
              >
                {link}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="mt-6 flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;