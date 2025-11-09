"use client";
import Link from 'next/link';
import { useState } from 'react';
import LanguageToggle from '@/components/LanguageToggle';
import { BUSINESS } from '@/lib/constants';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky-header">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="w-3 h-6 bg-primary rounded-sm"></span>
          <span>Dwarka Electric</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/about" className="hover:text-primary">About Us</Link>
          <div className="relative">
            <button onClick={() => setOpen(!open)} className="hover:text-primary inline-flex items-center gap-1">
              Services
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z"/></svg>
            </button>
            {open && (
              <div onMouseLeave={() => setOpen(false)} className="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg border border-gray-100 z-40">
                <div className="py-2">
                  {BUSINESS.services.map(s => (
                    <Link key={s.key} href={`/services/${s.key}`} className="block px-4 py-2 hover:bg-gray-50">
                      <div className="font-medium">{s.en}</div>
                      <div className="text-sm text-gray-600">{s.hi}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Link href="#booking" className="btn btn-accent">Book a Service</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container-page py-3 flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
            <details>
              <summary className="cursor-pointer select-none">Services</summary>
              <div className="mt-2 pl-3 flex flex-col">
                {BUSINESS.services.map(s => (
                  <Link key={s.key} href={`/services/${s.key}`} onClick={() => setOpen(false)} className="py-1">{s.en} ? {s.hi}</Link>
                ))}
              </div>
            </details>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <div className="flex items-center justify-between">
              <LanguageToggle />
              <Link href="#booking" onClick={() => setOpen(false)} className="btn btn-accent">Book a Service</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
