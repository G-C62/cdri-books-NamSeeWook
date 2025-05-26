import { Layout } from "@/components/Layout";
import { QueryProvider } from "@/lib/providers/QueryProvider";
import { AppProps } from "next/app";


export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <QueryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryProvider>
  );
}
