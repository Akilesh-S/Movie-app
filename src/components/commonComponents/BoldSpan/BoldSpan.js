import React from "react";

export const BoldSpan = ({ children, className }) => {
  return (
    <span className={className} style={{ fontWeight: 700 }}>
      {children}
    </span>
  );
};
