import styled from "styled-components";

export const MovieCardWrapper = styled.div`
  margin: 8px;
  width: 250px;
  height: 350px;
  border: 2px solid #403a4e;
  background-color: #464a4c;

  @media (max-width: 600px) {
    margin: 3px;
  }
`;

export const MoviePoster = styled.img`
  height: 80%;
  width: 100%;
  object-fit: fill;
`;

export const MovieDetailsWrapper = styled.div`
  padding: 5px 10px;
  background-color: #464a4c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.h4`
  background-color: #464a4c;
`;

export const RatingWrapper = styled.div`
  position: relative;
`;

export const Rating = styled.p`
  position: absolute;
  top: 30%;
  left: 25%;
  color: black;
  font-size: xx-small;
`;
