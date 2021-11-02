import styled from "styled-components";

export const Container = styled.div`
  padding: 35px 40px;
  display: flex;
  flex-wrap: wrap;

  @media(max-width: 800px) {
    padding: 30px 20px;
  }
`;

export const TextInfo = styled.div`
  width: 40%;

  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const InputBox = styled.div`
  width: calc(60% - 80px);
  padding: 20px 40px;

  @media(max-width: 800px) {
    padding: 30px 0px;
    width: 100%;
  }
`;