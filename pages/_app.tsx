import "@/assets/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "@/layouts/Layout";

export default function App({ Component, pageProps }: any) {
  const renderWithLayout =  Component.getLayout || function (page: any) {
      return (
        <ThemeProvider defaultTheme="system" attribute="class">
          <Layout>{page}</Layout>
        </ThemeProvider>
      );
    };

  return renderWithLayout(<Component {...pageProps} />);
}
