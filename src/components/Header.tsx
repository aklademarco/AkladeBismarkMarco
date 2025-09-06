"use client";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (e.target instanceof Node && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <header className="flex items-center justify-between text-gray-300 mb-12">
        <div className="font-mono font-bold text-white text-lg">Marco</div>

        <nav>
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a className="text-gray-400 hover:text-white" href="#home"><span className="text-purple-400">#</span>home</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#projects"><span className="text-purple-400">#</span>projects</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#about"><span className="text-purple-400">#</span>about-me</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#contact"><span className="text-purple-400">#</span>contact</a></li>
          </ul>

          <button
            type="button"
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="md:hidden p-2 text-gray-300"
            onClick={() => setOpen(v => !v)}
          >
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.5H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M0 7H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M0 12.5H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </header>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden absolute right-0 mt-2 w-48 bg-gray-900/90 rounded p-3 shadow-lg z-40">
          <a href="#home" className="block px-2 py-2 text-gray-200 hover:bg-gray-800 rounded" onClick={() => setOpen(false)}> <span className="text-purple-400">#</span>home</a>
          <a href="#projects" className="block px-2 py-2 text-gray-200 hover:bg-gray-800 rounded" onClick={() => setOpen(false)}> <span className="text-purple-400">#</span>projects</a>
          <a href="#about" className="block px-2 py-2 text-gray-200 hover:bg-gray-800 rounded" onClick={() => setOpen(false)}> <span className="text-purple-400">#</span>about-me</a>
          <a href="#contact" className="block px-2 py-2 text-gray-200 hover:bg-gray-800 rounded" onClick={() => setOpen(false)}> <span className="text-purple-400">#</span>contact</a>
        </div>
      )}
    </div>
  );
}
