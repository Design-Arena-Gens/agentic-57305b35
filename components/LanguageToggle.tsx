"use client";
import { useLanguage } from '@/components/LanguageProvider';

export default function LanguageToggle() {
  const { primaryLanguage, setPrimaryLanguage } = useLanguage();
  return (
    <div className="flex items-center gap-1">
      <button
        aria-label="English"
        onClick={() => setPrimaryLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm border ${primaryLanguage === 'en' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-300'}`}
      >
        ???? EN
      </button>
      <button
        aria-label="Hindi"
        onClick={() => setPrimaryLanguage('hi')}
        className={`px-2 py-1 rounded-md text-sm border ${primaryLanguage === 'hi' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-300'}`}
      >
        ???? HI
      </button>
    </div>
  );
}
