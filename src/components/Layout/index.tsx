import { Noto_Sans_KR } from 'next/font/google';
import { Header } from "../Header";
import styles from './index.module.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export function Layout({ children }: { children: React.ReactNode }) {
  
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