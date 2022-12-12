import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import Seo from "../components/Seo";

// move to next.config.js
// const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const posterUrl = `https://image.tmdb.org/t/p/w500/`;

//Server Side fetching data
export default function Home({ results }: any) {
  //** Client side fetching data */

  // const [movies, setMovies] = useState<[] | null>(null);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("/api/movies");

  //     const data = await response.json();
  //     console.log(data, new Date());
  //     setMovies(data.results);
  //   })();
  // }, []);

  return (
    <div>
      <Seo pageNm="Home" />
      <p className="active">Home</p>
      {/* 1. Server Side : results */}
      {results.map((movie: any) => (
        // 2. Client Side : movies
        // {movies?.map((movie: any) => (
        <div key={`movie_List_${movie.title}`} className="box card">
          <Image
            className="poster"
            src={`${posterUrl}${movie.poster_path}`}
            alt={`${movie.title}`}
            fill
          />
          <p className="title">{movie.title}</p>
        </div>
      ))}

      <style jsx>{`
        .box {
          max-width: 30%;
          aspect-ratio: 9 / 16;
          background-color: white;
          margin: 100px;
          position: relative;
          border: 1px black solid;
          transition: all 0.3s ease-in-out;
        }

        .box:hover {
          transform: scale(1.2);
        }

        .box:after {
          content: "";
          position: absolute;
          width: 31px;
          height: 31px;
          background-color: white;
          top: -9px;
          right: -9px;
          z-index: 100;
          border-bottom-left-radius: 100%;
        }

        .box:before {
          content: "";
          position: absolute;
          width: 21px;
          height: 21px;
          background-color: white;
          top: 0px;
          right: 0px;
          z-index: 100;
          border-bottom-left-radius: 100%;
        }

        .card {
          padding: 5px;
        }

        .poster {
          object-fit: fill;
          z-index: 0;
        }

        .title {
          position: absolute;
          background-color: rgba(0, 0, 0, 0.4);
          left: 0;
          bottom: 0;
          width: 100%;
          color: white;
          z-index: 10;
        }
      `}</style>
    </div>
  );
}

// Server Side fetching data
// run on server merely
export async function getServerSideProps() {
  // absolue url 필요함

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  // const response = await fetch(`http://localhost:3000/api/movies`);

  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
}
