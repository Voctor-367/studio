import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import type React from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Define metadataBase for resolving relative icon paths if needed later
// const metadataBase = new URL('http://localhost:9002'); // Replace with your actual domain in production

export const metadata: Metadata = {
  // metadataBase: metadataBase, // Uncomment and set your base URL if using relative icon paths
  title: 'FolioFlow - Showcase Your Projects',
  description: 'FolioFlow: A personal portfolio showcasing innovative projects built with modern technologies.',
  icons: null, // Explicitly disable default favicon generation
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply dark class to html tag for consistent dark mode
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar-thin bg-black text-gray-100`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
