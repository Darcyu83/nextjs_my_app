import Head from "next/head";

export default function Seo({ pageNm }: { pageNm: string }) {
  return (
    <Head>
      <title>{pageNm} | NextJs</title>
    </Head>
  );
}
