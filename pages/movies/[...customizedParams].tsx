import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Seo from "../../components/Seo";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log(
    "getServerSideProps ===customizedParams ",
    params?.customizedParams
  );
  return {
    props: {
      params: params?.customizedParams,
    },
  };
};

export default function MoviesDetails({ params }: any) {
  // const router = useRouter();

  const [title, id] = (params as [string, number]) || [];
  // const [title, id] = (router.query.customizedParams as [string, number]) || [];

  // useEffect(() => {
  //   console.log("route ===", id);
  //   if (!id) return;

  //   (async () => {
  //     const response = await fetch(`/api/movies/${id}`);
  //     const data = await response.json();

  //     console.log(data);
  //   })();
  // }, [id]);

  return (
    <>
      <Seo pageNm={`${title}`} />
      <h4>
        MoviesDetails:: {title || "Loading..."} {id}
      </h4>
    </>
  );
}
