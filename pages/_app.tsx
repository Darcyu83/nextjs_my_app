import { AppProps } from "next/app";
import Layout from "../components/Layout";
import NavBar from "../components/Navbar";

// 파일명은 고정이다. _app.tsx

// customized
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <footer>Span text :: Hello as a footer</footer>

      <style jsx global>{`
        span {
          color: green;
        }

        a: {
          cursor: pointer;
          text-decoration: none;
        }
        a:hover {
          font-weight: bold;
        }
      `}</style>
    </Layout>
  );
}
