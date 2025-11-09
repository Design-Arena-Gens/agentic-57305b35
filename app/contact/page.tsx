import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold">Contact ? ??????</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card space-y-3">
          <div>
            <div className="font-semibold">Address ? ???</div>
            <p>{BUSINESS.address}</p>
          </div>
          <div>
            <div className="font-semibold">Phone ? ???</div>
            <p><a className="text-primary" href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a></p>
          </div>
          <div>
            <div className="font-semibold">Hours ? ???</div>
            {BUSINESS.hours.map(h => (
              <div key={h.day}>{h.day}: {h.time}</div>
            ))}
          </div>
          <div className="pt-2">
            <Link href={`https://wa.me/${BUSINESS.whatsapp}`} className="btn btn-accent">Message on WhatsApp</Link>
          </div>
        </div>
        <div className="card">
          <div className="font-semibold mb-2">Quick Booking ? ?????? ??????</div>
          <ContactQuickForm />
        </div>
      </div>
    </div>
  );
}

function ContactQuickForm() {
  return (
    <form action="/api/book" method="post" className="grid gap-3">
      <input name="name" required placeholder="Name" className="rounded-md border border-gray-300 px-3 py-2" />
      <input name="phone" required placeholder="Phone" className="rounded-md border border-gray-300 px-3 py-2" />
      <input name="service" placeholder="Service" className="rounded-md border border-gray-300 px-3 py-2" />
      <textarea name="message" rows={3} placeholder="Message" className="rounded-md border border-gray-300 px-3 py-2"></textarea>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}
