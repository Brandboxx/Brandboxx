import styled from "styled-components";

export const Info = styled.section`
  padding: 40px;
  @media (max-width: 800px) {
    padding: 20px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    padding-top: 20px;
  }
`;

export const CardInfo = styled.div`
  width: 60%;
  margin-top: 80px;

  h3 {
    font-size: 18px;
    padding-bottom: 30px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #149b9b27;
    padding: 30px;

    main {
      display: flex;
      align-items: center;
      p {
        color: #323438;
        margin-left: 20px;
      }
    }
    p {
      color: #323438;
    }
  }

  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const DashCardContainers = styled.div`
  width: 31.33%;

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 20px;
    &:first-of-type {
      margin-top: 0px;
    }
  }
`;
