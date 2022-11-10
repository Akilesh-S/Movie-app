import React from "react";
import { BoldSpan } from "../BoldSpan/BoldSpan";

export const Detail = ({ name, value, style }) => {
  return (
    <p style={{ ...style }}>
      <BoldSpan>{name}: </BoldSpan>
      {value}
    </p>
  );
};
