import type { Metadata } from 'next';
import { Inter, Fredoka, Comic_Neue, Indie_Flower, Pacifico, Bangers, Bubblegum_Sans } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fredoka = Fredoka({ 
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
});

const comicNeue = Comic_Neue({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-comic-neue',
  display: 'swap',
});

const indieFlower = Indie_Flower({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-indie-flower',
  display: 'swap',
});

const pacifico = Pacifico({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
  display: 'swap',
});

const bangers = Bangers({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bangers',
  display: 'swap',
});

const bubblegumSans = Bubblegum_Sans({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bubblegum-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "우리집 고양이 코코",
  description: "돼지 말랑이 코코 자랑하기",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${fredoka.variable} ${comicNeue.variable} ${indieFlower.variable} ${pacifico.variable} ${bangers.variable} ${bubblegumSans.variable} font-sans`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
