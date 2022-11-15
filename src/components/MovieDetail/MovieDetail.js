import React, { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./MovieDetail.module.css";
import { StarRating } from "../commonComponents/StarRating/StarRating";
import { BoldSpan } from "../commonComponents/BoldSpan/BoldSpan";
import { fetchDetails } from "../../services/fetchMovieDetail";
import {
  DetailContainer,
  ImageContainer,
  LoadingContainer,
  MovieDetailContainer,
  MovieDetails,
  PlotText,
  PlotWrapper,
  PosterImage,
  PosterSmallImage,
  TitleContainer,
} from "./MovieDetails.styled";

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
      <LoadingContainer>
        <p>Loading ...</p>
        <p>If not loaded, try checking the filter</p>
      </LoadingContainer>
    );

  return (
    <MovieDetailContainer>
      {/* Image container */}
      <ImageContainer>
        <PosterImage
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </ImageContainer>

      {/* Detail container */}

      <TitleContainer>
        <div>
          <h4>{Title}</h4>
          <span>{Year}</span>
          {" - "}
          <span>{Type}</span>
        </div>
        <div>
          <StarRating
            count={5}
            rating={rating}
            onRating={(rate) => setRating(rate)}
          />
        </div>
      </TitleContainer>

      <DetailContainer>
        <PosterSmallImage
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
        <MovieDetails>
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
        </MovieDetails>
      </DetailContainer>

      {/* Plot section */}
      <PlotWrapper>
        <BoldSpan>Plot</BoldSpan>
        <PlotText>{Plot}</PlotText>
      </PlotWrapper>
    </MovieDetailContainer>
  );
};
