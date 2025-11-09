import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsapp from '@/components/FloatingWhatsapp';
import { LanguageProvider } from '@/components/LanguageProvider';

export const metadata: Metadata = {
  title: 'Dwarka Electrical & Appliance Care | Trusted Services in Dwarka',
  description: 'Electrical wiring, appliance repair, installation, maintenance in Dwarka. Mon-Sat 10AM-8PM, Sunday closed. Call +91 98765 43210.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main className="container-page py-8">{children}</main>
          <Footer />
          <FloatingWhatsapp />
        </LanguageProvider>
      </body>
    </html>
  );
}
