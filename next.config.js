import type { Metadata } from 'next';
import { Oxanium } from 'next/font/google'; // Import Oxanium font
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import type React from 'react';
import { cn } from '@/lib/utils';

const oxaniumFont = Oxanium({
  weight: ['400', '500', '600', '700'], // Include additional weights
  variable: '--font-oxanium',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", oxaniumFont.variable)}>
      <head>
        {/* Use o ícone de bot como favicon */}
        <link rel="icon" href="/bot.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased scrollbar-thin bg-black text-gray-100">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

// next.config.js
module.exports = {
  basePath: '/portfolio', 
};