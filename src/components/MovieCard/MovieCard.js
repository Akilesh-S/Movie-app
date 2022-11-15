import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./MovieCard.module.css";
import star from "../../assets/Starpng.png";
import { fetchDetails } from "../../services/fetchMovieDetail";
import {
  MovieCardWrapper,
  MovieDetailsWrapper,
  MoviePoster,
  Rating,
  RatingWrapper,
  TitleText,
} from "./MovieCard.styled";

export const MovieCard = ({ movie }) => {
  const { Poster, Title, imdbID, Year, Type } = movie;
  const { setMovieDetail } = useContext(AppContext);

  const getDetails = async () => {
    const data = await fetchDetails(imdbID);
    setMovieDetail(data);
  };

  return (
    <MovieCardWrapper key={imdbID} onClick={() => getDetails(imdbID)}>
      <MoviePoster
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
        alt={Title}
      />

      {/* Card detail section */}
      <MovieDetailsWrapper>
        <div>
          <TitleText>
            {Title?.length > 16 ? Title.substring(0, 15) + "..." : Title}
          </TitleText>
          <span>{Year}</span>
          {" - "}
          <span>{Type}</span>
        </div>
        <RatingWrapper>
          <img src={star} alt="star"></img>
          <Rating>7.5</Rating>
        </RatingWrapper>
      </MovieDetailsWrapper>
    </MovieCardWrapper>
  );
};
