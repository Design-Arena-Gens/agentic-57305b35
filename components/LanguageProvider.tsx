"use client";
import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

type Language = 'en' | 'hi';

type LanguageContextValue = {
  primaryLanguage: Language;
  setPrimaryLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [primaryLanguage, setPrimaryLanguage] = useState<Language>('en');

  const value = useMemo(() => ({ primaryLanguage, setPrimaryLanguage }), [primaryLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
