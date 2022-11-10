import "./App.css";
import { FilterSection } from "./components/FilterSection/FilterSection";
import { MovieDetail } from "./components/MovieDetail/MovieDetail";
import { MovieList } from "./components/MovieList/MovieList";

function App() {
  const movie1 = [
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title: "Batman Begins",
      Type: "movie",
      Year: "2005",
      imdbID: "tt0372784",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title: "Batman Begins",
      Type: "movie",
      Year: "2005",
      imdbID: "tt0372784",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title: "Batman Begins",
      Type: "movie",
      Year: "2005",
      imdbID: "tt0372784",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title: "Batman Begins",
      Type: "movie",
      Year: "2005",
      imdbID: "tt0372784",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title: "Batman Begins",
      Type: "movie",
      Year: "2005",
      imdbID: "tt0372784",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title: "Batman Begins",
      Type: "movie",
      Year: "2005",
      imdbID: "tt0372784",
    },
  ];
  // const [movieList, setMovieList] = useState([]);

  // // useEffect(() => {
  // //   fetchData("Batman");
  // // }, []);

  // const fetchData = async (title) => {
  //   const res = await fetch(`${url}&s=${title}`);
  //   const data = await res.json();
  //   data.Response !== "False" ? setMovieList(data.Search) : setMovieList([]);
  //   // console.log(data.Search);
  // };

  return (
    <div className="mainContainer">
      <FilterSection />
      <MovieList />
      <MovieDetail />
    </div>
  );
}
export default App;
