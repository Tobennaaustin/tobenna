import { useState } from "react";
import {  NavLink, Link } from "react-router-dom";
const NAV_ITEMS = [
  { name: "work", href: "/work" },
  { name: "about", href: "/about" },
  { name: "writing", href: "/writing" },
  { name: "Contact", href: "/contact" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-hairline bg-canvas">
      <div className="relative mx-auto flex max-w-300 items-center justify-between px-6 py-4 md:px-12">
        <Link to="/" className="font-mono text-[13px] font-semibold text-fg-bright">
          TT<span className="text-accent">.</span>
        </Link>

         <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-soft bg-surface text-fg-muted transition-colors hover:border-accent hover:text-fg focus:outline-none md:hidden"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="sr-only">Open menu</span>

        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {menuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      <nav
        className={`absolute inset-x-0 top-full z-10 rounded-b-[18px] border border-line-soft border-t-0 bg-canvas px-6 py-4 shadow-[0_24px_64px_rgba(0,0,0,0.08)] transition-all duration-200 md:static md:shadow-none md:border-none md:bg-transparent md:px-0 md:py-0 ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-7">
          {NAV_ITEMS.map(({ name, href }) => (
            <NavLink
              key={name}
              to={href}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-fg-nav hover:text-fg"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      </nav>
      </div>
    </header>
  );
}






