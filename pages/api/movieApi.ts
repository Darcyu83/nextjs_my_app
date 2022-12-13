import { API_MOVIE_POPULAR } from "./constants";

export async function getPopularMovies() {
  try {
    const response = await fetch(API_MOVIE_POPULAR);
    const { results: movies } = await response.json();
    return movies;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
