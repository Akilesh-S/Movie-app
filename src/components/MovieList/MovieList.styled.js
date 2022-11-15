import styled from "styled-components";

export const LoadingContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 3px solid #4d4d4d;
  border-right: 3px solid #4d4d4d;
`;

export const MovieListContainer = styled.div`
  flex: 4;
  background-color: #303030;
  border-left: 3px solid #4d4d4d;
  border-right: 3px solid #4d4d4d;
`;

export const TitleContainer = styled.div`
  background-color: #171717;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
`;
export const Hamburger = styled.img`
  display: none;

  @media (max-width: 600px) {
    display: inline;
    width: 30px;
    height: 15px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex: 1;
  float: right;
`;

export const SearchIcon = styled.img`
  float: right;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
`;
