import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="container-page py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-extrabold text-lg mb-2">Dwarka Electric</div>
          <p className="text-gray-700">Trusted electrical and appliance services in Dwarka.</p>
          <p className="text-gray-700">??????? ??? ???????? ??????????? ?? ???????? ?????</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p>{BUSINESS.address}</p>
          <p>Phone: <a className="text-primary" href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a></p>
          <div className="mt-2">
            <div className="font-medium">Hours</div>
            {BUSINESS.hours.map((h) => (
              <div key={h.day}>{h.day}: {h.time}</div>
            ))}
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Links</div>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600">
        ? {new Date().getFullYear()} Dwarka Electric. All rights reserved.
      </div>
    </footer>
  );
}
