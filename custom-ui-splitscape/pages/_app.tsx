import type { AppProps } from "next/app";
import "../kindeSrc/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
