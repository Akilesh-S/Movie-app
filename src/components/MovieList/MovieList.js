import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import search from "../../assets/searchpng.png";
import dropDownArrow from "../../assets/arrow drop downpng.png";
import hamburger from "../../assets/hamburger.png";
import {
  Hamburger,
  IconContainer,
  ListContainer,
  LoadingContainer,
  MovieListContainer,
  SearchIcon,
  TitleContainer,
} from "./MovieList.styled";

export const MovieList = () => {
  const { movieList, setHamburgerIsPressed, hamburgerIsPressed } =
    useContext(AppContext);

  const hamburgerClickHandler = () => {
    setHamburgerIsPressed(!hamburgerIsPressed);
  };

  // if (movieList.length === 0)
  //   return (
  //     <LoadingContainer>
  //       <p>Loading ...</p>
  //       <p>If not loaded, try checking the filter</p>
  //     </LoadingContainer>
  //   );

  const EmptyContainer = (
    <LoadingContainer>
      <p>Loading ...</p>
      <p>If not loaded, try checking the filter</p>
    </LoadingContainer>
  );

  const MovieContainer = (
    <ListContainer>
      {movieList.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ListContainer>
  );

  return (
    <MovieListContainer>
      <TitleContainer>
        <Hamburger
          alt="hamburger"
          src={hamburger}
          onClick={hamburgerClickHandler}
        />
        <span>Movie Browser</span>
        <IconContainer>
          <SearchIcon src={search} alt="search" />
          {/* <div className={styles.year}>
            <span className={styles.yearText}>1999</span>
            <img src={dropDownArrow} alt="dropDownArrow" />
          </div> */}
        </IconContainer>
      </TitleContainer>

      {/* Movie Component */}
      {movieList.length === 0 ? EmptyContainer : MovieContainer}
    </MovieListContainer>
  );
};
