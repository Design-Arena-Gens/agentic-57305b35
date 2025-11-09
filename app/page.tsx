import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import ServiceCard from '@/components/ServiceCard';
import BookingForm from '@/components/BookingForm';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="badge mb-3">? {BUSINESS.rating} ({BUSINESS.reviews} Reviews)</div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Trusted Electrical & Appliance Repair in Dwarka
          </h1>
          <p className="mt-2 text-lg text-gray-700">??????? ??? ???????? ??????????? ?? ??? ???????? ?????</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`tel:${BUSINESS.phoneHref}`} className="btn btn-primary">?? Call Now</Link>
            <Link href={`https://wa.me/${BUSINESS.whatsapp}`} className="btn btn-outline">?? WhatsApp Us</Link>
            <Link href="#booking" className="btn btn-accent">?? Book a Service</Link>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            <div><strong>Hours:</strong> Mon-Sat 10 AM - 8 PM ? Sunday Closed</div>
            <div><strong>Phone:</strong> {BUSINESS.phone}</div>
            <div><strong>Address:</strong> {BUSINESS.address}</div>
          </div>
        </div>
        <div className="relative aspect-[4/3]">
          {/* Using next/Image with local svg */}
          <Image src="/hero-tech.svg" alt="Technician working" fill className="object-contain" />
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Our Services ? ????? ??????</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS.services.map(s => (
            <ServiceCard key={s.key} serviceKey={s.key} />
          ))}
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="scroll-mt-24">
        <div className="card">
          <h2 className="text-2xl font-bold">Book a Service ? ???? ??? ????</h2>
          <p className="text-gray-700">Share your details and we will reach you shortly. ???? ??????? ?????, ?? ???? ?????? ???????</p>
          <BookingForm />
        </div>
      </section>
    </div>
  );
}
