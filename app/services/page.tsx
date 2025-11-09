import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export default function ServicesIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold">Services ? ??????</h1>
      <p className="text-gray-700">We offer expert electrical and appliance services in Dwarka. ? ?? ??????? ??? ???????? ??????????? ?? ???????? ?????? ?????? ???? ????</p>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BUSINESS.services.map(s => (
          <li key={s.key} className="card">
            <div className="font-semibold text-lg">{s.en}</div>
            <div className="text-sm text-gray-600">{s.hi}</div>
            <Link className="btn btn-primary mt-4" href={`/services/${s.key}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
