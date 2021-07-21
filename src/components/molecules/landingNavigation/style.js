import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  background: transparent;

  display: flex;
  align-items: center;
  padding: 30px 0px;

  p {
    color: #000000;
    font-size: 16px;
    cursor: pointer;
    margin-left: 40px;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #149b9b;
    }
  }

  img {
    margin-top: 5px;
    cursor: pointer;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;
