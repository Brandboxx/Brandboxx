import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
`;

export const Nav = styled.div`
  flex: 0 0 250px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Info = styled.div`
  flex: 1 1 100%;
  max-width: 1100px;
  margin: 0px auto;
`;
