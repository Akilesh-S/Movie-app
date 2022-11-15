import React, { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./FilterSection.module.css";
import { fetchData } from "../../services/fetchMovieData";
import { MOVIE } from "../../constans/contants";
import { fetchDataWithYear } from "../../services/fetchMovieDataWithYear";
import {
  CheckBox,
  CloseButton,
  FilterContainer,
  FilterWrapper,
  Genere,
  Select,
  Text,
  Title,
} from "./FilterSection.styled";

export const FilterSection = () => {
  const [isAll, setIsAll] = useState(true);
  const [isSeries, setIsSeries] = useState(false);
  const { setMovieList, movieList, hamburgerIsPressed, setHamburgerIsPressed } =
    useContext(AppContext);
  const [selectOptions, setSelectOptions] = useState([
    2022, 2021, 2020, 2019, 2018, 2017,
  ]);
  const [selectedYear, setSelectedYear] = useState("");

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
    <FilterContainer mobileHamburger={hamburgerIsPressed}>
      <Title>Filter</Title>
      <CloseButton onClick={hamburgerClickHandler}>Close</CloseButton>

      <FilterWrapper>
        {/* sort section */}
        <Text>Year</Text>
        <Select value={selectedYear} onChange={selectOnChangeHandler}>
          <option value={""}>All</option>
          {selectOptions.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </Select>

        {/* Genre section */}
        <Genere>Genre</Genere>
        <label>
          <CheckBox
            type="checkbox"
            title="all"
            value="all"
            checked={isAll}
            onChange={allCheckHandler}
          />
          All
        </label>
        <label>
          <CheckBox
            type="checkbox"
            title="series"
            value="series"
            checked={isSeries}
            onChange={seriesCheckHandler}
          />
          Series
        </label>
      </FilterWrapper>
    </FilterContainer>
  );
};
