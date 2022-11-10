import React, { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./MovieDetail.module.css";
import { StarRating } from "../commonComponents/StarRating/StarRating";
import { BoldSpan } from "../commonComponents/BoldSpan/BoldSpan";
import { fetchDetails } from "../../services/fetchMovieDetail";

export const MovieDetail = () => {
  const { movieDetail, movieList, setMovieDetail } = useContext(AppContext);
  const [rating, setRating] = useState(0);

  const { Poster, Title, Year, Type, Genre, Released, Ratings, Actors, Plot } =
    movieDetail;

  const getMovieDetail = useCallback(async () => {
    setMovieDetail({});
    if (!!movieList[0]?.imdbID) {
      const data = await fetchDetails(movieList[0]?.imdbID);
      setMovieDetail(data);
    }
  }, [setMovieDetail, movieList]);

  useEffect(() => {
    getMovieDetail();
  }, [movieList, getMovieDetail]);

  // Error Handle
  if (Title == null)
    return (
      <div className={styles.containerLoading}>
        <p>Loading ...</p>
        <p>If not loaded, try checking the filter</p>
      </div>
    );

  return (
    <div className={styles.container}>
      {/* Image container */}
      <div className={styles.image_container}>
        <img
          className={styles.large_image}
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>

      {/* Detail container */}
      <div className={styles.detail_container}>
        <div className={styles.title_container}>
          <div>
            <h4 className={styles.title}>{Title}</h4>
            <span>{Year}</span>
            {" - "}
            <span>{Type}</span>
          </div>
          <div className={styles.starpng}>
            <StarRating
              count={5}
              rating={rating}
              onRating={(rate) => setRating(rate)}
            />
          </div>
        </div>
        <div className={styles.detail_section}>
          <img
            className={styles.small_image}
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
          />
          <div className={styles.details}>
            <p>
              <BoldSpan>Title:</BoldSpan> {Title}
            </p>

            <p>
              <BoldSpan>Year:</BoldSpan> {Year}
            </p>
            <p>
              <BoldSpan>Genre:</BoldSpan> {Genre}
            </p>
            <p>
              <BoldSpan>Release:</BoldSpan> {Released}
            </p>
            <p>
              <BoldSpan>Rating: </BoldSpan>
              {Ratings[0]?.Value}
            </p>
            <p>
              <BoldSpan>Actors: </BoldSpan>
              {Actors}
            </p>
          </div>
        </div>

        {/* Plot section */}
        <div className={styles.plot_section}>
          <BoldSpan>Plot</BoldSpan>
          <p className={styles.plot}>{Plot}</p>
        </div>
      </div>
    </div>
  );
};
