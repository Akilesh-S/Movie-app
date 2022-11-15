import styled from "styled-components";

export const FilterContainer = styled.div`
  flex: 1;
  border: 1px solid #262a29;
  background-color: #303030;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 600px) {
    display: block;
    width: 200px;
    height: 100vh;
    position: absolute;
    top: 0;

    ${({ mobileHamburger }) => (mobileHamburger ? "" : `display:none`)}
  }
`;

export const Title = styled.div`
  background-color: #171717;
  padding: 20px;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CloseButton = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
    float: right;
    padding: 20px;
    font-size: 16px;
    font-weight: 200;
  }
`;

export const FilterWrapper = styled.div`
  padding: 16px;
`;

export const Text = styled.p`
  margin-bottom: 5px;
  font-weight: 500;
`;

export const Select = styled.select`
  color: white;
  background-color: #30303027;
  border: 0.5 solid white;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const Genere = styled.p`
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const CheckBox = styled.input`
  margin: 2px;
  padding: 5px;
`;
