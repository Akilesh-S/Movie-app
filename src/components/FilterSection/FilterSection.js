import React, { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./FilterSection.module.css";
import { fetchData } from "../../services/fetchMovieData";
import { MOVIE } from "../../constans/contants";
import { fetchDataWithYear } from "../../services/fetchMovieDataWithYear";

export const FilterSection = () => {
  const [isAll, setIsAll] = useState(true);
  const [isSeries, setIsSeries] = useState(false);
  const { setMovieList, movieList, hamburgerIsPressed, setHamburgerIsPressed } =
    useContext(AppContext);
  const [selectOptions, setSelectOptions] = useState([
    2022, 2021, 2020, 2019, 2018, 2017,
  ]);
  const [selectedYear, setSelectedYear] = useState(2022);

  const getMovieWithYear = useCallback(async () => {
    const data = await fetchDataWithYear(MOVIE, selectedYear);
    setMovieList(data);
  }, [selectedYear, setMovieList]);

  const getMovies = async () => {
    const data = await fetchData(MOVIE);
    setMovieList(data);
  };

  const isAllHandler = (isSelected) => {
    isSelected ? getMovieWithYear(MOVIE, selectedYear) : setMovieList([]);
  };

  const isSeriesHandler = (isSeries) => {
    isSeries
      ? setMovieList(movieList.filter((movie) => movie.Type === "series"))
      : getMovieWithYear(MOVIE, selectedYear);
  };

  const seriesCheckHandler = () => {
    isSeriesHandler(!isSeries);
    setIsSeries(!isSeries);
  };

  const allCheckHandler = () => {
    isAllHandler(!isAll);
    setIsAll(!isAll);
  };

  const selectOnChangeHandler = (e) => {
    setSelectedYear(e.target.value);
  };

  const hamburgerClickHandler = () => {
    setHamburgerIsPressed(!hamburgerIsPressed);
  };

  useEffect(() => {
    getMovieWithYear();
  }, [selectedYear, getMovieWithYear]);

  return (
    <div
      className={`${styles.container} ${
        hamburgerIsPressed ? "" : styles.containerNotDisplay
      }`}
    >
      <div className={styles.title}>Filter</div>
      <div className={styles.close} onClick={hamburgerClickHandler}>
        Close
      </div>

      <div className={styles.filters}>
        {/* sort section */}
        <p className={styles.text}>Sort</p>
        <select
          className={styles.select}
          value={selectedYear}
          onChange={selectOnChangeHandler}
        >
          {selectOptions.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>

        {/* Genre section */}
        <p className={styles.genere}>Genre</p>
        <label>
          <input
            className={styles.checkbox}
            type="checkbox"
            title="all"
            value="all"
            checked={isAll}
            onChange={allCheckHandler}
          />
          All
        </label>
        <label>
          <input
            className={styles.checkbox}
            type="checkbox"
            title="series"
            value="series"
            checked={isSeries}
            onChange={seriesCheckHandler}
          />
          Series
        </label>
      </div>
    </div>
  );
};
