"use client";

import React, { useState } from "react";
import { Calendar, MessageSquare, Phone, Mail } from "lucide-react";
import LogoMark  from "@/components/ui/LogoMark";
import Btn       from "@/components/ui/Btn";
import DemoModal from "@/components/DemoModal";

interface FooterColumn {
  title: string;
  links: string[];
}

const COLS: FooterColumn[] = [
  { title: "Platform",  links: ["Admissions","Academics","Finance","Communication","Administration","Analytics"] },
  { title: "Portals",   links: ["Admin Portal","Teacher Portal","Parent Portal","Student Portal"] },
  { title: "Resources", links: ["Documentation","Video Tutorials","Case Studies","Implementation Guide","API Reference"] },
];

const LEGAL_LINKS: string[] = ["Privacy Policy", "Terms of Service", "Data Security"];

const Footer: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <footer>
        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-brand-600 to-brand-800
          px-4 sm:px-16 py-16 sm:py-20 text-center">
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-white mb-3">
            Ready To Modernise Your School?
          </h2>
          <p className="font-inter text-base text-white/80 max-w-lg mx-auto mb-9">
            Join hundreds of forward-thinking institutions upgrading their
            operations with Sckool Suite.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Btn variant="white" onClick={() => setModal(true)}>
              <Calendar size={15} /> Book a Demo
            </Btn>
            <Btn variant="whiteOutline">
              <MessageSquare size={15} /> Chat on WhatsApp
            </Btn>
          </div>
        </div>

        {/* Links grid */}
        <div className="bg-gray-900 px-4 sm:px-16 py-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">

              {/* Brand column */}
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2.5 mb-4">
                  <LogoMark size={32} />
                  <span className="font-jakarta font-bold text-lg text-white">
                    Sckool Suite
                  </span>
                </div>
                <p className="font-inter text-sm text-white/50 leading-relaxed mb-5">
                  The complete school operations platform for modern African schools.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 font-inter text-xs text-white/55">
                    <Phone size={12} /> +234 800 000 0000
                  </span>
                  <span className="flex items-center gap-2 font-inter text-xs text-white/55">
                    <Mail size={12} /> hello@sckoolsuite.com
                  </span>
                  <a href="#" className="flex items-center gap-2 font-inter
                    text-xs font-semibold text-indigo-400 no-underline">
                    <MessageSquare size={12} /> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Link columns */}
              {COLS.map(col => (
                <div key={col.title}>
                  <p className="font-jakarta font-bold text-xs text-white
                    uppercase tracking-widest mb-4">
                    {col.title}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {col.links.map(link => (
                      <li key={link}>
                        <a href="#" className="font-inter text-sm text-white/50
                          hover:text-white/80 transition-colors no-underline">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 pt-6
              flex flex-col sm:flex-row justify-between gap-3">
              <p className="font-inter text-xs text-white/35">
                © 2026 Sckool Suite. All rights reserved. Built for Africa. Built by{" "}
                <a href="https://avariodigitals.com/"
                  className="text-white/55 underline">
                  Avario Digital
                </a>
              </p>
              <div className="flex flex-wrap gap-5">
                {LEGAL_LINKS.map(link => (
                  <a key={link} href="#"
                    className="font-inter text-xs text-white/35
                      hover:text-white/55 transition-colors no-underline">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <DemoModal isOpen={modal} onClose={() => setModal(false)} />
    </>
  );
};

export default Footer;
