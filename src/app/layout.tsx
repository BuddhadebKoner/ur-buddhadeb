import type { Metadata } from 'next';
import { Geist, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '../components/shared/Navbar';
import { ClerkProvider } from '@clerk/nextjs'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { QueryProvider } from '../../utils/react-query/QueryProvider';
import Footer from '@/components/shared/Footer';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
});

const manrope = Manrope({
   variable: '--font-manrope',
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
   icons: '/favicon.ico',
   title: 'Ur Buddhadeb',
   description: 'Generated by create next app',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <ClerkProvider >
         <html lang="en">
            <body
               className={`${manrope.variable} ${geistSans.variable} antialiased`}
            >
               <QueryProvider>
                  <Navbar />
                  {children}
                  <Footer />
               </QueryProvider>
               <SpeedInsights />
            </body>
         </html>
      </ClerkProvider>
   );
}
