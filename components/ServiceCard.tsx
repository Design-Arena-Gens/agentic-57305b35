import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export default function ServiceCard({ serviceKey }: { serviceKey: typeof BUSINESS.services[number]['key'] }) {
  const service = BUSINESS.services.find(s => s.key === serviceKey)!;
  const icon = getIcon(serviceKey);
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <div className="text-lg font-semibold">{service.en}</div>
      <div className="text-sm text-gray-600">{service.hi}</div>
      <p className="mt-3 text-gray-700">Expert technicians for {service.en.toLowerCase()} in Dwarka. ?????? ???????? {service.hi}?</p>
      <div className="mt-4 flex gap-2">
        <Link href={`/services/${service.key}`} className="btn btn-outline">Learn More</Link>
        <Link href="#booking" className="btn btn-primary">Book Now</Link>
      </div>
    </div>
  );
}

function getIcon(key: string) {
  switch (key) {
    case 'electrical-wiring': return '?';
    case 'appliance-repair': return '??';
    case 'installation': return '??';
    case 'maintenance': return '???';
    default: return '??';
  }
}
