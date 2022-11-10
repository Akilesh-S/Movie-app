import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const url = "http://www.omdbapi.com/?apikey=25bf034d";

const AppProvider = ({ children }) => {
  // const [movieList, setMovieList] = useState([]);
  // const [movieDetail, setMovieDetail] = useState({
  //   Title: "Avengers: Age of Ultron",
  //   Year: "2015",
  //   Rated: "PG-13",
  //   Released: "01 May 2015",
  //   Runtime: "141 min",
  //   Genre: "Action, Adventure, Sci-Fi",
  //   Director: "Joss Whedon",
  //   Writer: "Joss Whedon, Stan Lee, Jack Kirby",
  //   Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo",
  //   Plot: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
  //   Language: "English, Korean",
  //   Country: "United States",
  //   Awards: "8 wins & 51 nominations",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  //   Ratings: [
  //     { Source: "Internet Movie Database", Value: "7.3/10" },
  //     { Source: "Rotten Tomatoes", Value: "76%" },
  //     { Source: "Metacritic", Value: "66/100" },
  //   ],
  //   Metascore: "66",
  //   imdbRating: "7.3",
  //   imdbVotes: "856,385",
  //   imdbID: "tt2395427",
  //   Type: "movie",
  //   DVD: "02 Oct 2015",
  //   BoxOffice: "$459,005,868",
  //   Production: "N/A",
  //   Website: "N/A",
  //   Response: "True",
  // });
  const [movieDetail, setMovieDetail] = useState({});
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchData("Avengers");
  }, []);

  useEffect(() => {
    setMovieDetail({});
    if (!!movieList[0]?.imdbID) {
      fetchDetails(movieList[0]?.imdbID);
    }
  }, [movieList]);

  const fetchData = async (title) => {
    const res = await fetch(`${url}&s=${title}`);
    const data = await res.json();
    data.Response !== "False" ? setMovieList(data.Search) : setMovieList([]);
  };

  const fetchDetails = async (id) => {
    const res = await fetch(`${url}&i=${id}`);
    const data = await res.json();
    data.Response !== "False" ? setMovieDetail(data) : setMovieDetail([]);
  };

  const isAllHandler = (isSelected) => {
    isSelected ? fetchData("Avengers") : setMovieList([]);
    // isSelected
    //   ? setMovieList([
    //       {
    //         Poster:
    //           "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    //         Title: "Batman Begins",
    //         Type: "movie",
    //         Year: "2005",
    //         imdbID: "tt0372784",
    //       },
    //       {
    //         Poster:
    //           "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    //         Title: "Batman Begins",
    //         Type: "movie",
    //         Year: "2005",
    //         imdbID: "tt0372784",
    //       },
    //       {
    //         Poster:
    //           "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    //         Title: "Batman Begins",
    //         Type: "movie",
    //         Year: "2005",
    //         imdbID: "tt0372784",
    //       },
    //     ])
    //   : setMovieList([]);
  };

  const isSeriesHandler = (isSeries) => {
    isSeries
      ? setMovieList(movieList.filter((movie) => movie.Type === "series"))
      : fetchData("Avengers");
    // setMovieList([
    //   {
    //     Poster:
    //       "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    //     Title: "Batman Begins",
    //     Type: "movie",
    //     Year: "2005",
    //     imdbID: "tt0372784",
    //   },
    //   {
    //     Poster:
    //       "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    //     Title: "Batman Begins",
    //     Type: "series",
    //     Year: "2005",
    //     imdbID: "tt0372784",
    //   },
    //   {
    //     Poster:
    //       "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    //     Title: "Batman Begins",
    //     Type: "movie",
    //     Year: "2005",
    //     imdbID: "tt0372784",
    //   },
    // ]);
  };

  return (
    <AppContext.Provider
      value={{
        movieList,
        movieDetail,
        isAllHandler,
        fetchDetails,
        isSeriesHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
