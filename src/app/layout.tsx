import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.Js BoilerPlate',
  description: 'This is a template repository to initiate a next.js project.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
