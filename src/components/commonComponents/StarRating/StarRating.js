import React from "react";
import star from "../../../assets/Starpng.png";
import style from "./StarRating.module.css";
import emptyStar from "../../../assets/star0.0png.png";

export const StarRating = ({ rating, count, onRating }) => {
  const starRating = Array(count)
    .fill(0)
    .map((x, i) => i + 1)
    .map((index) => (
      <img
        key={index}
        src={rating <= index ? emptyStar : star}
        className={style.starIcon}
        alt="star"
        onClick={() => onRating(index + 1)}
      ></img>
    ));

  return <>{starRating}</>;
};
