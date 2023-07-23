import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Providers } from '@/components/Provider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next ',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
