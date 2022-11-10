import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./MovieCard.module.css";
import star from "../../assets/Starpng.png";

export const MovieCard = ({ movie }) => {
  const { Poster, Title, imdbID, Year, Type } = movie;
  const { fetchDetails } = useContext(AppContext);

  return (
    <div
      className={styles.movie}
      key={imdbID}
      onClick={() => fetchDetails(imdbID)}
    >
      <img
        className={styles.image}
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
        alt={Title}
      />

      {/* Card detail section */}
      <div className={styles.details}>
        <div>
          <h4 className={styles.title}>
            {Title.length > 16 ? Title.substring(0, 15) + "..." : Title}
          </h4>
          <span>{Year}</span>
          {" - "}
          <span>{Type}</span>
        </div>
        <div className={styles.starpng}>
          <img src={star} alt="star"></img>
          <p className={styles.rating}>7.5</p>
        </div>
      </div>
    </div>
  );
};
