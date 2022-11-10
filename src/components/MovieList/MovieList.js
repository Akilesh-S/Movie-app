import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import search from "../../assets/searchpng.png";
import dropDownArrow from "../../assets/arrow drop downpng.png";
import hamburger from "../../assets/hamburger.png";

export const MovieList = () => {
  const { movieList, setHamburgerIsPressed, hamburgerIsPressed } =
    useContext(AppContext);

  const hamburgerClickHandler = () => {
    setHamburgerIsPressed(!hamburgerIsPressed);
  };

  if (movieList.length === 0)
    return (
      <div className={styles.containerLoading}>
        <p>Loading ...</p>
        <p>If not loaded, try checking the filter</p>
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img
          alt="hamburger"
          className={styles.hamburger}
          src={hamburger}
          onClick={hamburgerClickHandler}
        />
        <span>Movie Browser</span>
        <div className={styles.iconContainer}>
          <img className={styles.search_icon} src={search} alt="search" />
          {/* <div className={styles.year}>
            <span className={styles.yearText}>1999</span>
            <img src={dropDownArrow} alt="dropDownArrow" />
          </div> */}
        </div>
      </div>

      {/* Movie Component */}
      <div className={styles.list_container}>
        {movieList.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};
