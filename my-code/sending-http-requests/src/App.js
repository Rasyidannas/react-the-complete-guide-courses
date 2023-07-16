import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from './components/AddMovie';
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoding, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //fetch API
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://reasct-http-39dc5-default-rtdb.firebaseio.com/movies.json");

      //this is for response not successfull
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      //this is for change re-structured data and response successfull
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  //this is for avoid infinity loop/rerender for fetchMoviesHandler
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    console.log();
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoding) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
