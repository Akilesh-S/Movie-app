import React from "react";
import star from "../../../assets/Starpng.png";
import style from "./StarRating.module.css";
import emptyStar from "../../../assets/star0.0png.png";
import { Image } from "./StarRating.styled";

export const StarRating = ({ rating, count, onRating }) => {
  const starRating = Array(count)
    .fill(0)
    .map((x, i) => i + 1)
    .map((index) => (
      <Image
        key={index}
        src={rating <= index ? emptyStar : star}
        alt="star"
        onClick={() => onRating(index + 1)}
      ></Image>
    ));

  return <>{starRating}</>;
};
