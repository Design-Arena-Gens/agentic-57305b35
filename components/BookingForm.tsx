"use client";
import { BUSINESS } from '@/lib/constants';
import { useState } from 'react';

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      setStatus('loading');
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
      <div>
        <label className="block text-sm font-medium">Name ? ???</label>
        <input name="name" required placeholder="Your name" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone ? ???</label>
        <input name="phone" required pattern="[0-9+\- ]{8,}" placeholder="+91 ..." className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Service ? ????</label>
        <select name="service" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2">
          {BUSINESS.services.map(s => (
            <option key={s.key} value={s.en}>{s.en} / {s.hi}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Preferred Date ? ??????? ????</label>
        <input type="date" name="date" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium">Message ? ?????</label>
        <textarea name="message" rows={4} placeholder="Tell us about the issue" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"></textarea>
      </div>
      <div className="md:col-span-2 flex items-center justify-between">
        <div className="text-sm text-gray-600">By submitting, you agree to be contacted. ? ????? ???? ?? ?? ?????? ???? ???? ????</div>
        <button type="submit" disabled={status==='loading'} className="btn btn-primary">
          {status==='loading' ? 'Submitting?' : 'Submit ? ?????'}
        </button>
      </div>
      {status==='success' && <div className="md:col-span-2 text-green-700">Thanks! We will contact you shortly. ? ???????! ?? ???? ?? ?????? ???????</div>}
      {status==='error' && <div className="md:col-span-2 text-red-600">Submission failed. Try again. ? ?????? ????? ??? ?? ?????? ?????</div>}
    </form>
  );
}
