import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-paper-50 dark:bg-gray-900">
        <Navbar />
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </div>
    </ThemeProvider>
  );
} 