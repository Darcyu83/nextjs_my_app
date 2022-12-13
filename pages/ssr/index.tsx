import { GetServerSideProps } from "next";
import Image from "next/image";
import { API_MOVIE_POPULAR, URL_POSTER_PREFIX } from "../api/constants";

export default function SsrRender({ movies }: any) {
  return (
    <div className="container">
      {movies.map((movie: any) => (
        <div key={movie.id} className="card">
          <Image
            src={`${URL_POSTER_PREFIX}${movie.poster_path}`}
            alt={`poster_${movie.title}`}
          />
          <p>{movie.title}</p>
        </div>
      ))}

      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
        }
        .card {
          background-color: gray;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //   const res = await fetch(`http://localhost:3000${API_MOVIE_POPULAR}`);
  const res = await fetch(`http://localhost:3000${API_MOVIE_POPULAR}`);

  const { results: movies } = await res.json();

  return {
    props: {
      movies,
    },
  };
};
