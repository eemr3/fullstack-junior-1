import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { JobProvider } from '../context/JobContext';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Desafio Técnico - Full Stack Junior',
  description: 'Desafio proposto para vaga de desenvolvedor full stack junior',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <JobProvider>{children}</JobProvider>
      </body>
    </html>
  );
}
