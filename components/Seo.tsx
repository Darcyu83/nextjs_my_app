import Head from "next/head";
import { ReactNode } from "react";

export default function Seo({ pageNm }: { pageNm: ReactNode }) {
  return (
    <Head>
      <title>{`${pageNm} | NextJs`}</title>
    </Head>
  );
}
