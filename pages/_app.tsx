import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <span>Span text :: Hello</span>

      <style jsx global>{`
        span {
          color: green;
        }
      `}</style>
    </div>
  );
}
