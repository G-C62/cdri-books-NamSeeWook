import { Layout } from "@/components/Layout";
import { QueryProvider } from '@/lib/providers/QueryProvider';
import { AppProps } from "next/app";


export default function App({
  Component,
  pageProps,
}: AppProps) {
  console.log(typeof Component);
  return (
    <QueryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </QueryProvider>
  );
}
