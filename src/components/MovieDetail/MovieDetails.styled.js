import styled from "styled-components";

export const LoadingContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const MovieDetailContainer = styled.div`
  flex: 4;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TitleContainer = styled.div`
  padding: 10px 25px;
  background-color: #464a4c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 25px;
`;

export const PosterSmallImage = styled.img`
  width: 20%;
  height: 40%;
`;

export const MovieDetails = styled.div`
  padding: 0 0 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PlotWrapper = styled.div`
  padding: 0 25px;
`;

export const PlotText = styled.p`
  margin-top: 10px;
`;
