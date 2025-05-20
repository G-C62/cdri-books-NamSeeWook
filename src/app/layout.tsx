import Header from '@/components/Header';
import type { Metadata } from "next";
import { Noto_Sans_KR } from 'next/font/google';
import styles from './layout.module.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CDRI frontend 과제",
  description: "CDRI frontend 과제 by 남시욱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}
