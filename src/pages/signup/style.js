import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    width: 48%;
    margin-top: 20px;

    &:last-of-type {
      width: 100%;
    }

    @media(max-width: 800px) {
      width: 100%;
    }
  }

  section {
    width: 100%;
    margin-top: 20px;
  }
`;

export const Terms = styled.p`
  margin-top: 30px;
  color: #000000;
  font-size: 12px;

  span {
    font-weight: 700;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const AuthLink = styled.p`
  color: #111111;
  margin-top: 50px;

  span {
    font-weight: 700;
    text-decoration: underline;
    cursor: pointer;
    color: #149A9B;
  }
`;
