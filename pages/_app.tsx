import { AppProps } from "next/app";
import Layout from "../components/Layout";
import NavBar from "../components/Navbar";

// 파일명은 고정이다. _app.tsx

// customized : 주로 공통 레이아웃을 반영
// 공통 속성 관리
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
