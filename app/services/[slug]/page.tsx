import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = BUSINESS.services.find(s => s.key === params.slug);
  if (!service) return notFound();

  return (
    <div className="space-y-6">
      <nav className="text-sm text-gray-500">
        <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span className="text-gray-700">{service.en}</span>
      </nav>
      <h1 className="text-3xl font-extrabold">{service.en}</h1>
      <h2 className="text-xl text-gray-700">{service.hi}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <p>Professional {service.en.toLowerCase()} with transparent pricing and quick turnaround in Dwarka Sector 05 and nearby areas.</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Certified and experienced technicians</li>
            <li>Genuine parts and workmanship guarantee</li>
            <li>Upfront quote and no hidden charges</li>
          </ul>
          <p>?????? {service.hi} ? ???????? ????? ?? ???? ????? ???????? ??????????, ???????? ??????? ?? ???????? ??????</p>
        </div>
        <aside className="card space-y-2 h-max">
          <div className="font-semibold">Need this service?</div>
          <Link href="#booking" className="btn btn-primary w-full text-center">Book Now</Link>
          <Link href={`tel:${BUSINESS.phoneHref}`} className="btn btn-outline w-full text-center">Call {BUSINESS.phone}</Link>
          <Link href={`https://wa.me/${BUSINESS.whatsapp}`} className="btn btn-accent w-full text-center">WhatsApp</Link>
        </aside>
      </div>
    </div>
  );
}
