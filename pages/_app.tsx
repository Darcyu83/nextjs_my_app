import { AppProps } from "next/app";
import NavBar from "../components/Navbar";

// 파일명은 고정이다. _app.tsx

// customized
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>Span text :: Hello as a footer</span>

      <style jsx global>{`
        span {
          color: green;
        }
      `}</style>
    </>
  );
}
