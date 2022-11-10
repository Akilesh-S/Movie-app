import React, { createContext, useEffect, useState } from "react";
import { fetchData } from "../services/fetchMovieData";
import { MOVIE } from "../constans/contants";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const [movieList, setMovieList] = useState([
  //   {
  //     Title: "The Avengers",
  //     Year: "2012",
  //     imdbID: "tt0848228",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Avengers: Endgame",
  //     Year: "2019",
  //     imdbID: "tt4154796",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Avengers: Infinity War",
  //     Year: "2018",
  //     imdbID: "tt4154756",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Avengers: Age of Ultron",
  //     Year: "2015",
  //     imdbID: "tt2395427",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "The Avengers",
  //     Year: "1998",
  //     imdbID: "tt0118661",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "The Avengers: Earth's Mightiest Heroes",
  //     Year: "2010–2012",
  //     imdbID: "tt1626038",
  //     Type: "series",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Ultimate Avengers: The Movie",
  //     Year: "2006",
  //     imdbID: "tt0491703",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Ultimate Avengers II",
  //     Year: "2006",
  //     imdbID: "tt0803093",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "The Avengers",
  //     Year: "1961–1969",
  //     imdbID: "tt0054518",
  //     Type: "series",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Avengers Assemble",
  //     Year: "2012–2019",
  //     imdbID: "tt2455546",
  //     Type: "series",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg",
  //   },
  // ]);

  // const [movieDetail, setMovieDetail] = useState({
  //   Title: "The Avengers: Earth's Mightiest Heroes",
  //   Year: "2010–2012",
  //   Rated: "TV-Y7",
  //   Released: "22 Sep 2010",
  //   Runtime: "30 min",
  //   Genre: "Animation, Action, Adventure",
  //   Director: "N/A",
  //   Writer: "N/A",
  //   Actors: "Eric Loomis, Colleen O'Shaughnessey, Brian Bloom",
  //   Plot: "After 74 villains break out of prison, Marvel's most powerful superheroes team up to capture all of them, and also to defend the Earth from widespread threats.",
  //   Language: "English",
  //   Country: "United States",
  //   Awards: "8 nominations",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
  //   Ratings: [{ Source: "Internet Movie Database", Value: "8.3/10" }],
  //   Metascore: "N/A",
  //   imdbRating: "8.3",
  //   imdbVotes: "15,124",
  //   imdbID: "tt1626038",
  //   Type: "series",
  //   totalSeasons: "2",
  //   Response: "True",
  // });
  const [movieList, setMovieList] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});
  const [hamburgerIsPressed, setHamburgerIsPressed] = useState(false);

  const getMovies = async () => {
    const data = await fetchData(MOVIE);
    setMovieList(data);
  };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  return (
    <AppContext.Provider
      value={{
        movieList,
        movieDetail,
        hamburgerIsPressed,
        setMovieList,
        setMovieDetail,
        setHamburgerIsPressed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
