"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LogoMark from "@/components/ui/LogoMark";
import Btn      from "@/components/ui/Btn";
import DemoModal from "@/components/DemoModal";

const NAV_LINKS: string[] = [
  "Challenge","Solutions","Platform","Modules","Why Choose Us","How it works","FAQ",
];

const Nav: React.FC = () => {
  const [menuOpen,  setMenuOpen]  = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <header>
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="fixed top-0 left-0 right-0 z-50 bg-white/97 border-b border-blue-900/10
            shadow-[0_1px_32px_rgba(15,42,94,0.06)] backdrop-blur-sm"
        >
          <div className="max-w-360 mx-auto px-8 h-18.25
            flex items-center justify-between">

            <Link href="/" aria-label="Sckool Suite home"
              className="flex items-center gap-2.5 no-underline">
              <LogoMark size={36} />
              <span className="font-jakarta font-bold text-base sm:text-lg tracking-tight text-gray-900">
                Sckool Suite
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="font-inter font-semibold text-sm text-gray-500
                    hover:text-gray-900 transition-colors whitespace-nowrap no-underline"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Btn onClick={() => setModalOpen(true)} className="min-w-32.75 text-xs sm:text-sm">
                Book A Demo
              </Btn>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-1 text-gray-700"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile drawer */}
          {menuOpen && (
            <div role="menu"
              className="lg:hidden absolute top-18.25 inset-x-0 bg-white
                border-b border-gray-200 px-6 py-4 flex flex-col gap-1 shadow-lg">
              {NAV_LINKS.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="font-inter font-semibold text-sm text-gray-700
                    py-3 border-b border-gray-100 no-underline"
                >
                  {link}
                </a>
              ))}
              <Btn className="mt-3 w-full"
                onClick={() => { setMenuOpen(false); setModalOpen(true); }}>
                Book A Demo
              </Btn>
            </div>
          )}
        </nav>

      </header>

      {/* spacer to prevent content from being hidden under the fixed header */}
      <div aria-hidden className="h-18.25" />

      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Nav;
